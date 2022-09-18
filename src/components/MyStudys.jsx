import {} from "../index.css";

export const MyStudys = ({ mr3, badgeWarning, badgePrimary, programa, institucion }) => {
  return (
    <div className="m-1 bg-white" id="inicio">
      <ol class="breadcrumb">
        <li class="badge badge-pill badge-dark" aria-current="page">EDUCACIÓN</li>
      </ol>
      <ul class="list-unstyled">
        <li class="media">
          <img  class="mr-3" src={mr3} alt="Imagen" width="100"/>
          <div class="media-body">
            <span class="badge badge-pill badge-warning">{badgeWarning}</span>
            <span class="badge badge-pill badge-primary">{badgePrimary}</span>
            <h5 class="mt-0 mb-1">
              <b>Programa:</b> {programa}
            </h5>
            <h5 class="mt-0 mb-1">
              <b>Institución:</b> {institucion}
            </h5>
          </div>
          <img  class="mr-3" src={mr3} alt="Imagen" width="100"/>
          <div class="media-body">
            <span class="badge badge-pill badge-warning">{badgeWarning}</span>
            <span class="badge badge-pill badge-primary">{badgePrimary}</span>
            <h5 class="mt-0 mb-1">
              <b>Programa:</b> {programa}
            </h5>
            <h5 class="mt-0 mb-1">
              <b>Institución:</b> {institucion}
            </h5>
          </div>
        </li><br />
      </ul>
    </div>
  );
};
