import {} from "../index.css";

export const MyContact = ({ whatsAppContacto, correoContacto }) => {
  return (      
    <div class="card-footer text-muted border-0" id="contacto">
      <br /><li class="badge badge-pill badge-primary font-weight-bold rounded-pill" aria-current="page" id="tituloSeccionesConColor"> 📲📩 Contactame, a través de: </li><br /> <br /> <br /> 
      <div className="d-flex justify-content-center">
        <a className="btn btn-primary btn-lg font-weight-bold" href={whatsAppContacto} type="button"
          id="btnTelefonoContacto">
          <i className="fa-brands fa-whatsapp"></i> Número de Teléfono
        </a>
        <a className="btn btn-primary btn-lg font-weight-bold" type="button"
          id="btnCorreoContacto">
          <i className="fa-sharp fa-solid fa-envelope"></i> {correoContacto}
        </a>
      </div> <br />
    </div>
  );
};
