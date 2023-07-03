
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";



  const firebaseConfig = {
    apiKey: "AIzaSyAjsO96GQC0xB_Y3GEJXck0V1ajVKqjemo",
    authDomain: "login-and-registration-b2fd0.firebaseapp.com",
    projectId: "login-and-registration-b2fd0",
    storageBucket: "login-and-registration-b2fd0.appspot.com",
    messagingSenderId: "664563150446",
    appId: "1:664563150446:web:a8a0aac47724194212407f",
    measurementId: "G-HWWVHZ9Y9G"
  };

  const app = initializeApp(firebaseConfig);


  const auth = getAuth();


  let reg = document.getElementById('reg').addEventListener("click",function(){


  // let usr = document.getElementById('usr').value
  let emal = document.getElementById('emal').value
  let paswrd = document.getElementById('paswrd').value




  createUserWithEmailAndPassword(auth,emal,paswrd)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log('user registered sucessfully')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;


    console.log(errorMessage)
    // ..
  });



  }) 





  let logn =  document.getElementById('logn')


  logn.addEventListener("click",function(){


  let  email = document.getElementById('email').value
  let  passwrd = document.getElementById('passwrd').value


  signInWithEmailAndPassword(auth, email, passwrd)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('user loged in sucessfully')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });




  })





let container = document.querySelector('.container')
let regBtn = document.querySelector('.regBtn')
let loginBtn = document.querySelector('.loginBtn')
let emal = document.getElementById('emal').value
let  paswrd = document.getElementById('paswrd').value






loginBtn.addEventListener("click",function(){

  container.classList.add("active")
   
})

regBtn.addEventListener("click",function(){

  container.classList.remove("active")
   

  
})




























