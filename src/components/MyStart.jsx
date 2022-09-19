import {} from "../index.css";

export const MyStart = ({ fotoUrl, saludo, presentacion, descripcion, boton1, boton2 }) => {
  return (
      <div className="card border-0 d-flex justify-content-center" id="inicio">
        <img src={fotoUrl} className="rounded-circle img-fluid mx-auto" id="foto" />
        <div className="card-body">
          <p className="card-title mx-auto" id="presentacion">{saludo}</p>
          <p className="card-title mx-auto" id="saludo">{presentacion}</p>
          <p className="card-title mx-auto" id="descripcion">{descripcion}</p><br />
          <div className="d-flex justify-content-center">
            <a className="btn btn-primary btn-lg font-weight-bold" href={boton1} type="button"
              id="btnPerfil">
              <i class="fa-brands fa-instagram"></i> Perfil
            </a>
            <a className="btn btn-primary btn-lg font-weight-bold" href={boton2} type="button"
              id="btnGithub">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </div> <br />
        </div>
      </div>
  );
};
