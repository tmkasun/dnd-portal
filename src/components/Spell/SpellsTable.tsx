import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useSpellByClass } from '../../data/hooks';
import { useRatings, useUpdateRating } from '../../data/Providers';
import { Rating } from '../Rating';
import './SpellsTable.css';

type SpellsTableProps = {
  spellClass: string;
};
export function SpellsTable({ spellClass }: SpellsTableProps) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [data, isLoading, errors] = useSpellByClass(spellClass, page, limit);
  const ratings = useRatings();
  const updateRating = useUpdateRating();

  useEffect(() => {
    setPage(1);
    setLimit(10);
  }, [spellClass]);
  return (
    <div className="spells-listing">
      <table>
        <thead className="spells-listing-head">
          <tr>
            <th className="spell-name-column">Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            !errors &&
            data &&
            data.results.map((spell) => (
              <tr key={spell.index}>
                <td>
                  <Link to={`/spells/${spell.index}`} key={spell.name}>
                    {spell.name}
                  </Link>
                </td>
                <td>
                  <div className="action-column">
                    <Link to={`/spells/${spell.index}`} key={spell.name}>
                      View
                    </Link>
                    <div>
                      <Rating
                        rated={ratings[spell.index]}
                        onClick={() => {
                          updateRating(spell.index, !ratings[spell.index]);
                        }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {isLoading ? <div className="loading-row">Loading ...</div> : null}
      {!isLoading && data && data.results.length === 0 ? (
        <div className="loading-row">No Data Available!</div>
      ) : null}
      {!isLoading && errors ? (
        <div className="loading-row data-error">
          Error while fetching the <b className="bold-name">{spellClass}</b>{' '}
          data!
        </div>
      ) : null}
      {data && data.count >= 10 && (
        <div className="pagination-section">
          <div>
            Current page: {page} / {Math.ceil(data.count / limit)}
          </div>
          <nav>
            <button
              type="button"
              onClick={() =>
                page < Math.ceil(data.count / limit) && setPage(page + 1)
              }
            >
              Next
            </button>
            <button type="button" onClick={() => page > 1 && setPage(page - 1)}>
              previous
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}

export default SpellsTable;
