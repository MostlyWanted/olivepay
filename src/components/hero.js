import React from "react";
import 'animate.css';
let Phonepay = './phonepay2.jpg';

function hero () {
    return (
        <div>


        <body class="p-10 mt-8">
    <div class="relative">
    <img className="animate__animated animate__backInDown rounded-lg mx-auto mb-5 justify-center md:w-1/2" src={require('./phonepay2.png')} />
        <h1 class=" animate__animated animate__fadeInRightBig drop-shadow-lg  absolute text-5xl text-white font-bold top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-1/2">
            That was Easy!</h1>
        {/* <h2 class="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2">Bottom Center</h2>
        <h3 class="absolute text-2xl text-blue-300 top-5 left-5">Top Left</h3>
        <h3 class="absolute text-2xl text-green-300 bottom-5 right-5">Bottom Right</h3> */}
    </div>
</body>





        </div>
    )
    
}
export default hero
 
