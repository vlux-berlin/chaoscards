import {auth, db} from '@lib/firebase/firebaseClient';
import {collection, doc, onSnapshot, setDoc} from 'firebase/firestore.js';
import {useEffect, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';

// Custom hook to read  auth record and user profile doc
export function useUserData() {
	const [user] = useAuthState(auth);
	const [email, setEmail] = useState(null);

	useEffect(() => {
		// Turn off realtime subscription
		let unsubscribe;

		if (user) {
			const ref = doc(collection(db, 'users'), user.uid);
			unsubscribe = onSnapshot(ref, (doc) => {
				console.log('doc', doc.data());
				setEmail(doc.data()?.email);
			});
		} else {
			setEmail(null);
		}

		return unsubscribe;
	}, [user]);

	return {user, email};
}
