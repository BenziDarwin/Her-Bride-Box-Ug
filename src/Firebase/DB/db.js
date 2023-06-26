import {db} from "../firebaseConfig";
import {ref, set, get, child } from "firebase/database";

export default class DB {
    setItemImage = async (itemId, image) => {
        result = {code:"", val:""}
        await set(ref(db, 'items/' + itemId), {
            image : image
        }).then(e => {
            result = {code:0, val:e}
        }).catch(err => {
            result = {code:0, val:err}
        });
        return result
    } 

    deleteItemImage = async (itemId) => {
        result = {}
        await set(ref(db, 'items/' + itemId), {
            image : ""
          })
          .then(e => {
            result = {code:0, val:e}
        }).catch(err => {
            result = {code:0, val:err}
        });
        return result
        
    }

    getItemImage = async (itemId) => {
    await get(child(ref(db), `items/${itemId}`)).then((snapshot) => {
    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        return "No data available";
    }
    }).catch((error) => {
        console.error(error);
    });
    }
}
