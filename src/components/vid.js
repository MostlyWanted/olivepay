import React from "react";
import 'animate.css';
import video from './video.mp4'
let Phonepay = './phonepay1.jpg';

function hero () {
    return (
<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="grid gap-5 row-gap-8 lg:grid-cols-2">
    <div class="flex flex-col justify-center">
      <div class="max-w-xl mb-6">
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight  text-lime-900 sm:text-4xl sm:leading-none">
        Discover the Next-Generation  <br class="hidden md:block" />
        Point-of-Sale System:
          <span class="relative px-1">
            <div class="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"></div>
            <span class="relative inline-block text-deep-purple-accent-400">Clover</span>
          </span>
        </h2>
        <p class=" text-lime-600 md:text-lg">
        Whether you're a small business owner or managing a large enterprise, Clover Terminals offer a reliable and scalable solution for your payment processing needs. With their intuitive interface and powerful capabilities, they can help streamline your operations and enhance the customer experience.        </p>
      </div>
      {/* <div class="grid gap-5 row-gap-8 sm:grid-cols-2">
        <div class="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
          <div class="h-full p-5 border border-l-0 rounded-r">
            <h6 class="mb-2 text-lime-900 font-semibold leading-5">
              I'll be sure to note that in my log
            </h6>
            <p class="text-sm  text-lime-600">
              Lookout flogging bilge rat main sheet bilge water nipper fluke to go on account heave down.
            </p>
          </div>
        </div>
        <div class="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
          <div class="h-full p-5 border border-l-0 rounded-r">
            <h6 class="mb-2 text-lime-900 font-semibold leading-5">
              A business big enough that it could be listed
            </h6>
            <p class="text-sm  text-lime-600">
              Those options are already baked in with this model shoot me an email clear.
            </p>
          </div>
        </div>
      </div> */}
    </div>
    <div>
    <video class="justify-center rounded-lg" width="1000" height="666" controls >
      <source src={video} type="video/mp4"/>
     </video>    </div>
  </div>
</div>



     







    // <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    //   <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
      



    //     {/* <a
    //       href="/"
    //       aria-label="Play Video"
    //       className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
    //     >
    //       <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
    //         <svg
    //           className="w-10  text-lime-900"
    //           fill="currentColor"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
    //         </svg>
    //       </div>
    //     </a> */}
    //   </div>
    //   <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
    //     <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight  text-lime-900 sm:text-4xl sm:leading-none">
    //       The quick, brown fox jumps over a very sad and{' '}
    //       <span className="inline-block text-deep-purple-accent-400">
    //         lazy dog
    //       </span>
    //     </h2>
    //     <p className="mb-5  text-lime-900  text-lime-900 md:text-lg">
    //       Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    //       accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
    //     </p>
    //     <div className="flex items-center md:justify-center">
    //       <a
    //         href="/"
    //         className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide  text-lime-900 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
    //       >
    //         Get started
    //       </a>
    //       <a
    //         href="/"
    //         aria-label=""
    //         className="inline-flex items-center font-semibold  text-lime-900 transition-colors duration-200 hover:text-deep-purple-accent-700"
    //       >
    //         Learn more
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

    

export default hero
 
