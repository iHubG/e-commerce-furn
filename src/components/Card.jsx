import React from 'react'

const Card = ({ children, className='' }) => {
  return (
    <section className={`${className}`}>
        {children}
    </section>
  )
}

export default Card