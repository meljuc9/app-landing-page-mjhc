import { } from "../index.css";

export const MyPortafolio = ({ imagenPortafolio, tituloPortafolio, descripcionPortafolio, metodologiaPortafolio, vistaPreviaPortafolio, codigoPortafolio}) => {
  return (
    <div className="card border-0" id="empresas"><br />
      <div className="d-flex justify-content-center">
        <div className="card-deck" id="cardEmpresas">
          <div className="card">            
            <div className="card-body"><br />
              <div class="text-center">
                <img src={imagenPortafolio} class="img-fluid" id="imagenPortafolio"/>
              </div><br />
              <p className="card-title mx-auto fw-bold" id="tituloPortafolio">{tituloPortafolio}</p>
              <p className="card-title mx-auto" id="descripcionPortafolio">{descripcionPortafolio}</p><br />
              <h6>
                <b>Utilizando las tecnologías de: </b>
                <span  className="badge badge-pill badge-info rounded-pill " id="metodologiaPortafolio">{metodologiaPortafolio}</span>
              </h6><br/>
              <div class="text-center">
                <a className="btn btn-primary btn-lg font-weight-bold" href={vistaPreviaPortafolio} type="button"
                  id="btnPerfil">
                  <i class="fa-solid fa-eye"></i> Ver
                </a>
                <a className="btn btn-primary btn-lg font-weight-bold" href={codigoPortafolio} type="button"
                  id="btnGithub">
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
