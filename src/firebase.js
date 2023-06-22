import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAJDXRrowHXXMfr12IdFdFya5gg_C8EHuo",
  authDomain: "blog-app-bc7ea.firebaseapp.com",
  projectId: "blog-app-bc7ea",
  storageBucket: "blog-app-bc7ea.appspot.com",
  messagingSenderId: "999482577356",
  appId: "1:999482577356:web:ec9b077dfda7ec9d048d69"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth };
export default app;
