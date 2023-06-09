import { createContext, useState ,useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.util";






export const CategoriesContext =createContext({
    catgeoriesMap:{},

});

export const CategoriesProvider =({children})=>{
    const [catgeoriesMap,setcatgeoriesMap]=useState({});
/*     useEffect(()=>{

        addCollectionAndDocuments('categories',SHOP_DATA);

    },[]) */


useEffect(()=>{
    const getCategoriesMap = async ()=>{
        const catgeoryMap = await  getCategoriesAndDocuments();
        setcatgeoriesMap(catgeoryMap);
        
    }
    getCategoriesMap();
},[])


    const value={catgeoriesMap};


    return(
        <CategoriesContext.Provider value={value}>
            
            {children}

        </CategoriesContext.Provider>
    )
}