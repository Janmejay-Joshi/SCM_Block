import { db } from ".";
import { doc, getDoc } from "firebase/firestore";


export const getProductDetails = async (product:string) => {
    const data = await getDoc(doc(db, "products",product))
    return data.data()
}