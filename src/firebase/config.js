import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBa3kzSJr1BTgRYH_jZzvztnIUzLeRwZqo",
    authDomain: "mymoney-85c8a.firebaseapp.com",
    projectId: "mymoney-85c8a",
    storageBucket: "mymoney-85c8a.appspot.com",
    messagingSenderId: "685094511791",
    appId: "1:685094511791:web:deb6a56515acb1ba76e05a"
  };

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export {projectFirestore , projectAuth}