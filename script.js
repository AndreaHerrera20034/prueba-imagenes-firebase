// Importar Firebase
import { firebase } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { storage } from './firebase/storage';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js';
// import { initializeApp } from "https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/8.3.3/firebase-analytics.js";

// upload({ file: })
const upload = async ({ file }) => {
    // 1. Referencia al espacio en el bucket donde estará el archivo
    let storageRef = firebase.storage().ref().child(`images/${file.name}`);
    // 2. Subir el archivo
    await storageRef.put(file);
    // 3. Retornar la referencia
    return storageRef;
}

async function main() {
    const firebaseConfig = {
        apiKey: "AIzaSyCVCL2ET3jWUkSQAwS-3vVht3cbG92-Gfg",
        authDomain: "fir-file-3aae3.firebaseapp.com",
        projectId: "fir-file-3aae3",
        storageBucket: "fir-file-3aae3.appspot.com",
        messagingSenderId: "63349375835",
        appId: "1:63349375835:web:4c944e1220a295b40a507e",
        measurementId: "G-4T6DML1PGR"
      };
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);z

      const analytics = getAnalytics(app);

      firebase.initializeApp(firebaseConfig);
      
      // Usar el servicio de almacenamiento de Firebase
      const storage = firebase.storage();

      let form = document.querySelector("#uploader");

      form.addEventListener("submit", (ev)=>{
        ev.preventDefault();

        let fileInput = form.querySelector("#file");

        let file = fileInput.files[0];

        console.log(file);

        upload({
            file: file
        });
      });
}

main();

// Video en el que me basé
// https://www.youtube.com/watch?v=u7xAIgOQajM