import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/HomePage";
import Header from "./components/header";
import { PersonagensPage } from "./pages/personagens/PersonagensPage";
import { EpisodiosPage } from "./pages/episodios/EpisodiosPage";
import { LugaresPage } from "./pages/lugares/LugaresPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personagens" element={<PersonagensPage />} />
        <Route path="/episodios" element={<EpisodiosPage />} />
        <Route path="/lugares" element={<LugaresPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
