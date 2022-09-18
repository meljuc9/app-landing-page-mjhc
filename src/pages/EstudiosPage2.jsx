import yo from "../assets/yo2.jpeg";
import {} from "../index.css";
import { MyStudys } from "../components/MyStudys";
import { estudios } from "../database/estudios";

export const estudiosPage = () => {
  return (
    <>
      {estudios.map((estudios) => (
        <MyStudys
        
          key={estudios.id}
          mr3={estudios.mr3}
          badgeWarning={estudios.badgeWarning}
          badgePrimary={estudios.badgePrimary}
          programa={estudios.programa}
          institucion={estudios.institucion}
        />
      ))}
    </>
  );
};
