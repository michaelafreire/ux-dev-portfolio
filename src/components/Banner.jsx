import React from 'react'

function Banner() {
  return (
    <div className="justify-items-stretch flex overflow-hidden w-full h-40 sm:h-56" id="banner">
      <div
        className="bg-cover flex-1 flex justify-left items-left"
        style={{ backgroundImage: 'url(../ux-dev-portfolio/ITS.png)',
        backgroundPosition: 'center'
        }}
      >
        {/* <p className="font-main text-black pt-4 pl-8 sm:pl-10 text-m sm:text-xl">I've worked with:</p> */}
      </div>
      <div
        className="bg-cover flex-1 flex justify-center items-center font-main font-bold text-lg sm:text-5xl text-orange"
        style={{ backgroundImage: 'url(../ux-dev-portfolio/BS.png)',
        backgroundPosition: 'center'
        }}
      >
        {/* 30 */}
      </div>
      <div
        className="bg-cover flex-1 flex justify-center items-center font-main font-bold text-lg sm:text-5xl text-orange"
        style={{ backgroundImage: 'url(../ux-dev-portfolio/DFE.png)',
        backgroundPosition: 'center'
        }}
      >
        {/* 50 */}
      </div>
      <div
        className="bg-cover flex-1 flex justify-center items-center font-main font-bold text-lg sm:text-5xl text-orange"
        style={{ backgroundImage: 'url(../ux-dev-portfolio/PPU.png)',
        backgroundPosition: 'center'
        }}
      >
        {/* 50 */}
      </div>
      <div
        className="bg-cover flex-1 flex justify-center items-center font-main font-bold text-lg sm:text-5xl text-orange"
        style={{ backgroundImage: 'url(../ux-dev-portfolio/UOS.png)',
        backgroundPosition: 'center'
        }}
      >
        {/* 50 */}
      </div>
    </div>
  )
}

export default Banner
