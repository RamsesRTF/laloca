const mongoose = require("mongoose");
const { Schema } = mongoose;
const Estudiante = new Schema({
  Nombre: String,
  Primer_Apellido: String,
  Especialidad: String,
  Grado: String,
  Carne_Identidad: String,
  Segundo_Apellido: String,
  Numero_Matricula: String,
  EstadoCivil: String,
  Sexo: String,
  Raza: String,
  Fecha_de_Nacimiento_Dia: Number,
  Fecha_de_Nacimiento_Mes: Number,
  Fecha_de_Nacimiento_Año: Number,
  Direccion_Particular_Calle: String,
  Direccion_Particular_Numero_Casa: String,
  Direccion_Particular_Apartamento: String,
  Direccion_Particular_Entre_Calles: String,
  Direccion_Particular_Consejo_Popular: String,
  Direccion_Particular_Reparto: String,
  Direccion_Particular_Municipio: String,
  Direccion_Particular_Provincia: String,
  Direccion_Particular_Telefono: String,
});
module.exports = mongoose.model("Estudiante", Estudiante);
