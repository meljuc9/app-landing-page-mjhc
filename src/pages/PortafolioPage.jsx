import { MyPortafolio } from "../components/MyPortafolio";
import { portafolio } from "../database/portafolio";

export const PortafolioPage = () => {
  return (
    <>
      {portafolio.map((proyecto) => (
        <MyPortafolio
          key={proyecto.id}
          imagenPortafolio={proyecto.imagenPortafolio}
          tituloPortafolio={proyecto.tituloPortafolio}
          descripcionPortafolio={proyecto.descripcionPortafolio}
          metodologiaPortafolio={proyecto.metodologiaPortafolio}
          vistaPreviaPortafolio={proyecto.vistaPreviaPortafolio}
          codigoPortafolio={proyecto.codigoPortafolio}
        />
      ))}
    </>
  )
}
