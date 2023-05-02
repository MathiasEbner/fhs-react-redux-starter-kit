// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBmv71is8vESi5mnfZpyv2ehVk3CpKWWWc',
  authDomain: 'fhs-2023-e958e.firebaseapp.com',
  databaseURL: 'https://fhs-2023-e958e-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'fhs-2023-e958e',
  storageBucket: 'fhs-2023-e958e.appspot.com',
  messagingSenderId: '639405776543',
  appId: '1:639405776543:web:1abb94d9e8aebb33778caa'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const database = getDatabase(app)
