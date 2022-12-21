import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBD3NfT6KZhFPQlT8oo9PNzzeDTPnx7smo',
  authDomain: 'software-edu-d774c.firebaseapp.com',
  projectId: 'software-edu-d774c',
  storageBucket: 'software-edu-d774c.appspot.com',
  messagingSenderId: '356227382349',
  appId: '1:356227382349:web:2f9b2ab49fde32d3acb004',
  measurementId: 'G-ZH94T6MMNL',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(app);
