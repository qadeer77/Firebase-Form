import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import {
    doc,
    setDoc,
    getDoc,
    getFirestore,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyAUJOB_8K4JD8eDbPee2SfVpjx8QXePJcI",
    authDomain: "abdul-qadeer123.firebaseapp.com",
    projectId: "abdul-qadeer123",
    storageBucket: "abdul-qadeer123.appspot.com",
    messagingSenderId: "881691861164",
    appId: "1:881691861164:web:2b67bcedafd7f1b860ff09"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();


let name = document.querySelector("#name");
let fatherName = document.querySelector("#fatherName");
let dateOfBirth = document.querySelector("#dateOfBirth");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let loginEmail = document.querySelector("#loginEmail");
let loginPassword = document.querySelector("#loginPassword");
let login = document.getElementById("login");
let signUp = document.getElementById("signUp");

signUp.addEventListener("click", (event) => {
    event.preventDefault()

    const nameRegix = /^\s*$/.test(name.value);
    const nameRegix2 = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(name.value);
    const fatherNameRegix = /^\s*$/.test(fatherName.value);
    const fatherNameRegix2 = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(fatherName.value);
    const dateRegix = /^\s*$/.test(dateOfBirth.value);
    const emailRegix = /^\s*$/.test(email.value);
    const emailRegix2 = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(email.value);
    const passwordRegix = /^\s*$/.test(password.value);
    const passwordRegix2 = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/.test(password.value);



    if (!nameRegix && nameRegix2 && !fatherNameRegix && fatherNameRegix2 && !dateRegix && !emailRegix && emailRegix2 && !passwordRegix && passwordRegix2) {
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then(async (userCredential) => {
                const user = userCredential.user;
                await setDoc(doc(db, "user", user.uid), {
                    FullName: name.value,
                    FatherName: fatherName.value,
                    DateOfBirth: dateOfBirth.value,
                    EmailAddress: email.value,
                    Password: password.value,
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                swal("warning!", "You have already registred!", "error");
            });
    }



    if (nameRegix) {
        swal("Your Name is Empty");
    }
    else if (!nameRegix2) {
        swal("warning!", "Your name must be contain 4 or more asciii character!", "error");
    }
    else if (fatherNameRegix) {
        swal("Your Father Name is Empty");
    }
    else if (!fatherNameRegix2) {
        swal("warning!", "Your Father name must be contain 4 or more asciii character!", "error");
    }
    else if (dateRegix) {
        swal("Your date is Empty");
    }
    else if (emailRegix) {
        swal("Your Email Address is Empty");
    }
    else if (!emailRegix2) {
        swal("warning!", "Your Email Address is invalid!", "error");
    }
    else if (passwordRegix) {
        swal("Your password is Empty");
    }
    else if (!passwordRegix2) {
        swal("warning!", "Your password must be contain 8 character the Numbers and Strings!", "error");
    }
})


// login.addEventListener("click", (event) => {
//     event.preventDefault()


//     const loginEmailRegix = /^\s*$/.test(loginEmail.value);
//     const loginEmailRegix2 = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(loginEmail.value);
//     const loginPasswordRegix = /^\s*$/.test(loginPassword.value);
//     const loginPasswordRegix2 = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/.test(loginPassword.value);


//     if (!loginEmailRegix && loginEmailRegix2 && !loginPasswordRegix && loginPasswordRegix2) {

//     signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
//         .then(async(userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             const docRef = doc(db, "user", user.uid);
//             const docSnap = await getDoc(docRef);

//             if (docSnap.exists()) {
//                 console.log("Document data:", docSnap.data());
//             } else {
//                 // doc.data() will be undefined in this case
//                 console.log("No such document!");
//             }

//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             swal("warning!", "Ist you are go and create Account!", "error");
//         });
//     }


//     // let loginFlag;
//     if (loginEmailRegix) {
//         swal("Your Email Address is Empty");
//         // loginFlag = false;
//     }
//     else if (!loginEmailRegix2) {
//         swal("warning!", "Your Email Address is invalid!", "error");
//         // loginFlag = false;
//     }
//     else if (loginPasswordRegix) {
//         swal("Your password is Empty");
//         // loginFlag = false;
//     }
//     else if (!loginPasswordRegix2) {
//         swal("warning!", "Your password must be contain 8 character the Numbers and Strings!", "error");
//         // loginFlag = false;
//     }
//     // else {
//     //     loginFlag = true;
//     // }
//     // if (loginFlag) {
//         // loginEmail.value = "";
//         // loginPassword.value = "";
//     // }

// })

