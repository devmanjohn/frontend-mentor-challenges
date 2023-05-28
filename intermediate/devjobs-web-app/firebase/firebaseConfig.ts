import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAcEjZOWuqRVHReYGforqjSZJ-77YGcIb0',
  authDomain: 'devjobs-web-app-a459e.firebaseapp.com',
  projectId: 'devjobs-web-app-a459e',
  storageBucket: 'devjobs-web-app-a459e.appspot.com',
  messagingSenderId: '572289279043',
  appId: '1:572289279043:web:02785724e07f2759cca0f6',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
