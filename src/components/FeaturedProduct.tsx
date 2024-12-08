import Link from "next/link";
import { BsCartDash } from "react-icons/bs";

const Products =[
    {
        id : '1',
        img : '/fprod1.png',
        name : 'Library Stool Chair',
        discPrice : '$20',
        off : 'New',
        offColor : '#01AD5A'
    },{
        id : '2',
        img : '/fprod2.png',
        name : 'Library Stool Chair',
        discPrice : '$20',
        RealPrice : '$39',
        off : 'Sales',
        offColor : '#F5813F'
    },{
        id : '3',
        img : '/fprod3.png',
        name : 'Library Stool Chair',
        discPrice : '$20',
    },{
        id : '4',
        img : '/fprod4.png',
        name : 'Library Stool Chair',
        discPrice : '$20',
    }
]

const FeaturedProduct = () => {
  return (
    <div className='lg:mx-20 sm:mx-10 mx-3 mb-10 lg:mb-36'>
    <div>
        <h2 className='text-[#272343] lg:text-[32px] text-2xl md:text-left text-center tracking-normal font-semibold '>Featured Product</h2>
        <div className="products flex md:flex-nowrap justify-center flex-wrap mt-5 gap-3 xl:gap-5">
          {Products.map((prod)=>{           
           return(
            <Link href={`/products/${prod.id}`} key={prod.id}>
            <div className=' cursor-pointer  '>
           <div className="img relative">
              <img src={prod.img} alt={prod.name} className="w-[250px] h-[250px] hover:brightness-90 lg:w-full lg:h-full object-cover" />
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
            <div className="cart px-3 py-2 bg-[#F0F2F3] hover:bg-[#029FAE] text-[#272343] hover:text-white rounded-lg">
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

export default FeaturedProduct