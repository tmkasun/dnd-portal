import { Link } from "react-router-dom";
import { useSpellDetails } from "../../data/hooks";
import DetailRow from "./components/DetailRow";
import "./SpellDetails.css";

type SpellDetailsProps = {
  spellName: string;
};
export const SpellDetails = ({ spellName }: SpellDetailsProps) => {
  const [data, isLoadig, error] = useSpellDetails(spellName);
  const name = data ? data.name : "Loading . . .";
  const desc = data ? data.desc : "Loading . . .";
  const casting_time = data ? data.casting_time : "Loading . . .";
  const level = data ? data.level : "Loading . . .";
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
          <h2>{name}</h2>
          {Array.isArray(desc) ? (
            desc.map((item) => <p className="description-item">{item}</p>)
          ) : (
            <p className="description-item">{desc}</p>
          )}
        </section>
        <section>
          <DetailRow name="Casting time">{casting_time}</DetailRow>
          <DetailRow name="level of the spell">{level}</DetailRow>
          <DetailRow name="can be cast in a 10-min">
            <input
              type="checkbox"
              aria-label="can be cast in a 10-min"
              checked={ritual}
            />
          </DetailRow>
        </section>
      </div>
    </div>
  );
};

export default SpellDetails;
