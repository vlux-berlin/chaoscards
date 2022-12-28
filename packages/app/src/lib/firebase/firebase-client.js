import {getApp, initializeApp} from 'firebase/app.js';
import {getAuth} from 'firebase/auth.js';
import {getFirestore} from 'firebase/firestore.js';
import process from 'process';

const app = createFirebaseApp();
const db = getFirestore(app);
const auth = getAuth(app);

/// Helper functions

function createFirebaseApp() {
	try {
		return getApp();
	} catch {
		const app = initializeApp({
			apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
			authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
			databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
			projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
			storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
			messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
			appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
			measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
		});
		// SetPersistence(getAuth(app), 'local');
		return app;
	}
}

/** `
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
	const data = doc.data();
	return {
		...data,
		// Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
		createdAt: data?.createdAt.toMillis() || 0,
		updatedAt: data?.updatedAt.toMillis() || 0,
	};
}

export {app, db, auth};
