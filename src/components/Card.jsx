import React from 'react';
import PropTypes from 'prop-types'

function Card(props) {

  return (
    <div className={`rounded-md py-8 pr-8`}>
      <h3 className={`font-main ${props.text} text-m font-bold sm:text-xl`}>{props.title}</h3>
      <div className={`font-main ${props.text} max-w-lg w-full sm:max-w-xl`}>{props.description}</div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  text: PropTypes.string.isRequired,
};

export default Card
