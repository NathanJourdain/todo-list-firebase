import {writable, readable} from 'svelte/store';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './firebase.js';

export const openModalSignInState = writable(false);

export const user = writable(null);

onAuthStateChanged(auth, currentUser => {
    user.set(currentUser);
})