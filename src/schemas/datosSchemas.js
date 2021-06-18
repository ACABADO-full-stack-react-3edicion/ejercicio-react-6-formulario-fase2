import PropTypes from "prop-types";

export const datosPersonalesSchema = PropTypes.shape({
  nombre: PropTypes.string.isRequired,
  apellidos: PropTypes.string.isRequired,
  fechaNacimiento: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}).isRequired;

export const datosRegistroSchema = PropTypes.shape({
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  repitePassword: PropTypes.string.isRequired,
}).isRequired;

export const datosAccesoSchema = PropTypes.shape({
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  recordarPassword: PropTypes.bool.isRequired,
}).isRequired;
