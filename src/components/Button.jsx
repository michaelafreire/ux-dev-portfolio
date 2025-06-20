import React from 'react'
import { Link } from 'react-router-dom';

function Button(props) {
  const { to, href, className, download, text } = props;

  // If there's a `to` prop, render React Router Link (internal navigation)
  if (to) {
    return (
      <div className="pr-3">
        <Link to={to} className={className}>
          {text}
        </Link>
      </div>
    );
  }

  // Otherwise, render a normal anchor tag (external link or download)
  return (
    <div className="pr-3">
      <a
        href={href}
        className={className}
        download={download}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </div>
  );
}

export default Button
