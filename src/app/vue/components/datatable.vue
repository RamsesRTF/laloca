<template>
  <v-tabs vertical>
    <v-tab>
      <v-icon left> mdi-smart-card </v-icon>
      Alumnos
    </v-tab>
    <v-tab>
      <v-icon left> mdi-smart-card </v-icon>
      Padres
    </v-tab>
    <v-tab>
      <v-icon left> mdi-smart-card </v-icon>
      Madres
    </v-tab>
     <v-tab>
      <v-icon left> mdi-smart-card </v-icon>
      Tutores
    </v-tab>
    <v-tab-item>
      <v-card flat>
        <v-data-table
          :headers="aheaders"
          :items="estudiantes"
          :single-expand="asingleExpand"
          :expanded.sync="aexpanded"
          item-key="name"
          show-expand
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Tabla de Alumnos</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-switch
                v-model="asingleExpand"
                label="Single expand"
                class="mt-2"
              ></v-switch>
            </v-toolbar>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <v-btn color="red" @click="delet(item._id)"
                >Delete</v-btn
              >
              <v-btn color="blue">Edit</v-btn>
            </td>
          </template>
        </v-data-table>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-data-table
          :headers="pheaders"
          :items="estudiantes"
          :single-expand="psingleExpand"
          :expanded.sync="pexpanded"
          item-key="name"
          show-expand
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Tabla de Padres</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-switch
                v-model="psingleExpand"
                label="Single expand"
                class="mt-2"
              ></v-switch>
            </v-toolbar>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <v-btn color="red" @click="delet(item._id)"
                >Delete</v-btn
              >
              <v-btn color="blue">Edit</v-btn>
            </td>
          </template>
        </v-data-table>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-data-table
          :headers="mheaders"
          :items="estudiantes"
          :single-expand="msingleExpand"
          :expanded.sync="mexpanded"
          item-key="name"
          show-expand
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Tabla de Madres</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-switch
                v-model="msingleExpand"
                label="Single expand"
                class="mt-2"
              ></v-switch>
            </v-toolbar>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <v-btn color="red" @click="delet(item._id)"
                >Delete</v-btn
              >
              <v-btn color="blue">Edit</v-btn>
            </td>
          </template>
        </v-data-table>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-data-table
          :headers="theaders"
          :items="estudiantes"
          :single-expand="tsingleExpand"
          :expanded.sync="texpanded"
          item-key="name"
          show-expand
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Tabla de Tutores</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-switch
                v-model="tsingleExpand"
                label="Single expand"
                class="mt-2"
              ></v-switch>
            </v-toolbar>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <v-btn color="red" @click="delet(item._id)"
                >Delete</v-btn
              >
              <v-btn color="blue">Edit</v-btn>
            </td>
          </template>
        </v-data-table>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script>
export default {
  data() {
    return {
      expanded: [],
      singleExpand: false,
      pexpanded: [],
      psingleExpand: false,
      spexpanded: [],
      spsingleExpand: false,
      uexpanded: [],
      usingleExpand: false,
      aheaders: [
        {
          text: "Nombre",
          align: "start",
          sortable: true,
          value: "Nombre",
        },
        { text: "Primer Apellido", value: "Primer_Apellido" },
        { text: "Segundo Apellido", value: "Segundo_Apellido" },
        { text: "Sexo", value: "Sexo" },
        { text: "Raza", value: "Raza" },
        { text: "Especialidad", value: "Especialidad" },
        { text: "Grado", value: "Grado" },
         { text: "Numero de Matricula", value: "Numero_Matricula" },
         { text: "Carne de Identidad", value: "Carne_Identidad" },
         { text: "Fecha de Nacimiento (Dia)", value: "Fecha_de_Nacimiento.Dia" },
         { text: "Fecha de Nacimiento (Mes)", value: "Fecha_de_Nacimiento.Mes" },
         { text: "Fecha de Nacimiento (Año)", value: "Fecha_de_Nacimiento.Año" },
         { text: "Direccion", value: "Direccion_Particular.Calle" },
          { text: "Numero de Casa", value: "Direccion_Particular.Numero_Casa" },
           { text: "Apartamento", value: "alumno.Direccion_Particular.Apartamento" },
            { text: "Entre Calles", value: "alumno.Direccion_Particular.Entre_Calles" },
             { text: "Consejo popular", value: "alumno.Direccion_Particular.Consejo_Popular" },
              { text: "Reparto", value: "alumno.Direccion_Particular.Reparto" },
               { text: "Municipio", value: "alumno.Direccion_Particular.Municipio" },
                { text: "Provincia", value: "alumno.Direccion_Particular.Provincia" },
                 { text: "Telefono de la Casa", value: "alumno.Direccion_Particular.Telefono" },
        { text: "", value: "data-table-expand" },
      ],
     pheaders: [
        {
          text: "Nombre",
          align: "start",
          sortable: true,
          value: "Padre.Nombre",
        },
        { text: "Direccion de Domicilio", value: "Padre.Direccion_Domicilio" },
        { text: "Telefono de la Casa", value: "Padre.Telefono_Casa" },
        { text: "Centro de Trabajo", value: "Padre.Trabajo.Centro" },
        { text: "Direcion de Trabajo", value: "Padre.Trabajo.Direccion" },
        { text: "Ocupacion", value: "Padre.Trabajo.Ocupacion" },
        { text: "Telefono del Trabajo", value: "Padre.Trabajo.Telefono" },
        { text: "", value: "data-table-expand" },
      ],
     mheaders: [
        {
          text: "Nombre",
          align: "start",
          sortable: true,
          value: "Madre.Nombre",
        },
        { text: "Direccion de Domicilio", value: "Madre.Direccion_Domicilio" },
        { text: "Telefono de la Casa", value: "Madre.Telefono_Casa" },
        { text: "Centro de Trabajo", value: "Madre.Trabajo.Centro" },
        { text: "Direcion de Trabajo", value: "Madre.Trabajo.Direccion" },
        { text: "Ocupacion", value: "Madre.Trabajo.Ocupacion" },
        { text: "Telefono del Trabajo", value: "Madre.Trabajo.Telefono" },
        { text: "", value: "data-table-expand" },
      ],
      theaders: [
        {
          text: "Nombre",
          align: "start",
          sortable: true,
          value: "Tutor.Nombre",
        },
        { text: "Direccion de Domicilio", value: "Tutor.Direccion_Domicilio" },
        { text: "Telefono de la Casa", value: "Tutor.Telefono_Casa" },
        { text: "Centro de Trabajo", value: "Tutor.Trabajo.Centro" },
        { text: "Direcion de Trabajo", value: "Tutor.Trabajo.Direccion" },
        { text: "Ocupacion", value: "Tutor.Trabajo.Ocupacion" },
        { text: "Telefono del Trabajo", value: "Tutor.Trabajo.Telefono" },
        { text: "", value: "data-table-expand" },
      ],
      estudiantes: [],
    };
  },
  created() {
    this.loaddatabase();
  },
  methods: {
    loaddatabase() {
      fetch("/api/estudiante")
        .then((res) => res.json())
        .then((data) => {
          this.estudiantes = data;
        });
    },
    delet(taskId) {     
          fetch("/api/estudiante/" + taskId, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              this.loaddatabase();
            });
          
    },
    edits(objectId,section) {
      fetch("/api/tasks/" + taskId)
        .then((res) => res.json())
        .then((data) => {
          const { _id, title, description } = data; //Ah, estos son atributos de una tabla
          this.task = new Task(title, description);
          this.taskToEdit = _id;
          this.edit = true;
        });
    },
  },
}; //goku eta vaina e' seria
//como te puedas dar cuenta, aca es donde la vaina se pone seria, esto es una tabla de datos en vue, de manera dinamica
</script>
