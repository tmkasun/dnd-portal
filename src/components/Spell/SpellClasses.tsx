import './SpellClasses.css';

const spellClasses = [
  'bard',
  'barbarian',
  'cleric',
  'druid',
  'fighter',
  'monk',
  'paladin',
  'ranger',
  'rogue',
  'sorcerer',
  'warlock',
  'wizard',
];
type SpellClassesProps = {
  onChange: (spellClass: string) => void;
  value: string;
};
export function SpellClasses({ onChange, value }: SpellClassesProps) {
  return (
    <div className="spell-classes">
      {spellClasses.map((spellClass) => (
        <button
          type="button"
          name={spellClass}
          onClick={(event) => onChange(event.currentTarget.name)}
          id={spellClass}
          className={`spell-class ${value === spellClass && 'selected-spell'}`}
          key={spellClass}
        >
          {spellClass}
        </button>
      ))}
    </div>
  );
}

export default SpellClasses;
