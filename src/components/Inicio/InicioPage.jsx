import { MyStart } from "./MyStart";
import { inicio } from "./inicio";

export const InicioPage = () => {
  return (
    <>
      {inicio.map((inicio) => (
        <MyStart
          key={inicio.id}
          fotoUrl={inicio.fotoUrl}
          saludo={inicio.saludo}
          presentacion={inicio.presentacion}
          descripcion={inicio.descripcion}
          boton1={inicio.boton1}
          boton2={inicio.boton2}
        />
      ))}
    </>
  );
};
