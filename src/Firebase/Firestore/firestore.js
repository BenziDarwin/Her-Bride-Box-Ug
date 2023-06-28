import DB from "../DB/storage"
import {firestore} from "../firebaseConfig"
import {doc, collection, getDoc, updateDoc, deleteDoc, addDoc ,query, getDocs, where} from "firebase/firestore"

export default class Firestore {

    static addItem = async (category, name, price, description, image, id) => {
        let result = {}
        await addDoc(collection(firestore, "Products") , {
            itemId:id,
            name:name,
            price:price,
            description:description,
            category:category,
            image: image
        }).then(e => {
           result = {code:0, val:e} 
        }).catch( err => {
            result = {code:1, val:err} 
        })
        return result
    }

    removeItem = async(itemid) => {
        let result = {}
        await deleteDoc(doc(firestore, "Products", itemid))
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

    static getItem = async(itemId) => {
        let result = {code:null, val:null }
        const q = query(collection(firestore, "Products"), where("itemId","==",itemId));
        let res;
        let snapshots = await getDocs(q);
        snapshots.forEach(doc => {
            res = doc.data()
        })
        result = {code:0, val:res} 
        return result
    }

    static getItems = async (category) => {
        let result = {code:null, val:null }
        const q = query(collection(firestore, "Products"), where("category","==",category));
        let res = []
        let snapshots = await getDocs(q);
        snapshots.forEach(doc => {
            res.push(doc.data())
        })
        result = {code:0, val:res} 
        return result;

    }
}