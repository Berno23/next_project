"use client"

import { PRODUCT_CATEGORIES } from "@/config";
import { useState } from "react"
import NavItem from "./navItem";


export const NavItems =()=>{
    const [activeIndex, setActiveIndex]=useState<null | number>(null);

    const isAnyOpen = activeIndex!== null;

    return (
        <div className="flex gap-4 h-full">

        {
            PRODUCT_CATEGORIES.map((categorie,i)=>{
            
                const handleOpen = ()=>{
                    if( activeIndex==i){
                        setActiveIndex(null)
                    }else{
                        setActiveIndex(i)
                    }
                }
                const isOpen=i==activeIndex
                return(
                    <NavItem categorie={categorie}
                     handleOpen={handleOpen} 
                     isOpen={isOpen} 
                     key={categorie.value}
                     isAnyOpen={isAnyOpen}/>
                )
            })
        }
        
        </div>
    )

    
      
}