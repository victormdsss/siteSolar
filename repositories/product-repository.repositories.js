import { initializeApp } from "firebase/app";
import { query, where, getDocs, collection, getFirestore, doc, getDoc } from 'firebase/firestore'
import Product from "../components/product.class";

const firebaseConfig = {
  apiKey: "AIzaSyBVe2Zanf4TL-dXOwkRpI8FYN8t_CBVrkI",
  authDomain: "solar-calcados.firebaseapp.com",
  databaseURL: "https://solar-calcados-default-rtdb.firebaseio.com",
  projectId: "solar-calcados",
  storageBucket: "solar-calcados.appspot.com",
  messagingSenderId: "402085964888",
  appId: "1:402085964888:web:be9087026dfd6f3999ae2d",
  measurementId: "G-WEXT2T9203"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);





export default class RepositorioDeProdutos{
  
    constructor(){
        this.listaDeProdutos= [
        ]
    }
  
    async retornarTodosOsProdutos(){
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
          this.listaDeProdutos.push(doc.data())
        });
        
        return new Promise((result, error) => result(this.listaDeProdutos))
    }

    async retornarProdutosEmDestaque(){
        const currentQuery = query(collection(db, "products"), where("featured", "==", 1));
        const querySnapshot = await getDocs(currentQuery);
        querySnapshot.forEach((doc) => {
          this.listaDeProdutos.push(doc.data())
        });
        
        return new Promise((result, error) => result(this.listaDeProdutos))
    }

    async retornarProdutosComKeyword(keyword){
        const currentQuery = query(collection(db, "products"), where("category", "array-contains", keyword));
        const querySnapshot = await getDocs(currentQuery);
        querySnapshot.forEach((doc) => {
          this.listaDeProdutos.push(doc.data())
        });
        
        return new Promise((result, error) => result(this.listaDeProdutos))
    }

    async retornarProduto(product){

      const docRef = doc(db, "products", product);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        this.listaDeProdutos.push(docSnap.data())
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

      return new Promise((result, error) => result(this.listaDeProdutos))
    }
  
    
  }