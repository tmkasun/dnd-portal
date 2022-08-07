import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spells from "../pages/Spells";
import Spell from "../pages/Spell";
import SpellNotFound from "./Spell/SpellNotFound";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Spells />} />
          <Route path="spells">
            <Route index element={<Spells />} />
            <Route path=":spellName" element={<Spell />} />
            <Route path="*" element={<SpellNotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
