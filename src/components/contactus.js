import React, { useRef, useState, useCallback} from 'react';
// import emailjs from '@emailjs/browser';
// import './login.css'
// import ReCAPTCHA from 'react-google-recaptcha';



const ContactUs = () => {
 
    const [disableSubmit,setDisableSubmit] = useState(true);
    
    const form = useRef();
    let btnRef = useRef();

const onBtnClick = e => {
  if(btnRef.current){
    
  }
}

 
    const onChange = () =>{

    }

    
  

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   btnRef.current.setAttribute("disabled", "disabled");
  //   alert('Message sent! Thank You');

  //   emailjs.sendForm('service_mku180k', 'template_avl0xno', form.current, 'izMaQ8WmJCA4FjCv2')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     e.target.reset()
  // };

  return (

    // <section class="bg-white ">
    <section class="bg-white mt-20 mb-20">
 <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-center text-lime-800 ">Start The Conversation!</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500" >Our Most trusted Management team at your service!</p>
      {/* <form ref={form} onSubmit={sendEmail}> */}
      <form>
          <div classname="form-control">
              <label for="email" class="block mt-2 text-sm font-medium text-lime-800 ">Your email</label>
              <input type="email" name="email" class="form-control shadow-sm bg-gray-50 border border-gray-300 text-lime-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="ex: johndoe@gmail.com" required></input>
          </div>
          <div classname="form-control">
              <label for="subject" class="block mt-2 text-sm font-medium text-lime-800 ">Full Name</label>
              <input type="text" name="user_name" class="form-control block p-3 w-full text-sm text-lime-800 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="ex: John Doe" required></input>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mt-2 text-sm font-medium text-lime-800 ">What would you like us to know?</label>
              <textarea name="message" id="message" rows="6" class="form-control block p-2.5 w-full text-sm text-lime-800 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you"></textarea>
          </div>
          <div class="grid grid-cols-2 gap-0 justify-center">

<div class="inline-flex items-CENTER m-2 "><input type="checkbox" id="SEO" name="SEO" value="SEO" class="checkbox checkbox-sm sm:mt-0.5"></input>
<label class="pl-2 text-xs pt-0.5 sm:text-base pt-0 " for="SEO"> POS Systems </label></div>

<div class="inline-flex items-CENTER m-2"><input type="checkbox" name="Web_Developement" value="Web Development" class="checkbox checkbox-sm sm:mt-0.5 "></input>
<label class="pl-2  text-xs  sm:text-base" for="Web Dev"> Track Payments</label></div>

<div class="inline-flex items-CENTER m-2"><input type="checkbox" id="vehicle3" name="Social_Media_Marketing" value="Social Media Marketing" class="checkbox checkbox-sm sm:mt-0.5 "></input>
<label class="pl-2 text-xs whitespace-nowrap sm:text-base p-0 " for="Social Media Marketing"> Manage Employees </label></div>

<div class="inline-flex  items-CENTER ml-2"><input type="checkbox" id="vehicle1" name="Content_Creation" value="Content Creation" class="checkbox checkbox-sm mt-2 sm:mt-2"></input>
<label class="pl-2  pt-2.5 text-xs sm:text-base pt-0.5" for="Content Creation"> Management </label></div>

<div class="inline-flex items-CENTER m-2"><input type="checkbox" id="vehicle2" name="Graphic_Design" value="Graphic Design" class="checkbox checkbox-sm"></input>
<label class="pl-2 text-xs  sm:text-base pt-0  " for="Graphic Design"> Installations </label></div>

<div class="inline-flex items-CENTER m-2"><input type="checkbox" id="vehicle3" name="App_Development" value="App Development" class="checkbox checkbox-sm"></input>
<label class="pl-2 text-xs mt-0.5 sm:text-base pt-0 mt-0" for="App Development"> Quote</label></div>

</div>

<div class= "flex justify-center mt-5">
{/* <ReCAPTCHA
    sitekey="6LfL7O4jAAAAACkUW8iHizpsVZ71YkG1liKuJzX8"
    onChange={useCallback(() => setDisableSubmit(false))}
    /> */}

</div>
<h1>Please complete the reCAPTCHA verification before submitting</h1>
          <button  type="submit" value="Send" disabled={disableSubmit} ref={btnRef}  class="mt-10 py-3 px-5 text-sm font-medium text-center text-lime-50 rounded-lg bg-lime-600 sm:w-fit hover:bg-primary-400 focus:ring-4 focus:outline-none focus:ring-black-300">Send message</button>

      </form>

      <h1 className='mt-10'>Speak with a customer service Rep.</h1>
     
      <button class="mt-5 py-3 px-5 text-sm font-medium text-center text-lime-50 rounded-lg bg-lime-600 sm:w-fit hover:bg-primary-400 focus:ring-4 focus:outline-none focus:ring-black-300">
      <a href="tel:2265267567" class="text-blue-100 inline-block align-middle" >
     
      <span className='text-lime-100'>Call Us &nbsp;&nbsp;  </span>
      
      <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block align-middle w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>
 </a>
 </button>
 
      </div>
   
      
    </section>
  );
};
export default ContactUs