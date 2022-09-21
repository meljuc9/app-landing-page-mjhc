import {} from "./index.css";
import Navbar from "./components/Navbar";
import { InicioPage } from "./pages/InicioPage";
import { PerfilPage } from "./pages/PerfilPage";
import { ExperienciaPage } from "./pages/ExperienciaPage";
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
      </section><br />  
      <li class="badge badge-pill badge-primary font-weight-bold rounded-pill"
        aria-current="page" id="tituloSecciones"> 
        👩🏻‍💻 Experiencia Laboral
      </li>
      <br />
      <br />
      <section id="experiencia">
        <ExperienciaPage />
      </section><br /> 
      <li class="badge badge-pill badge-primary font-weight-bold rounded-pill"
        aria-current="page" id="tituloSeccionesConColor">
        👩🏻‍🏫📏 Educación
      </li>
      <br /><br />
      <section id="estudios">
        <EstudiosPage />
      </section><br />  
      <li class="badge badge-pill badge-primary font-weight-bold rounded-pill"
        aria-current="page" id="tituloSecciones"> 
        🎉 Portafolio
      </li>
      <br />
      <br />
      <section id="portafolio">
        <PortafolioPage />
      </section>
      <section id="contacto">
        <ContactoPage />
      </section>
    </>
  );
}

export default App;
