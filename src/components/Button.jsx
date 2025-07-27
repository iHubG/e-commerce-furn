import React from 'react'

const Button = ({ text, onClick, className='' }) => {
  return (
    <div>
        <button onClick={onClick} className={`px-4 py-2 ${className}`}>{text}</button>
    </div>
  )
}

export default Button