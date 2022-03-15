import React, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link';


const CompletePostComponent = () => {

    const [selectedImage, setselectedImage] = useState(1);

  return (
    <>
    <Head>
        <title>Pkazo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>

<link rel="preconnect" href="https://fonts.gstatic.com"/>

<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"></link>
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.11.1/css/all.css"></link>
      </Head>

    




      <div className="flex mt-16 items-center justify-between gap-10 px-[40px] max-w-[1250px] my-6 mx-auto">

      <Link href="/">

<div className="flex items-center gap-1 opacity-75 cursor-pointer ">
<i className="far fa-angle-left text-2xl"></i>
<span>Back</span>
</div>
</Link>


<Link href="/complete-post">
<div className="flex items-center gap-1 opacity-75 cursor-pointer ">
<span>Skip</span>
<i className="far fa-angle-right text-2xl"></i>
</div>
</Link>


</div>




      <div className="grid grid-cols-3  px-[40px] max-w-[1000px]  my-6 mx-auto ">
   
   <div className="bg-gray-300 h-[3px]"></div>
   <div className="bg-gray-300 h-[3px]"></div>
   <div className="bg-[#E24E4D] h-[3px]"></div>


   </div>



   <div className="grid grid-cols-3  px-[40px] max-w-[1000px] my-6 mx-auto">

   <div className="flex items-center justify-center leading-[0.4] opacity-85">Work Information</div>
   <div className="flex items-center justify-center leading-[0.4] opacity-85">In Progress Posts</div>
   <div className="flex items-center justify-center leading-[0.4] opacity-85">Include In Portfolios</div>


  </div>




  <div className="text-2xl max-w-[1000px] px-[40px]  leading-[1.5] mx-auto text-center opacity-80 mt-20 font-bold">
  Include this completed work in your portfolio!
   </div>



   <div className="max-w-[1100px] gap-5 px-[40px] mx-auto flex items-center justify-between flex-wrap mt-24 mb-10">



<div onClick={() => {setselectedImage(1)}}>
<div className={`${selectedImage === 1 ? "active-Image" : "non-active-image"} w-[130px] h-[130px] cursor-pointer rounded-full overflow-hidden`}>
    <img src="/images/image1.svg" className='w-full h-full object-cover position-center'/>
</div>
<div className='mx-auto opacity-85 mt-3 flex items-center justify-center'>Series 1</div>
</div>




<div onClick={() => {setselectedImage(2)}}>
<div className={`${selectedImage === 2 ? "active-Image" : "non-active-image"} w-[130px] h-[130px] cursor-pointer rounded-full overflow-hidden`}>
    <img src="/images/image6.svg" className='w-full h-full object-cover position-center'/>
</div>
<div className='mx-auto opacity-85 mt-3 flex items-center justify-center'>Series 2</div>


</div>




<div onClick={() => {setselectedImage(3)}}>
    
<div className={`${selectedImage === 3 ? "active-Image" : "non-active-image"} w-[130px] h-[130px] cursor-pointer rounded-full overflow-hidden`}>
    <img src="/images/image3.svg" className='w-full h-full object-cover position-center'/>
</div>

<div className='mx-auto opacity-85 mt-3 flex items-center justify-center'>Series 3</div>


</div>


<div onClick={() => {setselectedImage(4)}}>
    
<div className={`${selectedImage === 4 ? "active-Image" : "non-active-image"} w-[130px] h-[130px] cursor-pointer rounded-full overflow-hidden`}>
    <img src="/images/image4.svg" className='w-full h-full object-cover position-center'/>
</div>

<div className='mx-auto opacity-85 mt-3 flex items-center justify-center'>Series 4</div>


</div>


<div onClick={() => {setselectedImage(5)}}>
<div className={`${selectedImage === 5 ? "active-Image" : "non-active-image"} w-[130px] h-[130px] cursor-pointer rounded-full overflow-hidden`}>
    <img src="/images/image9.svg" className='w-full h-full object-cover position-center'/>
</div>

<div className='mx-auto opacity-85 mt-3 flex items-center justify-center'>Series 5</div>

</div>

  
   </div>




   <div className="px-[40px] flex items-center text-white text-lg next-link justify-start mb-20 mt-40">
      <Link href="/complete-post">Post Completed Work</Link>
   </div>
 






   <input value="true" className="" type="radio"  id="series1"/>






   <input value="true" className="" type="radio"  id="series2"/>






    </>
  )
}

export default CompletePostComponent