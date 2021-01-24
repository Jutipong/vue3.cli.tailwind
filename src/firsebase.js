import firebase from 'firebase';
import { ref, onUnmounted } from 'vue';

const config = {
  apiKey: 'AIzaSyBVRhv0z0dEOTq6mwyFGyLm-a5vppK_rY4',
  authDomain: 'freetime-83215.firebaseapp.com',
  projectId: 'freetime-83215',
  storageBucket: 'freetime-83215.appspot.com',
  messagingSenderId: '324183236752',
  appId: '1:324183236752:web:78f64857794ff3aff33815',
};

debugger
const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const usersCollection = db.collection('users');

export const createUser = (user) => {
  return usersCollection.add(user);
};

export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user);
};

export const deleteUser = (id) => {
  return usersCollection.doc(id).delete();
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};
