import yo from "../assets/yo2.jpeg";
import {} from "../index.css";
import { MyStudys } from "../components/MyStudys";
import { estudios } from "../database/estudios";

export const EstudiosPage = () => {
  return (
    <>
      {estudios.map((estudios) => (
        <MyStudys
          key={estudios.id}
          idEstudios            ={ estudios.idEstudios}
          badgeWarningEstudios  ={ estudios.badgeWarningEstudios }
          badgePrimaryEstudios  ={ estudios.badgePrimaryEstudios }
          programaEstudios      ={ estudios.programaEstudios }
          institucionEstudios   ={ estudios.institucionEstudios }
        />
      ))}
    </>
  );
};
