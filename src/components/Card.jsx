import React from 'react'

const Card = ({ children, className, style }) => {
  return (
    <section className={`${className}`} style={style}>
        {children}
    </section>
  )
}

export default Card