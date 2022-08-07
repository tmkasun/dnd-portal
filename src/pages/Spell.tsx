import { useParams } from "react-router-dom";
import MainLayout from "../components/Layouts/Main";
import SpellDetails from "../components/Spell/SpellDetails";

export const Spell = () => {
  let { spellName } = useParams<{ spellName: string }>();
  return (
    <MainLayout>
      <SpellDetails spellName={spellName} />
    </MainLayout>
  );
};

export default Spell;
