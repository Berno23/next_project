import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";


const perks=[
  {
    name:'Instant delivery',
    Icon:ArrowDownToLine,
    Description:'Get your assets'
  },
  {
    name:'Garanted',
    Icon:CheckCircle,
    Description:'Every asset on our plateform are verified'
  },
  {
    name:'For the planet',
    Icon:Leaf,
    Description: 'Lorem ipsum dolor,orum minus voluptates, nesciunt itaque quo aliquid quasi'
  }
]

export default function Home() {

  return <>
   
  <MaxWidthWrapper>
  
    <div className="mx-auto text-center flex flex-col py-20  items-center">
        <h1>Your marketplace for highQuality {' '} <span className="text-blue-600">Digital Access</span></h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-prose">Welcome to Digital. Chaque produit sur notre plateforme est vérifié par notre groupe</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a href="/products" className={buttonVariants()}>Browse Trending</a> 
          <Button variant='ghost'>Our Site Promise &rarr;</Button>
        </div>
      </div>
    
   
  </MaxWidthWrapper>
  <section className="border-t border-gray-200 bg-gray-50">
    <MaxWidthWrapper className="py-20">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
        {
          perks.map((perk)=>(
            <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center bg-blue-100 rounded-full">
                  <div className="w-1/9 h-1/9">{<perk.Icon className='w-1/3 h-1/3' />} </div>
                </div>
              </div>
              <div className="text-base font-medium text-gray-900">
                  {perk.name}
              </div>
              <div className="mt-3 text-sm text-muted-foreground">
                  {perk.Description}
              </div>
              
            </div>
          ))
        }
      </div>
      
    </MaxWidthWrapper>
  </section>
  </>
}

