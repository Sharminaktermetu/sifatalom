import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className=" footer footer-horizontal footer-center bg-[#1E1E1E] text-primary-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
  <h3 className='text-lg font-bold'>STAY IN TOUCH</h3 >
    <div className="grid grid-flow-col gap-4">
   
   {/* icons */}
    </div>
  </nav>
  <aside>
    <p>  © 2025 - 2028  All Right Reserved By SIFAT</p>
<p className='font-bold'>DEVELOPED BY : SIFAT</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer
