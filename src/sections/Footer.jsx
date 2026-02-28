import React from 'react'

const Footer = () => {
  return (
    <footer className='c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-5'>
<div className=' flex gap-3 '>
<div className="social-icon w-12 h-12 rounded-full bg-gray-800 flex justify-center items-center">
  <a
    href="https://github.com/ravneet27062004"
    className="w-full h-full flex justify-center items-center"
  >
    <img
      src="/assets/github.svg"
      alt="github"
      className="w-5 h-5"
    />
  </a>
</div>
<div className="social-icon w-12 h-12 rounded-full bg-gray-800 flex justify-center items-center">
  <a 
    href="https://www.linkedin.com/in/ravneet-kaur-679085295/" 
    target="_blank"
    rel="noopener noreferrer"
    className="w-full h-full flex justify-center items-center"
  >
    <img 
      src="/assets/link.png"  
      alt="linkedin"
      className="w-5 h-5 object-contain"
    />
  </a>
</div>
<div className="social-icon items-center -12 h-12 rounded-full bg-gray-800 flex justify-center">
 <a href="https://www.instagram.com/_rkaur_/">
    <img src="/assets/instagram.svg"  alt='linkedin' className='w-1/2 h-1/2 mx-auto '/>
    </a>
</div>
 
</div>
    </footer>
  )
}

export default Footer
