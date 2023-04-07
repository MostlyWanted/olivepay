import React from 'react'

// img
let flex3 = require('./flex-3-top-Sale-Screen.png');

function home() {
  return (


<div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-10 lg:flex-row md:px-8 lg:max-w-screen-xl sm: mb-20 ">
<div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
  <div className="max-w-xl mb-6">
    <div>
      <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
        get to know
      </p>
    </div>
    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-lime-900 sm:text-6xl sm:leading-none">
      About Us
      {/* <br className="hidden md:block" />
      {' '}
      <span className="inline-block text-deep-purple-accent-400">

      </span> */}
    </h2>
    <p className="text-base text-lime-600 md:text-lg">
    At Olive Pay, we are committed to being your comprehensive all-inclusive payment processing partner, committed to enabling the expansion and prosperity of your business while minimizing unnecessary complexities. Our pricing plans and packages are easy to comprehend, with no concealed fees or charges. We strive to make the transition to Olive Pay smooth and efficient, with a team of specialists ready to assist you every step of the way.


    </p>
  </div>
  <div className="flex items-center">
    <a
      href="/"
      className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
    >
      Get started
    </a>
    <a
      href="/"
      aria-label=""
      className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
    >
      Learn more
    </a>
  </div>
</div>
<div>
  <img
    src={flex3}
    className=" object-cover object-top w-full mx-auto lg:h-auto xl:mr-24 md:max-w-xs"
    alt=""
  />
</div>
</div>

  )
}

export default home
