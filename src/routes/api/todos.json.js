import firestore from '../../lib/firebase.js';

export function get(){
    const data =  [{
        title: "Test",
        content: "Contenu de tst",
        completed: false,
        uuid: "4548686ege"
    }]
    return {
        body: data
    }
}