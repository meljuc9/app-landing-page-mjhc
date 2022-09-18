import { MyExperience } from "./MyExperience";
import { experiencia } from "./experiencia";

export const ExperienciaPage = () => {
  return (
    <>
      {experiencia.map((experiencia) => (
        <MyExperience
          key={experiencia.id}
          cardImgTopExperiencia={experiencia.cardImgTopExperiencia}
          badgeInfoExperiencia={experiencia.badgeInfoExperiencia}
          badgePrimaryExperiencia={experiencia.badgePrimaryExperiencia}
          cargoExperiencia={experiencia.cargoExperiencia}
          empresaExperiencia={experiencia.empresaExperiencia}
          actividad1Experiencia={experiencia.actividad1Experiencia}
          actividad2Experiencia={experiencia.actividad2Experiencia}
          actividad3Experiencia={experiencia.actividad3Experiencia}
          actividad4Experiencia={experiencia.actividad4Experiencia}
        />
      ))}
    </>
  );
};
