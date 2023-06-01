import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LogIn from "../views/SignIn.vue";
import Register from "../views/SignUp.vue";
import Category1 from "../views/Category1.vue";
import Scraper from '@/views/Scraper.vue';
import Product from '@/views/Product.vue';
import loginScreem from '../components/global/loginScreen.vue';
import RegisterPage from '../components/global/register.vue';


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/logIn",
    name: "logIn",
    component: LogIn,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/category1",
    name: "category1",
    component: Category1,
  },
  {
    path: '/scraper',
    name: 'Scraper',
    component: Scraper
  },
  {
    path: '/product/:webId',
    name: 'product',
    component: Product
  },
  ,
  {
    path: '/login',
    name: 'loginScreem',
    component: loginScreem,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
