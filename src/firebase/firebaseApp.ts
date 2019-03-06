import * as firebase from 'firebase'
import 'firebase/firestore'
import { firebaseConfig as fbConfig } from '../firebaseConfig'

// const firebaseConfig = {
//     apiKey: config.apiKey,
//     projectId: config.projectId,
//     authDomain: config.authDomain,
//     databaseURL: config.databaseURL,
//     storageBucket: config.storageBucket,
// }

firebase.initializeApp(fbConfig)

export const firebaseApp = firebase

export type FbTimestamp = firebase.firestore.Timestamp

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL) // todo remove this for proper sign in
    .then(() => {
        console.log('Persistence set')
        firebaseApp.auth().signInAnonymously().then(() => {
            console.log('Anonymously signed in!')
        }).catch((error) => {
            console.log('Error signing in anonymously!', error)
        })
    })
