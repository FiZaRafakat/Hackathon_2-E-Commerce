const categoriesProduct = [
    {
        img: '/cat1.png',
        title : 'Wing Chair',
        prod : '3,584 Products'
    },{
        img : '/cat2.png',
        title : 'Wooden Chair',
        prod : '157 Products'
    },{
        img : '/cat3.png',
        title  : "Desk Chair",
        prod : '154 Products'
    }
]


const Categories = () => {
  return (
    <div className="lg:mx-20 sm:mx-10 mx-3 mb-10 lg:mb-32">
        <div>
        <h2 className='text-[#272343] lg:text-[32px] text-2xl md:text-left text-center tracking-normal font-semibold'>Top Categories</h2>
        <div className="flex flex-wrap justify-center sm:flex-nowrap gap-5 mt-5">
            {categoriesProduct.map((prod)=>{
                return(
                    <div key={prod.title} className="relative" >
                       <div className="">
                            <img src={prod.img} alt={prod.title} className="hover:contrast-125" />
                        </div>
                            <div className="absolute bottom-0 w-full rounded-b-xl py-2 lg:py-3 pl-4 text-white bg-black/70 ">
                                <h5 className="lg:text-[18px] text-sm ">{prod.title}</h5>
                                <p className="text-white/70 lg:text-sm text-xs pt-1">{prod.prod}</p>
                            </div>
                        </div>
                    
                )
            })}
        </div>
        </div>
    </div>
  )
}

export default Categories