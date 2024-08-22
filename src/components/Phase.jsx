import React from 'react'

function Phase(props) {
  return (
    <div className="overflow-hidden rounded-md w-full h-20 sm:h-40 my-1 mx-1"
    onMouseEnter={props.onHover}
    onMouseLeave={props.onLeave}>

      <div className="bg-cover w-full h-full transform transition ease-out duration-500 hover:scale-110 hover:opacity-100 opacity-75 flex items-center justify-center"
        style={{backgroundImage: `url(${props.image})`,
        backgroundPosition: 'center'}}
        >
        {/* <p className="text-m sm:text-xl font-main font-bold text-pink">{props.title}</p> */}
      </div>
    </div>
  )
}

export default Phase
