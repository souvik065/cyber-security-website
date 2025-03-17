
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { ContactFormData } from '../types/ContactForm';

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second


export const storeContactForm = async (formData: ContactFormData) => {
    try {
        if (!db) throw new Error('Firestore is not initialized');
        
        const docRef = await addDoc(collection(db, 'contacts'), {
            ...formData,
            timestamp: new Date().toISOString(),
        });
        console.log('Document written with ID: ', docRef.id);
        return docRef;
    } catch (error) {
        console.error('Error storing contact form:', error);
        throw error;
    }
};