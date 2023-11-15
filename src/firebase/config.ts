import firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCWpoYcnSCAu0MPSs6xspjO2767AFd_uVA',
  authDomain: 'clone-bed05.firebaseapp.com',
  projectId: 'clone-bed05',
  storageBucket: 'clone-bed05.appspot.com',
  messagingSenderId: '599461633735',
  appId: '1:599461633735:web:cdcd9a8e0d1183ba11e8e2',
}

const firebaseApp = !firebase.apps.length
  ? initializeApp(firebaseConfig)
  : firebase.app()

const db = getFirestore(firebaseApp)

export default db
