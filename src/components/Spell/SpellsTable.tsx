import { Link } from "react-router-dom";

import { useSpellByClass } from "../../data/hooks";
import "./SpellsTable.css";

type SpellsTableProps = {
  spellClass: string;
};
export const SpellsTable = ({ spellClass }: SpellsTableProps) => {
  const [data, isLoading, errors] = useSpellByClass(spellClass);
  return (
    <div className="spells-listing">
      <>
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
                      <div>rate</div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {isLoading && <div className="loading-row">Loading ...</div>}
        {!isLoading && data && data.results.length === 0 && (
          <div className="loading-row">No Data Available!</div>
        )}
        {!isLoading && errors && (
          <div className="loading-row data-error">
            Error while fetching the <b className="bold-name">{spellClass}</b>{" "}
            data!
          </div>
        )}
      </>
    </div>
  );
};

export default SpellsTable;
