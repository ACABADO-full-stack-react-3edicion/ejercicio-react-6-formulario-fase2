import PropTypes from "prop-types";
import { useFormulario } from "../hooks/useFormulario";
import { datosRegistroSchema } from "../schemas/datosSchemas";

export const Paso2 = (props) => {
  const { datosRegistro, setDatosRegistro, avanzaPaso, retrocedePaso } = props;
  const {
    datos: { username, password, repitePassword },
    formularioInvalido,
    setDato,
  } = useFormulario(datosRegistro);
  const enviaPaso = (e) => {
    e.preventDefault();
    setDatosRegistro({ username, password, repitePassword });
    avanzaPaso();
  };
  return (
    <>
      <h2>Paso 2: Datos de acceso</h2>
      <form noValidate onSubmit={enviaPaso}>
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            value={username}
            onChange={setDato}
            className="form-control"
            id="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={setDato}
            id="password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="repitePassword">Repetir contraseña:</label>
          <input
            type="password"
            value={repitePassword}
            onChange={setDato}
            id="repitePassword"
            className="form-control"
          />
        </div>
        <button type="button" className="btn btn-info" onClick={retrocedePaso}>
          Anterior
        </button>
        <button
          type="submit"
          className="btn btn-info"
          disabled={formularioInvalido}
        >
          Siguiente
        </button>
      </form>
    </>
  );
};

Paso2.propTypes = {
  avanzaPaso: PropTypes.func.isRequired,
  retrocedePaso: PropTypes.func.isRequired,
  setDatosRegistro: PropTypes.func.isRequired,
  datosRegistro: datosRegistroSchema,
};
