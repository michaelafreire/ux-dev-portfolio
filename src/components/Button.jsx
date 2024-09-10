import React from 'react'
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <div className="pr-3">
      <a
      href={props.website}
      className={props.className}
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
