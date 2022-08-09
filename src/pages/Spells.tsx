import { useState } from 'react';
import SpellsTable from '../components/Spell/SpellsTable';
import SpellClasses from '../components/Spell/SpellClasses';
import MainLayout from '../components/Layouts/Main';

export function Spells() {
  const [currentSpellClass, setCurrentSpellClass] = useState('bard');
  return (
    <MainLayout>
      <SpellClasses
        value={currentSpellClass}
        onChange={(spellClass) => setCurrentSpellClass(spellClass)}
      />
      <SpellsTable spellClass={currentSpellClass} />
    </MainLayout>
  );
}

export default Spells;
