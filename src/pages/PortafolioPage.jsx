import React from 'react'
import { MyCard } from "../components/MyCard";
import { proyectos } from "../database/proyectos";

export const PortafolioPage = () => {
  return (
    <>
    <h1 className='font-bold text-2xl'>Portafolio</h1>
      {proyectos.map((proyecto) => (
        <MyCard
          key={proyecto.id}
          url={proyecto.url}
          titulo={proyecto.titulo}
          descripcion={proyecto.descripcion}
          url_preview={proyecto.url_preview}
          url_github={proyecto.url_github}
        />
      ))}
    </>
  )
}
