import React from 'react'

function Banner() {
  return (
    <div className="justify-items-stretch flex overflow-hidden w-full h-40 sm:h-56" id="banner">
      <div
        className="bg-cover flex-1 flex justify-center items-center font-main font-bold text-lg sm:text-5xl text-orange"
        style={{ backgroundImage: 'url(../ux-dev-portfolio/ME.png)',
        backgroundPosition: 'center'
        }}
      >
        50
      </div>
      <div
        className="bg-cover flex-1 flex justify-center items-center font-main font-bold text-lg sm:text-5xl text-orange"
        style={{ backgroundImage: 'url(../ux-dev-portfolio/ME.png)',
        backgroundPosition: 'center'
        }}
      >
        30
      </div>
      <div
        className="bg-cover flex-1 flex justify-center items-center font-main font-bold text-lg sm:text-5xl text-orange"
        style={{ backgroundImage: 'url(../ux-dev-portfolio/ME.png)',
        backgroundPosition: 'center'
        }}
      >
        50
      </div>
      <div
        className="bg-cover flex-1 flex justify-center items-center font-main font-bold text-lg sm:text-5xl text-orange"
        style={{ backgroundImage: 'url(../ux-dev-portfolio/ME.png)',
        backgroundPosition: 'center'
        }}
      >
        50
      </div>
    </div>
  )
}

export default Banner
