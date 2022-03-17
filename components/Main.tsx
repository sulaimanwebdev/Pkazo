import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Link from 'next/link';


const fileTypes = ["JPEG", "PNG", "GIF", "SVG"];


const Main = () => {

   const [profilePicture, setprofilePicture] = useState('');
   const [profilePictureURL, setprofilePictureURL] = useState('/images/image1.svg');


   
   const [actualProfileCont1, setactualProfileCont1] = useState('hidden');
   const [actualProfileCont2, setactualProfileCont2] = useState('hidden');



   const [replace, setreplace] = useState(null);


    const [file, setFile] = useState(null);

    const handleChange = (file) => {
      setFile(file);
      setactualProfileCont2('')
      setticks("9")

    };

    const [modal, setmodal] = useState('opacity-0 invisible');






    let replaceImage = (e) =>{

      if (e.target.files && e.target.files.length > 0) {
      
        setprofilePicture("hidden");
        setreplace(e.target.files[0]);
        setactualProfileCont1('');
        setactualProfileCont2('hidden');
      
    }
    
    }



    const [ticks, setticks] = useState("0");



  return (
    <>
   


 

   <div className="text-2xl max-w-[1000px] px-[40px]  leading-[1.5] mx-auto text-center opacity-80 mt-20 font-bold">
   Attach in progress posts of the same work to this completed work.  <br />
   <span className='font-normal text-xl'>(Select a maximum of 8 posts)</span>
   </div>




   <div className="max-w-[1100px] px-[40px] mx-auto  mt-24 mb-10" onClick={()=> setmodal("opacity-100 visible")}>
     
     <div className="text-xl opacity-80 mb-5">Select from Existing Posts</div>

     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 cursor-pointer">
       <div className="h-auto " >
           <img src="/images/image1.svg" alt="post" className='w-full h-full object-cover position-center' />
       </div>

       <div className="h-auto " >
           <img src="/images/image2.svg" alt="post" className='w-full h-full object-cover position-center' />
       </div>


       <div className="h-auto " >
           <img src="/images/image3.svg" alt="post" className='w-full h-full object-cover position-center' />
       </div>

       <div className="h-auto "  >
           <img src="/images/image4.svg" alt="post" className='w-full h-full object-cover position-center' />
       </div>



       <div className="h-auto " >
           <img src="/images/image5.svg" alt="post" className='w-full h-full object-cover position-center' />
       </div>



       <div className="h-auto " >
           <img src="/images/image6.svg" alt="post" className='w-full h-full object-cover position-center' />
       </div>



       <div className="h-auto " >
           <img src="/images/image7.svg" alt="post" className='w-full h-full object-cover position-center' />
       </div>



       <div className="h-auto " >
           <img src="/images/image8.svg" alt="post" className='w-full h-full object-cover position-center' />
       </div>


       <div className=" h-auto" >
           <img src="/images/image9.svg" alt="post" className='w-full h-full object-cover position-center' />
       </div>

       {file && (
          <div className="h-auto rounded-lg ">
            <img
              src={URL.createObjectURL(file)}
              className="w-full h-full object-cover position-center rounded-lg "
              alt="Thumb"
            />
          
          </div>
        )}



     </div>


   </div>






   <div className="flex items-center justify-center  px-[40px] max-w-[1000px] mt-20 mb-6 mx-auto ">
   <FileUploader
        multiple={false}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        maxSize="100"

        children={
          <label className="sc-bdvvtL iciELI flex items-center justify-center rounded-sm  border-dashed border-2 border-gray-400 " htmlFor="file"><input type="file"  className="hidden" accept=".jpeg,.png,.gif" name="file" /><div className="sc-dkPtRN ebdQkY flex items-center justify-center  mx-auto"><span className="mx-auto"><span className="font-bold text-[21px] mr-[3px]">Upload</span> <span className="text-[18px]">or</span> <span className="font-bold text-[21px] mx-[3px]">Drag and Drop</span> <span className="text-[18px]">right here</span></span></div></label>
        }
       
      />

   </div>

   <div className="px-[40px] flex items-center text-white text-lg next-link justify-start mb-20 mt-20">
      <Link href="/complete-post">Next</Link>
   </div>
 





  {/* POPUP */}

<div
onClick={()=> setmodal("opacity-0 invisible")}
className={`modalParent w-screen fixed top-1/2 transition left-1/2  h-screen ${modal}`}></div>

<div className={`max-w-[1500px] px-10 py-10 grid gap-7  modal rounded-lg fixed transition top-1/2 left-1/2 bg-white z-10 max-h-[800px] h-screen ${modal}`}>
  
<div className="">
  <div className="rounded-full relative mx-auto h-[200px] w-[200px] overflow-hidden flex items-center justify-center flex-col gap-5">
  
   <img src={profilePictureURL} className={`w-full h-full absolute top-0 left-0 object-cover position-center ${profilePicture}`}/>
  
   {replace && (
        
            <img
              src={URL.createObjectURL(replace)}
    
        className={`w-full h-full absolute top-0 left-0 object-cover position-center ${actualProfileCont1}`}
              alt="Thumb"
            />
            
        )}

{file && (
            <img
              src={URL.createObjectURL(file)}
              className={`w-full h-full absolute top-0 left-0 object-cover position-center ${actualProfileCont2}`}
              alt="Thumb"
            />
          
        )}

  
   <div className="w-full h-full absolute top-0 left-0 z-5 blackOverlayPorfile"></div>

   <label htmlFor="replaceImage" className="w-32 py-[5px] rounded cursor-pointer flex items-center justify-center text-white font-bold z-10 border-2 border-white">Replace</label>
   <input type="file" className="hidden" accept=".jpeg,.png,.gif,.svg" onChange={replaceImage} id="replaceImage" />

   <button
   onClick={()=> {

    setprofilePicture('hidden')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')
    setticks("-1")
   }}
   className="w-32 py-[5px] rounded text-white font-bold z-10 border-2 border-white">Delete</button>

  </div>

  <div className="mt-10">
    <input type="text" className="w-full py-2 rounded outline-none px-3 border border-gray-300 mb-5" placeholder="Title"/>
    <textarea className="w-full h-[150px] py-2 rounded outline-none px-3 border border-gray-300 resize-none" placeholder="Write a description..."></textarea>
  </div>
</div>





<div className="h-full ">
  <div className="opacity-80 font-bold mb-4 text-[19px]">Select the pieces that you would like in this portfolio</div>
  <div className="grid  gap-5 grid-cols-5 mb-10">

  <div
  onClick={() => 
    {
    setticks("0")
    setprofilePictureURL('/images/image1.svg')
    setprofilePicture('flex')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')
    }
  }
  className="h-[120px] rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
           <img src="/images/image1.svg" alt="post" className='w-full h-full absolute top-0 left-0 object-cover position-center' />
   <div className={ticks === "0" ? "w-full h-full absolute top-0 left-0 z-5 blackOverlayPorfile" : "hidden"}></div>
   <i className={ticks === "0" ? "far fa-check z-10 text-white text-4xl" : "hidden"}></i>
   </div>


   <div
   onClick={() => {
     setticks("1")
     setprofilePictureURL('/images/image2.svg')
     setprofilePicture('flex')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')
  
  }}
   className="h-[120px] rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
           <img src="/images/image2.svg" alt="post" className='w-full h-full absolute top-0 left-0 object-cover position-center' />
   <div className={ticks === "1" ? "w-full h-full absolute top-0 left-0 z-5 blackOverlayPorfile" : "hidden"}></div>
   <i className={ticks === "1" ? "far fa-check z-10 text-white text-4xl" : "hidden"}></i>
   </div>


   <div
   onClick={() => {
     
    setticks("2")
    setprofilePictureURL('/images/image3.svg')
    setprofilePicture('flex')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')

  
  }}
   className="h-[120px] rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
           <img src="/images/image3.svg" alt="post" className='w-full h-full absolute top-0 left-0 object-cover position-center' />
   <div className={ticks === "2" ? "w-full h-full absolute top-0 left-0 z-5 blackOverlayPorfile" : "hidden"}></div>
   <i className={ticks === "2" ? "far fa-check z-10 text-white text-4xl" : "hidden"}></i>
   </div>




   <div 
   onClick={() => {
     setticks("3")
     setprofilePictureURL('/images/image4.svg')
     setprofilePicture('flex')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')
    
    }}
   className="h-[120px] rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
           <img src="/images/image4.svg" alt="post" className='w-full h-full absolute top-0 left-0 object-cover position-center' />
           <div className={ticks === "3" ? "w-full h-full absolute top-0 left-0 z-5 blackOverlayPorfile" : "hidden"}></div>
   <i className={ticks === "3" ? "far fa-check z-10 text-white text-4xl" : "hidden"}></i>

   </div>




   <div 
   onClick={() => {
     
    setticks("4")
    setprofilePictureURL('/images/image5.svg')
    setprofilePicture('flex')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')
  
  }}
   className="h-[120px] rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
           <img src="/images/image5.svg" alt="post" className='w-full h-full absolute top-0 left-0 object-cover position-center' />
   
           <div className={ticks === "4" ? "w-full h-full absolute top-0 left-0 z-5 blackOverlayPorfile" : "hidden"}></div>
   <i className={ticks === "4" ? "far fa-check z-10 text-white text-4xl" : "hidden"}></i>
   </div>







   <div 
   onClick={() => {
     
    setticks("5")
    setprofilePictureURL('/images/image6.svg')
    setprofilePicture('flex')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')
  
  }}
   className="h-[120px] rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
           <img src="/images/image6.svg" alt="post" className='w-full h-full absolute top-0 left-0 object-cover position-center' />
           <div className={ticks === "5" ? "w-full h-full absolute top-0 left-0 z-5  blackOverlayPorfile" : "hidden"}></div>
   <i className={ticks === "5" ? "far fa-check z-10 text-white text-4xl" : "hidden"}></i>

   </div>





   <div 
   onClick={() => {
     
    setticks("6")
    setprofilePictureURL('/images/image7.svg')
    setprofilePicture('flex')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')

  
  }}
   className="h-[120px] rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
           <img src="/images/image7.svg" alt="post" className='w-full h-full absolute top-0 left-0 object-cover position-center' />
           <div className={ticks === "6" ? "w-full h-full absolute top-0 left-0 z-5 blackOverlayPorfile" : "hidden"}></div>
   <i className={ticks === "6" ? "far fa-check z-10 text-white text-4xl" : "hidden"}></i>

   </div>








   <div
   onClick={() => {
     setticks("7")
     setprofilePictureURL('/images/image8.svg')
     setprofilePicture('flex')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')

  
  }}
   className="h-[120px] rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
           <img src="/images/image8.svg" alt="post" className='w-full h-full absolute top-0 left-0 object-cover position-center' />
           <div className={ticks === "7" ? "w-full h-full absolute top-0 left-0 z-5 blackOverlayPorfile" : "hidden"}></div>
   <i className={ticks === "7" ? "far fa-check z-10 text-white text-4xl" : "hidden"}></i>

   </div>







   <div
   onClick={() => {
     setticks("8")
     setprofilePictureURL('/images/image9.svg')
     setprofilePicture('flex')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')

  
  }}
   className="h-[120px] rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
           <img src="/images/image9.svg" alt="post" className='w-full h-full absolute top-0 left-0 object-cover position-center' />
   
<div className={ticks === "8" ? "w-full h-full absolute top-0 left-0 z-5 blackOverlayPorfile" : "hidden"}></div>
   <i className={ticks === "8" ? "far fa-check z-10 text-white text-4xl" : "hidden"}></i>
          
          
   </div>


   {file && (
          <div 
          onClick={() => {
            setticks("9")
            setprofilePicture('hidden')


      setactualProfileCont2('')
      setactualProfileCont1('hidden')



        
        }}
          className="h-[120px] rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
            <img
              src={URL.createObjectURL(file)}
              className="w-full h-full absolute top-0 left-0 object-cover position-center "            
            />

<div className={ticks === "9" ? "w-full h-full absolute top-0 left-0 z-5 blackOverlayPorfile" : "hidden"}></div>
   <i className={ticks === "9" ? "far fa-check z-10 text-white text-4xl" : "hidden"}></i>
          
          </div>
        )}









  </div>


  <div className=" w-full modalUpload mt-10 ">
  <FileUploader
        multiple={false}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        maxSize="100"

        children={
          <label className="sc-bdvvtL rounded-sm iciELI flex items-center justify-center  border-dashed border-2 border-gray-400 " htmlFor="file"><input type="file" className="hidden" accept=".jpeg,.png,.gif" name="file" /><div className="sc-dkPtRN ebdQkY flex items-center justify-center  mx-auto"><span className="mx-auto"><span className="font-bold text-[21px] mr-[3px]">Upload</span> <span className="text-[18px]">or</span> <span className="font-bold text-[21px] mx-[3px]">Drag and Drop</span> <span className="text-[18px]">right here</span></span></div></label>
        }
       
      />

      </div>


     


      <i onClick={()=> setmodal("opacity-0 invisible")} className="far fa-times absolute cursor-pointer top-[20px] right-[30px] text-3xl text-gray-300"></i>


      <div className="modalButtons flex items-center justify-end gap-5">
         <button 
         onClick={()=> setmodal("opacity-0 invisible")}
         className="border-2 border-[#E24E4D] px-7 py-2 rounded-full font-bold text-[#E24E4D]">Cancel</button>
         <button className="bg-[#E24E4D] border-2 border-[#E24E4D] px-7 py-2 rounded-full font-bold text-white transition hover:bg-[#be4040] hover:border-[#be4040]">Save</button>

      </div>


</div>








</div>

    
    </>
  )
}

export default Main