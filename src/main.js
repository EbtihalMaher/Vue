import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import axios from "axios";
function isUserAuthenticated() {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('token');
      const head = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
  
      axios.get('http://localhost:5000/api/', head)
        .then(response => {
          if (response.data.message) {
            console.log(response.data.message);
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(error => {
          console.error(error);
          reject(error);
        });
    });
  }

  router.beforeEach(async (to, from, next) => {
    // Check if the route requires authorization
    if (to.matched.some(route => route.meta.requiresAuth)) {
      try {
        // Call isUserAuthenticated() and wait for the promise to resolve
        const authenticated = await isUserAuthenticated();
  
        if (authenticated) {
          // User is authenticated, proceed to the route
          next();
        } else {
          // User is not authenticated, redirect to the login page or any other page you prefer
          next("/login");
        }
      } catch (error) {
        console.error(error);
        // Handle the error, for example, redirect to an error page
        next("/login");
      }
    } else {
      // Route does not require authorization, proceed to the route
      next();
    }
  });

createApp(App).use(store).use(router).mount("#app");
