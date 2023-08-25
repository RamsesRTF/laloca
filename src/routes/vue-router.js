import Vuerouter from 'vue-router'
import Tasks from "../app/vue/components/Taskapp.vue";
import Estudiantes from "../app/vue/components/Matricula.vue"
import Administrar from "../app/vue/components/datatable.vue"
import MenuPrincipal from "../app/vue/components/ALGO.vue"
const menuroutes = [
  {
   path: '/estudiante',
   name: 'Estudiante',
   component: Estudiantes
  },
  {
    path: '/database',
    name: 'Administrar',
    component: Administrar
  },
  {
    path: '/',
    name: 'Menu Principal',
    component: MenuPrincipal
   },
]
export const Menurouter = new Vuerouter({
  routes: menuroutes
})


