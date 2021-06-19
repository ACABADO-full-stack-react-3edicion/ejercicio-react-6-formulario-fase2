import { DateTime } from "luxon";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useFormulario } from "../hooks/useFormulario";
import { datosPersonalesSchema } from "../schemas/datosSchemas";

export const Paso1 = (props) => {
  const { datosPersonales, setDatosPersonales, avanzaPaso } = props;
  const {
    datos: { nombre, apellidos, fechaNacimiento, email },
    formularioInvalido,
    setDato,
  } = useFormulario(datosPersonales);
  const [edad, setEdad] = useState(null);
  const enviaPaso = (e) => {
    e.preventDefault();
    setDatosPersonales({ nombre, apellidos, fechaNacimiento, email });
    avanzaPaso();
  };
  const onChangeFechaNacimiento = (e) => {
    setDato(e);
  };
  useEffect(() => {
    if (fechaNacimiento === "") {
      return;
    }
    const fechaNacimientoDate = DateTime.fromFormat(
      fechaNacimiento,
      "yyyy-MM-dd"
    );
    setEdad(fechaNacimientoDate.diffNow("years"));
  }, [fechaNacimiento]);
  return (
    <>
      <h2>Paso 1: Datos personales</h2>
      <form noValidate onSubmit={enviaPaso}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={setDato}
            className="form-control"
            id="nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            value={apellidos}
            onChange={setDato}
            id="apellidos"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
          <input
            type="date"
            value={fechaNacimiento}
            onChange={onChangeFechaNacimiento}
            id="fechaNacimiento"
            className="form-control"
          />
          <span>Edad: {edad && Math.abs(Math.trunc(edad.years))}</span>
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={setDato}
            id="email"
            className="form-control"
          />
        </div>
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

Paso1.propTypes = {
  datosPersonales: datosPersonalesSchema,
  avanzaPaso: PropTypes.func.isRequired,
};
