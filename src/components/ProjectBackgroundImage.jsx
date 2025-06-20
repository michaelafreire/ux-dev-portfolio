import React from 'react'

function ProjectBackgroundImage(props) {
  return (
    <div className="py-10 sm:py-20 relative w-full">
      <img
        src={props.image}
        className="w-full h-full object-contain"
      />
    </div>)
}

export default ProjectBackgroundImage
