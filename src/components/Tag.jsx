import React from 'react'

function Tag(prop) {
  if (!prop.tag) return null;

  return (
    <div className='inline-flex items-center justify-start bg-red-20 rounded-lg mt-2 mr-2 border-2 border-red'>
      <p className="sm:text-sm text-xs font-main text-red m-1 mx-2">{prop.tag}</p>
    </div>
  )
}

export default Tag
