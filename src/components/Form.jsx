"use client";
import { db } from "@/firebase";
import { addDoc, collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Form = ({database, background, title}) => {
  const [items, setItems] = useState([
    // { name: "uber", price: 234 },
    // { name: "bolt", price: 24 },
    // { name: "yango", price: 534 },
    // { name: "shaxi", price: 324 },
  ]);
// Total State
  const [total, setTotal] = useState(50);

  // New Item State
  const [newItem, setNewItem] = useState({name:"", price:""})

  // Add Item Function
  const addItem = async(e)=>{
    e.preventDefault()
    
    // Empty Input Condition
    if(newItem.name !== "" && newItem.price !== ""){
      // setItems([...items, newItem])


      try{
        await addDoc(collection(db, database),{
          name: newItem.name.trim(),
          price: newItem.price.trim()
        }).then((result)=>{alert("Successful Added")})
      }catch(error){
        console.log("An Error occured adding a new Item: ", error)
      }
    } 
    setNewItem({name:"", price:""})
  }

  // Read Item
  useEffect(()=>{
    const queryData = query(collection(db,database));
    const requestData = onSnapshot(queryData, (querySnapshot)=>{
      let itemArray = []
      querySnapshot.forEach((doc)=>{
        itemArray.push({...doc.data(), id:doc.id })
        
        // Calculate Total item prices
        const totalPrice = ()=>{
          const totalCalc = itemArray.reduce((sum, item)=> sum + parseFloat(item.price), 0)
          setTotal(totalCalc)
        }
        totalPrice()
      })
      setItems(itemArray)
      return ()=>requestData()
    })
  },[])


  // Delete Item
  const deleteItem = async(id)=>{
      // e.preventDefault()
    await deleteDoc(doc(db, database, id)).then(()=>{
      alert("Item Deleted Successfully")
    }).catch((err)=>{
      console.log("Error occured")
      alert("Something went wrong, try again later")
    })
  }


  return (
    <div className="my-3 border-b-2 border-gray-800">
      <h2 className={`font-bold text-xl ${background} p-3 text-white`}>
        {title}
      </h2>
      <div className="mt-3">
        <form>
          <input
            className="p-3 border-r-2 border-blue-600 outline-none"
            type="text"
            placeholder="Enter Income Item"
            value={newItem.name}
            onChange={(e)=>setNewItem({...newItem, name:e.target.value})}
          />
          <input
            className="p-3 outline-none"
            type="number"
            placeholder="Enter Income Amount"
            value={newItem.price}
            onChange={(e)=>setNewItem({...newItem, price:e.target.value})}
          />
          <button onClick={addItem} className=" font-extrabold p-3 text-white bg-blue-600 hover:bg-blue-400 duration-300 ease-in-out">
            +
          </button>
        </form>
        <div>
          {items.map((item, id) => (
            <ul key={id} className="flex justify-between items-center">
              <li className="w-full flex justify-between items-center p-3 bg-gray-800 text-white hover:bg-gray-700 duration-300 ease-in-out my-2">
                <span className="">{item.name}</span>
                <span className="">Ghs {item.price}</span>
              </li>
              <button onClick={()=>deleteItem(item.id)} className="bg-red-600 text-white hover:bg-red-500 duration-300 ease-in-out p-3">
                X
              </button>
            </ul>
          ))}
          {
            items.length < 1 ? (""):(
            <div className="flex justify-between align-center font-extrabold text-lg">
              <span className="">Total</span>
              <span className="text-gray-700">Ghs {total}</span>
            </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Form;
