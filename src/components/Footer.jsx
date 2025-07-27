import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="text-xs text-center text-gray-400 mt-10">
            © {new Date().getFullYear()} Furn. Design by Kretya Studio · Coded by You.
        </footer>
    </div>
  )
}

export default Footer