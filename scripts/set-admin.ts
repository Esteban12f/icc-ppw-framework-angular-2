import * as admin from 'firebase-admin';

import serviceAccount from '../serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert(
    serviceAccount as admin.ServiceAccount
  ),
});

// UID DEL USUARIO
const uid = 'nFGKZTYtOURYzsuknj8R3Ph2WoJ3';

async function setAdminRole() {

  await admin
    .auth()
    .setCustomUserClaims(uid, {
      role: 'admin',
    });

  console.log('Rol admin asignado');
}

setAdminRole();