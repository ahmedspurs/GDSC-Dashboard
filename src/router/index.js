import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CetrtificatePage from "../views/CetrtificatePage.vue";
import AddCetrtificate from "../views/AddCetrtificate.vue";
import EditCetrtificate from "../views/EditCetrtificate.vue";
import UsersPage from "../views/UsersPage.vue";
import AddUser from "../views/AddUser.vue";
import EditUser from "../views/EditUser.vue";
import CahngePassword from "../views/CahngePassword.vue";
import Course from "../views/Course.vue";
import AddCourse from "../views/AddCourse.vue";
import EditCourse from "../views/EditCourse.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },

  {
    path: "/CetrtificatePage",
    name: "CetrtificatePage",
    component: CetrtificatePage,
  },
  {
    path: "/AddCetrtificate",
    name: "AddCetrtificate",
    component: AddCetrtificate,
  },
  {
    path: "/EditCetrtificate/:id",
    name: "EditCetrtificate",
    component: EditCetrtificate,
  },
  {
    path: "/UsersPage",
    name: "UsersPage",
    component: UsersPage,
  },
  {
    path: "/AddUser",
    name: "AddUser",
    component: AddUser,
  },
  {
    path: "/EditUser/:id",
    name: "EditUser",
    component: EditUser,
  },
  {
    path: "/CahngePassword/:id",
    name: "CahngePassword",
    component: CahngePassword,
  },
  {
    path: "/Course",
    name: "Course",
    component: Course,
  },
  {
    path: "/AddCourse",
    name: "AddCourse",
    component: AddCourse,
  },
  {
    path: "/EditCourse/:id",
    name: "EditCourse",
    component: EditCourse,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
