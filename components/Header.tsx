import Link from 'next/link';

const Header = () => {
  return (
    <div className="header w-full">
        <div className="avgMaxWidth flex items-center justify-between py-3 gap-7">
                 <div className="flex items-center gap-10">
                   <div className="cursor-pointer">
                   <Link href="/blog" ><img src="/images/Pkazo.png" className='w-28' alt="Pkazo" /></Link>
                   </div>

                   <div>
                       <input type="text" placeholder='Search' className='px-4 py-2  bg-gray-100 outline-none rounded-full w-72'/>
                   </div>
                 </div>




      
       
        
                 <div className="flex items-center gap-14 transform -translate-x-24">
                     <div className="cursor-pointer"><Link href="/"><img src="/images/house.svg" /></Link></div>
                     <div className="cursor-pointer"><Link href="/"><img src="/images/shop.svg" /></Link></div>
                     <div className="cursor-pointer"><Link href="/"><img src="/images/plus.svg" /></Link></div>
                     <div className="cursor-pointer"><Link href="/"><img src="/images/message.svg" /></Link></div>

                 </div>





                 <div className="flex items-center gap-7">

                 <div className="cursor-pointer"><Link href="/"><img src="/images/profile.png" /></Link></div>
                 <div className="cursor-pointer"><Link href="/"><img src="/images/plus.svg" /></Link></div>
                 <div className="cursor-pointer"><Link href="/"><img src="/images/cart.svg" /></Link></div>


                 </div>





        </div>
    </div>
  )
}

export default Header