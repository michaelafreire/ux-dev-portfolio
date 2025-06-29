import React from 'react'

function Phase(props) {
  return (
    <div className="overflow-hidden rounded-md w-full h-20 sm:h-40 my-1 mx-1 drop-shadow-md"
    onMouseEnter={props.onHover}
    onMouseLeave={props.onLeave}>

      <div className="bg-cover w-full h-full transform transition ease-out duration-500 hover:scale-110 hover:opacity-100 opacity-95 flex items-start justify-end"
        style={{backgroundImage: `url(${props.image})`,
        backgroundPosition: 'center'}}
        >
        <p className="text-xl font-main font-bold text-white pr-4 pt-2">{props.title}</p>
      </div>
    </div>
  )
}

export default Phase
