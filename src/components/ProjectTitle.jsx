import React from 'react'

function ProjectTitle(props) {
  return (
    <div className="py-10 sm:py-20 flex justify-start items-center">
      <p className="font-libre text-red text-xl sm:text-3xl font-bold">{props.title}</p>
    </div>
  )
}

export default ProjectTitle
