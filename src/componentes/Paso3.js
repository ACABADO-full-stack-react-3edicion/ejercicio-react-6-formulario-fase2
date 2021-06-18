import PropTypes from "prop-types";
import { useState } from "react";
import { useFormulario } from "../hooks/useFormulario";
import {
  datosAccesoSchema,
  datosRegistroSchema,
} from "../schemas/datosSchemas";

export const Paso3 = (props) => {
  const {
    datosRegistro,
    datosAcceso,
    setDatosAcceso,
    avanzaPaso,
    retrocedePaso,
  } = props;
  const {
    datos: { username, password, recordarPassword },
    setDato,
    formularioInvalido,
  } = useFormulario(datosAcceso);
  const [error, setError] = useState(false);
  const compruebaLogin = (e) => {
    e.preventDefault();
    if (
      username === datosRegistro.username &&
      password === datosRegistro.password
    ) {
      setDatosAcceso({ username, password, recordarPassword });
      avanzaPaso();
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <>
      <h2>Paso 3: Login</h2>
      <form noValidate onSubmit={compruebaLogin}>
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
        <div className="form-check">
          <input
            type="checkbox"
            id="recordarPassword"
            className="form-check-input"
            checked={recordarPassword}
            onChange={setDato}
          />
          <label htmlFor="recordarPassword" className="form-check-label">
            Recordar contraseña
          </label>
        </div>
        <button type="button" className="btn btn-info" onClick={retrocedePaso}>
          Anterior
        </button>
        <button
          className="btn btn-info"
          type="submit"
          disabled={formularioInvalido}
        >
          Acceder
        </button>
        {error && <p className="error">Credenciales erróneas</p>}
      </form>
    </>
  );
};

Paso3.propTypes = {
  avanzaPaso: PropTypes.func.isRequired,
  retrocedePaso: PropTypes.func.isRequired,
  setDatosAcceso: PropTypes.func.isRequired,
  datosRegistro: datosRegistroSchema,
  datosAcceso: datosAccesoSchema,
};
