import {} from "./index.css";
import Navbar from "./components/Navbar";
import { InicioPage } from "./components/Inicio/InicioPage";
import { PerfilPage } from "./components/perfil/PerfilPage";
import { ExperienciaPage } from "./components/experiencia/ExperienciaPage";
import { EstudiosPage } from "./pages/EstudiosPage";
import { PortafolioPage } from "./pages/PortafolioPage";
import { ContactoPage } from "./pages/ContactoPage";

function App() {
  return (
    <>
      <Navbar />
      <section id="inicio">
        <InicioPage />
      </section>
      <section id="perfil">
        <PerfilPage />
      </section>
      <br />  
      <li
        class="badge badge-pill badge-primary font-weight-bold rounded-pill"
        aria-current="page"
        id="tituloSecciones"
      >
        👩🏻‍💻 Experiencia Laboral
      </li>
      <br />
      <br />
      <section id="experiencia">
        <ExperienciaPage />
      </section>
      <hr />
      <br />
      <section id="estudios">
        <EstudiosPage />
      </section>
      <hr />
      <br />
      <section id="portafolio">
        <PortafolioPage />
      </section>
      <hr />
      <br />
      <section id="contacto">
        <ContactoPage />
      </section>
    </>
  );
}

export default App;
