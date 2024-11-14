export const PRODUCT_CATEGORIES = [
    {
        label:'ui-kit',
        value:'ui-kits' as const,
        feature:[
            {
                name:'editors_piks',
                href:'#',
                imageSrc:'/nav/ui-kits/mixed.jpg',
            },
            {
                name:'new_arrivals',
                href:'#',
                imageSrc:'/nav/ui-kits/blue.jpg',
            },
            {
                name:'BestSeller',
                href:'#',
                imageSrc:'/nav/ui-kits/purple.jpg',
            }
        ]
    },
    {
        label:'icons',
        value:'icons' as const,
        feature:[
            {
                name:'Favored-icons Picks',
                href:'#',
                imageSrc:'/nav/icons/picks.jpg',
            },
            {
                name:'new_arrivals',
                href:'#',
                imageSrc:'/nav/icons/new.jpg',
            },
            {
                name:'BestSelling',
                href:'#',
                imageSrc:'/nav/icons/bestSellers.jpg',
            }
        ]
    }
]