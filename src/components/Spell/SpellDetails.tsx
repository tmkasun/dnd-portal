import { Link } from 'react-router-dom';
import { useSpellDetails } from '../../data/hooks';
import { useRatings } from '../../data/Providers';
import Rating from '../Rating';
import DetailRow from './components/DetailRow';
import './SpellDetails.css';

type SpellDetailsProps = {
  spellIndex: string;
};
export function SpellDetails({ spellIndex }: SpellDetailsProps) {
  const [data] = useSpellDetails(spellIndex);
  const ratings = useRatings();

  const name = data ? data.name : 'Loading . . .';
  const desc = data ? data.desc : 'Loading . . .';
  const castingTime = data ? data.casting_time : 'Loading . . .';
  const level = data ? data.level : 'Loading . . .';
  const ritual = data ? data.ritual : false;

  return (
    <div className="spell-details-wrapper">
      <nav className="spell-details-nav-bar">
        <Link className="back-link" to="/">
          Back
        </Link>
      </nav>
      <div className="spell-content">
        <section>
          <div className="spell-detail-head">
            <h2 data-testid="spell-name-header">{name}</h2>
            {ratings[spellIndex] && (
              <Rating disabled rated={ratings[spellIndex]} />
            )}
          </div>
          {Array.isArray(desc) ? (
            desc.map((item) => (
              <p key={item} className="description-item">
                {item}
              </p>
            ))
          ) : (
            <p className="description-item">{desc}</p>
          )}
        </section>
        <section>
          <DetailRow name="Casting time">{castingTime}</DetailRow>
          <DetailRow name="level of the spell">{level}</DetailRow>
          <DetailRow name="can be cast in a 10-min">
            <input
              type="checkbox"
              aria-label="can be cast in a 10-min"
              defaultChecked={ritual}
            />
          </DetailRow>
        </section>
      </div>
    </div>
  );
}

export default SpellDetails;
