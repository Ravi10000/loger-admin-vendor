import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_APP_KEY,
  appId: process.env.REACT_APP_FB_APP_ID,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  databaseURL: process.env.REACT_APP_FB_REALTIME_DB_URL
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export default app;
