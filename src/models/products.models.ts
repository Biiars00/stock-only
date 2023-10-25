import admin from 'firebase-admin';

const database = admin.initializeApp({
  credential: admin.credential.cert('src/database/produtosFirestore.json'),
});

export default database;
