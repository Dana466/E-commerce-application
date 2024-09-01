import * as admin from "firebase-admin";
import * as serviceAccount from "../serviceacckey.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export const auth=admin.auth();



