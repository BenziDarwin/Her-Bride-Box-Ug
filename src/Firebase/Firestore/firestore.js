import DB from "../DB/db"
import {firestore} from "../firebaseConfig"
import {doc, collection, getDoc, updateDoc, deleteDoc, addDoc, query, getDocs} from "firebase/firestore"

export default class Firestore {

    addItem = async (category, name, price, description, image) => {
        let result = {}
        await addDoc(collection(firestore, category) , {
            name:name,
            price:price,
            description:description,
            image: image
        }).then(e => {
           result = {code:0, val:e} 
        }).catch( err => {
            result = {code:1, val:err} 
        })
        return result
    }

    removeItem = async(category, itemid) => {
        let result = {}
        await deleteDoc(doc(firestore, category, itemid))
        .then(e => {
            result = {code:0, val:e} 
         }).catch( err => {
            result = {code:1, val:err} 
         })
        return result
    }

    updateItem = async (category, itemId, name = "", price = "", description ="", image="") => {
        const ref = doc(firestore, category, itemId);
        if(name != "") {
            await updateDoc(ref, {
                name: name
              });
        }
        if(price != "") {
            await updateDoc(ref, {
                price: price
              });
        }
        if(description != "") {
            await updateDoc(ref, {
                description: description
              });
        }
        if(image != "") {
            let db = new DB()
            image = await db.setItemImage(itemId, image);
            console.log(image)
            await updateDoc(ref, {
                image: image.val
              });
        }

    }

    getItem = async(category, itemId) => {
        const ref = doc(firestore, category, itemId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            console.log("No such document!");
        }
    }

    getItems = async (category) => {
        let result = {}
        const q = query(collection(firestore, category));
        const querySnapshot = await getDocs(q)
        .then(e => {
            result = {code:0, val:e} 
         }).catch( err => {
            result = {code:1, val:err} 
         })
        return result;

    }
}