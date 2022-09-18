import { } from "../../index.css";

export const MyExperience = ({ 
  cardImgTopExperiencia, 
  badgeInfoExperiencia, 
  badgePrimaryExperiencia, 
  cargoExperiencia, 
  empresaExperiencia, 
  actividad1Experiencia, 
  actividad2Experiencia, 
  actividad3Experiencia, 
  actividad4Experiencia 
}) => {
  return (
    <div className="card border-0" id="empresas"><br />
      <div className="d-flex justify-content-center">
        <div className="card-deck" id="cardEmpresas">
          <div className="card">            
            <div className="card-body">
              <span className="badge badge-pill badge-info rounded-pill float-end" id="viñetasEmpresaSector">{badgeInfoExperiencia}</span>
              <span className="badge badge-pill badge-warning rounded-pill float-end" id="viñetasEmpresaFecha">{badgePrimaryExperiencia}</span>
              <h3 className="card-title fw-bold text-start text-purple-900">
                {cargoExperiencia}
              </h3>
              <h5 className="card-title">
                <b>Empresa: </b>{empresaExperiencia}
              </h5>
              <span className="card-text">
                <h5 className="card-title"><b>Funciones:</b></h5>
                <li className="actividadExperiencia">{actividad1Experiencia}</li>
                <li className="actividadExperiencia">{actividad2Experiencia}</li>
                <li className="actividadExperiencia">{actividad3Experiencia}</li>
                <li className="actividadExperiencia">{actividad4Experiencia}</li>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
