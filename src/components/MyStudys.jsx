import {} from "../index.css";

export const MyStudys = ({ idEstudios, badgeWarningEstudios, badgePrimaryEstudios, programaEstudios, institucionEstudios }) => {
  return (
    <div className="card border-0" id="estudios">
      <br />
      <div className="card-group">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" className="text-center text-wrap" id="idEstudios">#</th>
                <th scope="col" className="text-center text-wrap" id="titleColumEstudios">Tipo Educación</th>
                <th scope="col" className="text-center text-wrap" id="titleColumEstudios">Fecha Culminación</th>
                <th scope="col" className="text-center text-wrap" id="titleColumEstudios">Programa</th>
                <th scope="col" className="text-center text-wrap" id="titleColumEstudios">Institución</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-center" id="idEstudios">{ idEstudios }</th>
                <td className="text-center" id="datosEstudios">{ badgeWarningEstudios }</td>
                <td className="text-center" id="datosEstudios">{ badgePrimaryEstudios }</td>
                <td className="text-center" id="datosEstudios">{ programaEstudios }</td>
                <td className="text-center" id="datosEstudios">{ institucionEstudios }</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
