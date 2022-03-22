import React,{useState} from 'react'
import { FileUploader } from "react-drag-drop-files";
import Link from 'next/link';
import Head from 'next/head'


const fileTypes = ["JPEG", "PNG", "GIF", "SVG"];
const Popup = () => {
    const [profilePicture, setprofilePicture] = useState('');
    const [profilePictureURL, setprofilePictureURL] = useState('');
 
 
    
    const [actualProfileCont1, setactualProfileCont1] = useState('hidden');
    const [actualProfileCont2, setactualProfileCont2] = useState('hidden');
 

    const [replace, setreplace] = useState(null);

    const [ticks, setticks] = useState("0");

    const [file, setFile] = useState(null);

    const handleChange = (file) => {
      setFile(file);
      setactualProfileCont2('')
      setticks("9")

    };


    const [replaceImageVisiblity, setreplaceImageVisiblity] = useState('hidden')


    let replaceImage = (e) =>{

        if (e.target.files && e.target.files.length > 0) {
            setreplace(e.target.files[0]);
        
          setprofilePicture("hidden");
          setreplaceImageVisiblity('block')
          
       
        
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


<Head>
        <title>Pkazo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>

<link rel="preconnect" href="https://fonts.gstatic.com"/>

<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"></link>
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.11.1/css/all.css"></link>
      </Head>

    
<div

className={`modalParent w-screen fixed top-1/2 transition left-1/2  h-screen`}></div>

<div className={`max-w-[1500px] px-10 py-10 grid gap-7  modal rounded-lg fixed transition top-1/2 left-1/2 bg-white z-10 max-h-[800px] h-screen `}>
  
<div className="">
  <div className="rounded-full relative mx-auto h-[200px] w-[200px] overflow-hidden flex items-center justify-center flex-col gap-5">
  
   <img src="/images/image1.svg" className={`w-full h-full absolute top-0 left-0 object-cover position-center ${profilePicture}`}/>
   {replace && (
        
       
            <img
              src={URL.createObjectURL(replace)}
              className={`w-full h-full absolute top-0 left-0 object-cover position-center ${replaceImageVisiblity}`}            
            />

        )}
   <div className="w-full h-full absolute top-0 left-0 z-5 blackOverlayPorfile"></div>

   <label htmlFor="replaceImage" className="w-32 py-[5px] rounded cursor-pointer flex items-center justify-center text-white font-bold z-10 border-2 border-white transition hover:bg-[white] hover:opacity-80 hover:text-[#000000b9]">Replace</label>
   <input type="file" className="hidden" accept=".jpeg,.png,.gif,.svg" onChange={replaceImage} id="replaceImage" />

   <button
   onClick={()=> {

    setprofilePicture('hidden')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')
   }}
   className="w-32 py-[5px] rounded text-white font-bold z-10 border-2 transition hover:bg-[white] hover:opacity-80 hover:text-[#000000b9]">Delete</button>

  </div>

  <div className="mt-10">
    <input type="text" className="w-full py-2 rounded outline-none px-3 border border-gray-300 mb-5" placeholder="Title"/>
    <textarea className="w-full h-[150px] py-2 rounded outline-none px-3 border border-gray-300 resize-none" placeholder="Write a description..."></textarea>
  </div>
</div>





<div className="h-full ">
  <div className="opacity-80 font-bold mb-4 text-[19px]">Select the pieces that you would like in this portfolio</div>
  <div className="grid  gap-5 grid-cols-5 mb-10">

  <label
  onClick={() => 
    {
    
    setprofilePicture('flex')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')

    if(selectImagePopup1 === "hidden"){
      setselectImagePopup1("flex");
    }

    else{
      setselectImagePopup1("hidden");

    }

    }
  }
  className="h-[120px] labelPopup rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
           <img src="/images/image1.svg" alt="post" className='w-full  h-full absolute top-0 left-0 object-cover position-center' />
   <div className={`w-full h-full absolute top-0 left-0 z-5 blackOverlayPorfile ${selectImagePopup1}`}></div>
   <i className={`far fa-check z-10 text-white text-4xl  ${selectImagePopup1}`}></i>
   </label>


   <label
     
   onClick={() => {
     
     setprofilePicture('flex')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')

    if(selectImagePopup2 === "hidden"){
      setselectImagePopup2("flex");
    }

    else{
      setselectImagePopup2("hidden");

    }
  
  }}
   className="h-[120px] labelPopup rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
           <img src="/images/image2.svg" alt="post" className='w-full h-full absolute top-0 left-0 object-cover position-center' />
   <div className={`w-full h-full absolute top-0 left-0 z-5 blackOverlayPorfile ${selectImagePopup2}`}></div>
   <i className={`far fa-check z-10 text-white text-4xl  ${selectImagePopup2}`}></i>
   </label>


   <label
   onClick={() => {
     
    
    setprofilePicture('flex')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')
    if(selectImagePopup3 === "hidden"){
      setselectImagePopup3("flex");
    }

    else{
      setselectImagePopup3("hidden");

    }
  
  }}
   className="h-[120px] labelPopup rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
           <img src="/images/image3.svg" alt="post" className='w-full h-full absolute top-0 left-0 object-cover position-center' />
   <div className={`w-full h-full absolute top-0 left-0 z-5  blackOverlayPorfile ${selectImagePopup3}`}></div>
   <i className={`far fa-check z-10 text-white text-4xl ${selectImagePopup3}`}></i>
   </label>




   <label 
   onClick={() => {
     
     setprofilePicture('flex')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')

    if(selectImagePopup4 === "hidden"){
      setselectImagePopup4("flex");
    }

    else{
      setselectImagePopup4("hidden");

    }
    }}
   className="h-[120px] labelPopup rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
           <img src="/images/image4.svg" alt="post" className='w-full h-full absolute top-0 left-0 object-cover position-center' />
           <div className={`w-full h-full absolute top-0 left-0 z-5  blackOverlayPorfile ${selectImagePopup4}`}></div>
   <i className={`far fa-check z-10 text-white text-4xl ${selectImagePopup4}`}></i>

   </label>




   <label 
   onClick={() => {
     
    
    setprofilePicture('flex')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')
  
    if(selectImagePopup5 === "hidden"){
      setselectImagePopup5("flex");
    }

    else{
      setselectImagePopup5("hidden");

    }

  }}
   className="h-[120px] labelPopup rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
           <img src="/images/image5.svg" alt="post" className='w-full h-full absolute top-0 left-0 object-cover position-center' />
   
           <div className={`w-full h-full absolute top-0 left-0 z-5  blackOverlayPorfile ${selectImagePopup5}`}></div>
   <i className={`far fa-check z-10 text-white text-4xl ${selectImagePopup5}`}></i>
   </label>







   <label 
   onClick={() => {
     
    setprofilePicture('flex')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')

    if(selectImagePopup6 === "hidden"){
      setselectImagePopup6("flex");
    }

    else{
      setselectImagePopup6("hidden");

    }
  
  }}
   className="h-[120px] labelPopup rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
           <img src="/images/image6.svg" alt="post" className='w-full h-full absolute top-0 left-0 object-cover position-center' />
           <div className={`w-full h-full absolute top-0 left-0 z-5   blackOverlayPorfile ${selectImagePopup6}`}></div>
   <i className={`far fa-check z-10 text-white text-4xl ${selectImagePopup6}`}></i>

   </label>





   <label 
   onClick={() => {
     
    setticks("6")
    
    setprofilePicture('flex')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')


    if(selectImagePopup7 === "hidden"){
      setselectImagePopup7("flex");
    }

    else{
      setselectImagePopup7("hidden");

    }
  
  }}
   className="h-[120px] labelPopup rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
           <img src="/images/image7.svg" alt="post" className='w-full h-full absolute top-0 left-0 object-cover position-center' />
           <div className={`w-full h-full absolute top-0 left-0 z-5  blackOverlayPorfile ${selectImagePopup7}`}></div>
   <i className={`far fa-check z-10 text-white text-4xl ${selectImagePopup7}`}></i>

   </label>








   <label
   onClick={() => {
     setticks("7")
     
     setprofilePicture('flex')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')

    if(selectImagePopup8 === "hidden"){
      setselectImagePopup8("flex");
    }

    else{
      setselectImagePopup8("hidden");

    }

  
  }}
   className="h-[120px] labelPopup rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
           <img src="/images/image8.svg" alt="post" className='w-full h-full absolute top-0 left-0 object-cover position-center' />
           <div className={`w-full h-full absolute top-0 left-0 z-5  blackOverlayPorfile ${selectImagePopup8}`}></div>
   <i className={`far fa-check z-10 text-white text-4xl ${selectImagePopup8}`}></i>

   </label>







   <label
   onClick={() => {
     setticks("8")
     
     setprofilePicture('flex')
    setactualProfileCont1('hidden')
    setactualProfileCont2('hidden')


    if(selectImagePopup9 === "hidden"){
      setselectImagePopup9("flex");
    }

    else{
      setselectImagePopup9("hidden");

    }

  
  }}
   className="h-[120px] labelPopup rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
           <img src="/images/image9.svg" alt="post" className='w-full h-full absolute top-0 left-0 object-cover position-center' />
   
<div className={`w-full h-full absolute top-0 left-0 z-5  blackOverlayPorfile ${selectImagePopup9}`}></div>
   <i className={`far fa-check z-10 text-white text-4xl ${selectImagePopup9}`}></i>
          
          
   </label>


   {file && (
          <label 
       
          onClick={()=>{
            if(selectImagePopup10 === "hidden"){
              setselectImagePopup10("flex");
            }
        
            else{
              setselectImagePopup10("hidden");
        
            }
          }}
          className="h-[120px] labelPopup rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center">
            <img
              src={URL.createObjectURL(file)}
              className="w-full h-full absolute top-0 left-0 object-cover position-center "            
            />

<div className={`w-full h-full absolute top-0 left-0 z-5  blackOverlayPorfile ${selectImagePopup10}`}></div>
   <i className={`far fa-check z-10 text-white text-4xl ${selectImagePopup10}`}></i>
          
          </label>
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
          <label className="sc-bdvvtL cursor-pointer rounded-sm iciELI flex items-center justify-center  border-dashed border-2 border-gray-400 " htmlFor="file"><input type="file" className="hidden" accept=".jpeg,.png,.gif" name="file" /><div className="sc-dkPtRN ebdQkY flex items-center justify-center  mx-auto"><span className="mx-auto"><span className="font-bold text-[21px]  opacity-70 mr-[3px]">Upload</span> <span className="text-[18px] opacity-80">or</span> <span className="font-bold text-[21px]  opacity-70 mx-[3px]">Drag and Drop</span> <span className="text-[18px] opacity-80">works from computer</span></span></div></label>
        }
       
      />

      </div>


     


      <i className="far fa-times absolute cursor-pointer top-[20px] right-[30px] text-3xl text-gray-300"></i>


      <div className="modalButtons flex items-center justify-end gap-5">
         <button 
         
         className="border-2 border-[#E24E4D] px-7 py-2 rounded-full font-bold text-[#E24E4D]">Cancel</button>
         <button className="bg-[#E24E4D] border-2 border-[#E24E4D] px-7 py-2 rounded-full font-bold text-white transition hover:bg-[#be4040] hover:border-[#be4040]">Save</button>

      </div>


</div>








</div>

    </>
  )
}

export default Popup