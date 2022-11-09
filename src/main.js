import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBt22D7Dsm1rQRrYuB3DDKLSQ5D7s2Ikhs",
  authDomain: "libhub-8e287.firebaseapp.com",
  projectId: "libhub-8e287",
  storageBucket: "libhub-8e287.appspot.com",
  messagingSenderId: "120933129964",
  appId: "1:120933129964:web:817f68051c99fd3f618fc9",
  measurementId: "G-0NZS27FLKS"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
