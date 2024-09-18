'use client'

import { useEffect, useState } from "react";
import { PurchaseModel } from "../models/purchase-model"

export const ModelProvider = () =>{
    const [isMounted,setIsMounted]=useState(false);
    
    useEffect(()=>{
        setIsMounted(true);
    },[])

    if(!isMounted) return null;

    return(
        <>
          <PurchaseModel/>  
        </>
    )
}