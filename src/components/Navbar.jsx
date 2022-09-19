import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import {} from "../index.css";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
    {/*NarBar*/}
      <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3 fixed w-full" id="navbar">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <img src={logo} className="logo" id="logo"/>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <Link smooth spy to="inicio">
                <span className=" ml-2 text-fuchsia-900 bg-white text-2 p-3 rounded-pill fw-bold" id="textNav">Inicio</span>
              </Link>
              <Link smooth spy to="perfil">
                <span className=" ml-2 text-fuchsia-900 bg-white text-2 p-3 rounded-pill fw-bold" id="textNav">Perfil</span>
              </Link>
              <Link smooth spy to="experiencia">
                <span className=" ml-2 text-fuchsia-900 bg-white text-2 p-3 rounded-pill fw-bold" id="textNav">Experiencia</span>
              </Link>
              <Link smooth spy to="estudios">
                <span className=" ml-2 text-fuchsia-900 bg-white text-2 p-3 rounded-pill fw-bold" id="textNav">Estudios</span>
              </Link>
              <Link smooth spy to="portafolio">
                <span className=" ml-2 text-fuchsia-900 bg-white text-2 p-3 rounded-pill fw-bold"  id="textNav">Portafolio</span>
              </Link>
              <Link smooth spy to="contacto">
                <span className=" ml-2 text-fuchsia-900 bg-white text-2 p-3 rounded-pill fw-bold"  id="textNav">Contacto</span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
