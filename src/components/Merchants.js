import React from 'react'

function Merchants() {
  return (
   
        <div className="bg-white px-4 py-16 mx-auto mt-20 mb-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-lime-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                {/* <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-lime-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                    width="52"
                    height="24"
                  />
                </svg> */}
                <span className="relative"> Our</span>
              </span>{' '}
              Suite Of Solutions:
            </h2>
          </div>
          <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="2em"
      width="2em"

    >
      <path d="M2 3a1 1 0 00-1 1v8a1 1 0 001 1h5.5a.5.5 0 010 1H2a2 2 0 01-2-2V4a2 2 0 012-2h11a2 2 0 012 2v4a.5.5 0 01-1 0V4a1 1 0 00-1-1H2z" />
      <path d="M3.146 5.146a.5.5 0 01.708 0L5.177 6.47a.75.75 0 010 1.06L3.854 8.854a.5.5 0 11-.708-.708L4.293 7 3.146 5.854a.5.5 0 010-.708zM5.5 9a.5.5 0 01.5-.5h2a.5.5 0 010 1H6a.5.5 0 01-.5-.5zM16 12.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-4.854-1.354a.5.5 0 000 .708l.647.646-.647.646a.5.5 0 00.708.708l.646-.647.646.647a.5.5 0 00.708-.708l-.647-.646.647-.646a.5.5 0 00-.708-.708l-.646.647-.646-.647a.5.5 0 00-.708 0z" />
    </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5 text-lime-900">Brick - and - Mortar</h6>
                <p className="mb-3 text-sm text-lime-600 text-left">
                Our physical terminals are designed for maximum security, dependability and intuitive to operate
                </p>
              </div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
            <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="2em"
      width="2em"

    >
      <path d="M12.005 21.992v-3.877c4.104 0 7.288-4.068 5.714-8.388a5.81 5.81 0 00-3.457-3.446c-4.319-1.563-8.389 1.61-8.389 5.714H2.008c0-6.541 6.325-11.642 13.184-9.499 2.991.94 5.383 3.321 6.313 6.313 2.141 6.858-2.96 13.183-9.5 13.183z" />
      <path d="M12.017 18.139H8.152v-3.866h3.865zm-3.865 2.959H5.193v-2.959h2.959zm-2.959-2.959H2.711v-2.483h2.482v2.483z" />
    </svg>

                  
                </div>
                <h6 className="mb-2 font-semibold leading-5 text-lime-900">Remote Payments</h6>
                <p className="mb-3 text-sm text-lime-600 text-left">
                With our solution, a guarded payment terminal can be established in the presence of any device with internet access, allowing you to fulfill transactions wherever you are
                </p>
              </div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
            <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5 text-lime-900">Digital Storefront Integrations</h6>
                <p className="mb-3 text-sm text-lime-600 text-left">
                Effortlessly integrate your current web-based shop with Olive Pay &#40;integrated with Bambora payments&#41;
                </p>
              </div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
 
  )
}

export default Merchants