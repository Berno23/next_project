import { PRODUCT_CATEGORIES } from '@/config';
//import { Button } from '@mui/material';
import Link from 'next/link';
import { ChevronDown } from "lucide-react";
import {Button} from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from 'next/image';

// type featureArray={
//     name:string,
//     href:string,
//     imageSrc:string
// }

type categorieArray= (typeof PRODUCT_CATEGORIES)[number]

type propsType = {
    categorie: categorieArray,
    handleOpen:()=>void,
    isOpen:boolean,
    isAnyOpen:boolean

}
const NavItem=({categorie,handleOpen,isOpen,isAnyOpen}:propsType)=>{


    return (
        <div className="flex">

            <div className="flex items-center">
                <Button 
                    className='gap 1.5' 
                    onClick={handleOpen} 
                    variant={isOpen ? "outline": "ghost"}>
                    {categorie.label}
                    
                    <ChevronDown  className={cn('h-4 w-4 transition all text-muted-foreground',
                 {'-rotate-180':isOpen})}  />
                </Button>
            </div>
            {
                isOpen ? (
                    <div className={ cn('absolute inset-x-2 text top-full text-sm text-muted-foreground', 
                        {
                            'animate-in fade-in-10 slide-in-from-top-20':!isAnyOpen
                        }
                    ) }>
                        <div className='absolute inset-0 top-1/2 bg-white shadow' aria-hidden='true'></div>
                        <div className='relative bg-white'>
                            <div className='mx-auto max-w-7xl px-8'>
                                <div className='grid grid-cols-4 gap-x-8 gap-y-10 py-16'>
                                    <div className='col-span-4 col-start-1 grid grid-start-1 grid-cols-3 gap-x-8'>
                                        {categorie.feature.map((item)=>(
                                            <div key={item.name} className='group relative text-base sm:text-sm'>
                                                <div className='relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
                                                   <Image src={item.imageSrc} alt='Product categorie Image'
                                                   fill
                                                   className='object-cover object-center'
                                                   />
                                                </div>
                                                <Link href={item.href} className='mt-6 block font-medium'> {item.name}</Link>
                                                <p className='mt-1' aria-hidden='true'> Shop Now</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ): null
            }

        </div>
    )

}

export default NavItem;