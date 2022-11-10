import React from 'react'
import { useReducer } from 'react';
import { createContext } from 'react'

export const TweetContext= createContext();

const initialState={
    name: "",
    text: ""
};


const tweetReducer= (state, action)=>{

    switch (action.type) {
        case "NOMBRE_TWEET":
            return {...state, name: action.payload }
          

            case "TEXTO_TWEET":

            return{...state, text: action.payload}       
    
        default:
            return state;
    }

}



const ContextTweetProvider = ({children}) => {


    const[state, dispatch]=useReducer(tweetReducer, initialState)
    console.log(state);
    
  return (
   
        <TweetContext.Provider value={{state, dispatch}} >

            {children}

        </TweetContext.Provider>


   
  )
}

export default ContextTweetProvider;