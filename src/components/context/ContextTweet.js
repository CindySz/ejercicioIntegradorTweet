import React from 'react'
import { useReducer } from 'react';
import { createContext } from 'react'

export const TweetContext= createContext();

const initialState={};


const tweetReducer= (state, action)=>{

    switch (action.type) {
        case "CREAR_TWEET":
            
            break;
    
        default:
            break;
    }

}



const ContextTweetProvider = ({children}) => {


    const[state, dispatch]=useReducer(tweetReducer, initialState)
    
  return (
   
        <TweetContext.Provider value={[state, dispatch]} >

            {children}

        </TweetContext.Provider>


   
  )
}

export default ContextTweetProvider;