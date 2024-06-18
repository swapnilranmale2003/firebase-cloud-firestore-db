
import { getFirestore, collection, addDoc, doc, getDoc,  query, where, getDocs } from "firebase/firestore";
import {app} from './firebase'
const firestore = getFirestore(app);
function App() {
  const writeData = async()=>{
   const result = await addDoc(collection(firestore,'cities'),{
      name:"Nashik",
      pinCode:422010
    })
    console.log("Result",result);
  }
  const writeSubData = ()=>{
    addDoc(collection(firestore,'cities/3lPjf3fZ14bXELw2qZGR/places'),{
      name:"this is place",
      des:"awsm place",
      date:Date.now()
    });
  }
  const getData = async()=>{
    const docRef = doc(firestore, "cities","N49XlttFySv1EbxQXywL");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  }
  const getDocument = async ()=>{
      const qref = collection(firestore,'users');
      const q =  query(qref, where('isMale', '==', false));
      const snap=await getDocs(q);
      snap.forEach((data)=>console.log(data.data()))
  }
  return (
    <div className="App">
     <h1>Firebase cloudstore</h1>
     <button onClick={writeData}>PutData</button>
     <button onClick={writeSubData}>PutData</button>
     <button onClick={getData}>GetData</button>
<button onClick={getDocument}>getDocument</button>

    </div>

  );
}

export default App;
