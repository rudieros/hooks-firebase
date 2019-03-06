import { firebaseApp } from './firebaseApp'

export const uploadFileToFirebase = async (file: File | Blob, path: string) => new Promise<string>((resolve, reject) => {
    const uploadTask = firebaseApp.storage().ref(path).put(file)
    uploadTask.on(
        firebaseApp.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {},
        reject,
        () => uploadTask.snapshot.ref.getDownloadURL().then(resolve)
    )
})