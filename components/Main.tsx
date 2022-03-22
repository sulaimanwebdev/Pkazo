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





    const [selectImagePopup1, setselectImagePopup1] = useState('hidden');
    const [selectImagePopup2, setselectImagePopup2] = useState('hidden');
    const [selectImagePopup3, setselectImagePopup3] = useState('hidden');
    const [selectImagePopup4, setselectImagePopup4] = useState('hidden');
    const [selectImagePopup5, setselectImagePopup5] = useState('hidden');
    const [selectImagePopup6, setselectImagePopup6] = useState('hidden');
    const [selectImagePopup7, setselectImagePopup7] = useState('hidden');
    const [selectImagePopup8, setselectImagePopup8] = useState('hidden');
    const [selectImagePopup9, setselectImagePopup9] = useState('hidden');
    const [selectImagePopup10, setselectImagePopup10] = useState('hidden');





  return (
    <>
   


 

   <div className="text-2xl max-w-[1000px] px-[40px]  leading-[1.5] mx-auto text-center opacity-80 mt-20 font-bold">
   Attach in progress posts of the same work to this completed work.  <br />
   <span className='font-normal text-xl'>(Select a maximum of 8 posts)</span>
   </div>




   <div className="max-w-[1100px] px-[40px] mx-auto  mt-24 mb-10" onClick={()=> setmodal("opacity-100 visible")}>
     
     <div className="text-xl opacity-80 mb-5">Select from Existing Posts</div>

     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 cursor-pointer">
       <div className=" h-[190px]   rounded-lg overflow-hidden relative  flex items-center justify-center" 
         onClick={()=>{
          if(selectImagePopup1 === "hidden"){
            setselectImagePopup1("flex");
          }
      
          else{
            setselectImagePopup1("hidden");
      
          }
        }}
       >
           <img src="/images/image1.svg" alt="post" className='w-full h-full object-cover position-center absolute top-0 left-0 ' />

           <div className={`w-full h-full absolute top-0 left-0 z-5  blackOverlayPorfile ${selectImagePopup1}`}></div>
   <i className={`far fa-check z-50 text-white text-4xl ${selectImagePopup1}`}></i>
      
       </div>

       <div className=" h-[190px]   rounded-lg overflow-hidden relative  flex items-center justify-center"
         onClick={()=>{
          if(selectImagePopup2 === "hidden"){
            setselectImagePopup2("flex");
          }
      
          else{
            setselectImagePopup2("hidden");
      
          }
        }}
       >
           <img src="/images/image2.svg" alt="post" className='w-full h-full object-cover position-center absolute top-0 left-0 ' />

           <div className={`w-full h-full absolute top-0 left-0 z-5  blackOverlayPorfile ${selectImagePopup2}`}></div>
   <i className={`far fa-check z-50 text-white text-4xl ${selectImagePopup2}`}></i>
      
       </div>


       <div className=" h-[190px]   rounded-lg overflow-hidden relative  flex items-center justify-center" 
        onClick={()=>{
          if(selectImagePopup3 === "hidden"){
            setselectImagePopup3("flex");
          }
      
          else{
            setselectImagePopup3("hidden");
      
          }
        }}
       >
           <img src="/images/image3.svg" alt="post" className='w-full h-full object-cover position-center absolute top-0 left-0 ' />

           <div className={`w-full h-full absolute top-0 left-0 z-5  blackOverlayPorfile ${selectImagePopup3}`}></div>
   <i className={`far fa-check z-50 text-white text-4xl ${selectImagePopup3}`}></i>
      
       </div>

       <div className=" h-[190px]   rounded-lg overflow-hidden relative  flex items-center justify-center"  onClick={()=>{
          if(selectImagePopup4 === "hidden"){
            setselectImagePopup4("flex");
          }
      
          else{
            setselectImagePopup4("hidden");
      
          }
        }}  >
           <img src="/images/image4.svg" alt="post" className='w-full h-full object-cover position-center absolute top-0 left-0 ' />

           <div className={`w-full h-full absolute top-0 left-0 z-5  blackOverlayPorfile ${selectImagePopup4}`}></div>
   <i className={`far fa-check z-50 text-white text-4xl ${selectImagePopup4}`}></i>
      
       </div>



       <div className=" h-[190px]   rounded-lg overflow-hidden relative  flex items-center justify-center"  onClick={()=>{
          if(selectImagePopup5 === "hidden"){
            setselectImagePopup5("flex");
          }
      
          else{
            setselectImagePopup5("hidden");
      
          }
        }} >
           <img src="/images/image5.svg" alt="post" className='w-full h-full object-cover position-center absolute top-0 left-0 ' />

           <div className={`w-full h-full absolute top-0 left-0 z-5  blackOverlayPorfile ${selectImagePopup5}`}></div>
   <i className={`far fa-check z-50 text-white text-4xl ${selectImagePopup5}`}></i>
      
       </div>



       <div className=" h-[190px]   rounded-lg overflow-hidden relative  flex items-center justify-center"  onClick={()=>{
          if(selectImagePopup6 === "hidden"){
            setselectImagePopup6("flex");
          }
      
          else{
            setselectImagePopup6("hidden");
      
          }
        }}>
           <img src="/images/image6.svg" alt="post" className='w-full h-full object-cover position-center absolute top-0 left-0 ' />

           <div className={`w-full h-full absolute top-0 left-0 z-5  blackOverlayPorfile ${selectImagePopup6}`}></div>
   <i className={`far fa-check z-50 text-white text-4xl ${selectImagePopup6}`}></i>
      
       </div>



       <div className=" h-[190px]   rounded-lg overflow-hidden relative  flex items-center justify-center"  onClick={()=>{
          if(selectImagePopup7 === "hidden"){
            setselectImagePopup7("flex");
          }
      
          else{
            setselectImagePopup7("hidden");
      
          }
        }}>
           <img src="/images/image7.svg" alt="post" className='w-full h-full object-cover position-center absolute top-0 left-0 ' />

           <div className={`w-full h-full absolute top-0 left-0 z-5  blackOverlayPorfile ${selectImagePopup7}`}></div>
   <i className={`far fa-check z-50 text-white text-4xl ${selectImagePopup7}`}></i>
      
       </div>



       <div className=" h-[190px]   rounded-lg overflow-hidden relative  flex items-center justify-center"  onClick={()=>{
          if(selectImagePopup8 === "hidden"){
            setselectImagePopup8("flex");
          }
      
          else{
            setselectImagePopup8("hidden");
      
          }
        }}>
           <img src="/images/image8.svg" alt="post" className='w-full h-full object-cover position-center absolute top-0 left-0 ' />

           <div className={`w-full h-full absolute top-0 left-0 z-5  blackOverlayPorfile ${selectImagePopup8}`}></div>
   <i className={`far fa-check z-50 text-white text-4xl ${selectImagePopup8}`}></i>
      
       </div>


       <div className=" relative rounded-lg overflow-hidden flex items-center justify-center"  onClick={()=>{
          if(selectImagePopup9 === "hidden"){
            setselectImagePopup9("flex");
          }
      
          else{
            setselectImagePopup9("hidden");
      
          }
        }} >
           <img src="/images/image9.svg" alt="post" className='w-full absolute top-0 left-0 h-full object-cover position-center ' />

           <div className={`w-full h-full absolute top-0 left-0 z-5  blackOverlayPorfile ${selectImagePopup9}`}></div>
   <i className={`far fa-check z-50 text-white text-4xl ${selectImagePopup9}`}></i>
      
       </div>

       {file && (
          <div className="  relative rounded-lg  flex items-center justify-center "  onClick={()=>{
            if(selectImagePopup10 === "hidden"){
              setselectImagePopup10("flex");
            }
        
            else{
              setselectImagePopup10("hidden");
        
            }
          }}>
            <img
              src={URL.createObjectURL(file)}
              className="w-full h-full object-cover position-center absolute top-0 left-0  rounded-lg "
              alt="Thumb"
            />

            <div className={`w-full h-full absolute top-0 left-0 z-5  blackOverlayPorfile ${selectImagePopup10}`}></div>
   <i className={`far fa-check z-50 text-white text-4xl ${selectImagePopup10}`}></i>
      
          
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
          <label className="sc-bdvvtL iciELI flex items-center justify-center rounded-sm  border-dashed border-2 border-gray-400 " htmlFor="file"><input type="file"  className="hidden" accept=".jpeg,.png,.gif" name="file" /><div className="sc-dkPtRN ebdQkY flex items-center justify-center  mx-auto"><span className="mx-auto"><span className="font-bold text-[21px] opacity-70 mr-[3px]">Upload</span> <span className="text-[18px] opacity-80">or</span> <span className="font-bold text-[21px]  opacity-70 mx-[3px]">Drag and Drop</span> <span className="text-[18px] opacity-80">works from computer</span></span></div></label>
        }
       
      />

   </div>

   <div className="px-[40px] flex items-center  font-bold text-white text-lg next-link justify-start mb-20 mt-20">
      <Link href="/complete-post">Next</Link>
   </div>
 

    
    </>
  )
}

export default Main