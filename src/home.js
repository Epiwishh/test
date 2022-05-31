// @ts-nocheck
import React, { useEffect, useState } from "react";
import { auth, logout, db } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import recipesData from './data/recipes.json';
import { getFirestore, doc, addDoc, collection} from "firebase/firestore";








function Home() {

  const addFavorite = async (recipe) => {
    const user = auth.currentUser;

    await addDoc(collection(db, "users", user.uid, "favorites"), recipe);
    
    
  };



    return (
      <div className="home">
        <h1>HOME PAGE</h1>
        <button
         onClick={() => logout()}
        >
          Logout
        </button>

        <div className="container products">
          {recipesData.map((recipe, index) => <div key={index} className="item-big">
          <img src={recipe.image}></img>
          <h6>{recipe.name}</h6>
          <center>
            <button
             className="favorite"
             onClick={() => addFavorite(recipe)}>
             Add to Favorite ❤
            </button>
          </center>
          </div>)}
        </div>

      </div>
      
    );
  
};
  
  export default Home;