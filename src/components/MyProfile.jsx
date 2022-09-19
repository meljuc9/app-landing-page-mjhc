import {} from "../index.css";

export const MyProfile = ({ tituloPerfil, perfilPerfil, descripcionPerfil, imagenPerfil }) => {
  return (        
    <div className="card border-0" id="perfil">
      <div className="card-group">
        <div className="col-md-8">
          <div className="card-body"><br /><br /> 
            <li className="badge badge-pill badge-primary font-weight-bold rounded-pill" aria-current="page" id="tituloSeccionesConColor">
              {tituloPerfil}
            </li><br /><br />
            <h4 className="card-text font-weight-bold" id="perfilPerfil">{perfilPerfil}</h4><br />
            <p className="card-text text-justify" id="descripcionPerfil">
              {descripcionPerfil}
            </p><br />
          </div>
        </div>
        <div className="col-md-4"><br />
          <img src={imagenPerfil} className="img-fluid mx-auto p-2" />
        </div><br />
      </div>
    </div>
  );
};
