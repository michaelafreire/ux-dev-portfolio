import React from 'react'
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <div>
      <a
      href={props.website}
      className="rounded-md px-3 py-2 text-sm font-main hover:bg-pink-light text-pink bg-white sm:text-xl transition duration-500 ease-out"
      target="_blank"
      rel="noopener noreferrer"
      >
        {props.text}
      </a>
    </div>
  )
}

Button.propTypes = {
  website: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button
