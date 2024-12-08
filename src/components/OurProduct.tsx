import Link from "next/link"
import { BsCartDash } from "react-icons/bs"

const Products =[
    {   
       id : '1',
        img : '/fprod1.png',
        name : 'Library Stool Chair',
        discPrice : '$20',
        off : 'New',
        offColor : '#01AD5A'
    },{
        id : "2",
        img : '/fprod2.png',
        name : 'Library Stool Chair',
        discPrice : '$20',
        RealPrice : '$39',
        off : 'Sales',
        offColor : '#F5813F'
    },{
        id :  '3',
        img : '/fprod3.png',
        name : 'Library Stool Chair',
        discPrice : '$20',
    },{ 
        id : '4',
        img : '/fprod4.png',
        name : 'Library Stool Chair',
        discPrice : '$20',
    },{
        id : '9',
        img: '/cat1.png',
        name : 'Library Stool Chair',
        discPrice : '$20',
        off : 'New',
        offColor : '#01AD5A'
    },{
       id : '6',
        img : '/card2.png',
        name : 'Library Stool Chair',
        discPrice : '$20',
        RealPrice : '$39',
        off : 'Sales',
        offColor : '#F5813F'
    },{
       id :'7',
        img : '/fprod5.png',
        name : 'Library Stool Chair',
        discPrice : '$20',
    },{
        id :'8',
        img : '/card3.png',
        name : 'Library Stool Chair',
        discPrice : '$20',
    }
]

const OurProduct = () => {
  return (
    <div className='lg:mx-20 sm:mx-10 mx-3 mb-20 lg:mb-40'>
    <div>
        <h2 className='text-[#272343] lg:text-[32px] text-2xl md:text-left text-center tracking-normal font-semibold'>Our Products</h2>
        <div className="products flex  flex-wrap justify-center lg:mt-10 mt-3 gap-5 gap-y-20 lg:gap-y-28">
          {Products.map((prod)=>{
           return(
            <Link href={`/products/${prod.id}`} key={prod.id}>
            <div key={prod.img} className='w-[280px] h-[280px] cursor-pointer hover:drop-shadow-md'>
           <div className="img relative">
              <img src={prod.img} alt={prod.name} className="w-full h-full object-cover rounded-xl" />
               {prod.off && (
                 <span
                 className="absolute top-4 left-4 rounded-lg text-sm px-3 py-1"
                 style={{ backgroundColor: prod.offColor, color: "white" }}
                >
                {prod.off}
              </span>
              )}
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="text gap-[10px]">
                <h4 className="text-[#272343]">{prod.name}</h4>
                <div>
                    <span className="text-[#272343] text-[18px] font-medium">{prod.discPrice}</span>
                    <del className="ml-1 text-[#9A9CAA]">{prod.RealPrice}</del>
                </div>
            </div>
            <div className="cart px-3 py-2 bg-[#F0F2F3] hover:shadow-xl hover:bg-[#029FAE] text-[#272343] hover:text-white rounded-lg">
              <Link href="/cart"><BsCartDash  className="size-6"/></Link>
            </div>
          </div>
         </div>
         </Link>
            )
          })}
        </div>
    </div>
    </div>
  )
}

export default OurProduct