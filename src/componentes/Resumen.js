import PropTypes from "prop-types";
import {
  datosAccesoSchema,
  datosPersonalesSchema,
  datosRegistroSchema,
} from "../schemas/datosSchemas";

export const Resumen = (props) => {
  const { retrocedePaso, datosPersonales, datosRegistro, datosAcceso } = props;
  return (
    <>
      <h2>Resumen</h2>
      <pre>
        {JSON.stringify(datosPersonales, null, 2)}
        {JSON.stringify(datosRegistro, null, 2)}
        {JSON.stringify(datosAcceso, null, 2)}
      </pre>
      <button className="btn btn-info" onClick={retrocedePaso}>
        Anterior
      </button>
    </>
  );
};

Resumen.propTypes = {
  retrocedePaso: PropTypes.func.isRequired,
  datosPersonales: datosPersonalesSchema,
  datosRegistro: datosRegistroSchema,
  datosAcceso: datosAccesoSchema,
};
