import { useParams } from "react-router-dom";
import MainLayout from "../components/Layouts/Main";
import SpellDetails from "../components/Spell/SpellDetails";

export const Spell = () => {
  let { spellIndex = "" } = useParams<{ spellIndex: string }>();
  return (
    <MainLayout>
      <SpellDetails spellIndex={spellIndex} />
    </MainLayout>
  );
};

export default Spell;
