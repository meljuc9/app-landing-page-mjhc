import { MyProfile } from "./MyProfile";
import { perfil } from "./perfil";

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
