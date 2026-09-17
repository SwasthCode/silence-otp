// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAuth } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCMDPdnmVjs5ufEjdm-nq4U4C8AjnnPOLQ",
//   authDomain: "otp-projects-5f433.firebaseapp.com",
//   projectId: "otp-projects-5f433",
//   storageBucket: "otp-projects-5f433.appspot.com",
//   messagingSenderId: "787707673267",
//   appId: "1:787707673267:web:1dc78246c47334b83b4ec6",
//   measurementId: "G-RSJKJ98XRY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// export const auth =  getAuth(app)



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGXijvBjxAXnB772VhANIrD3zJ00NhZRM",
  authDomain: "bhutanmart-app.firebaseapp.com",
  projectId: "bhutanmart-app",
  storageBucket: "bhutanmart-app.firebasestorage.app",
  messagingSenderId: "746841863418",
  appId: "1:746841863418:web:174e79219db0fb7b60c543",
  measurementId: "G-5T2KL63FBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
