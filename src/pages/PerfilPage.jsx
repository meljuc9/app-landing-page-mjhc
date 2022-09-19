import { MyProfile } from "../components/MyProfile";
import { perfil } from "../database/perfil";

export const PerfilPage = () => {
  return (
    <>
      {perfil.map((perfil) => (
        <MyProfile
          key={perfil.id}
          tituloPerfil      = { perfil.tituloPerfil }
          perfilPerfil      = { perfil.perfilPerfil }
          descripcionPerfil = { perfil.descripcionPerfil }
          imagenPerfil      = { perfil.imagenPerfil }
        />
      ))}
    </>
  );
};
