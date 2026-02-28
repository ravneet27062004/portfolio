import React from 'react'
import { useState } from 'react';
import ravneetImg from '../assets/ravneet.png'
import Globe from 'react-globe.gl'
import Button from '../components/Button'
const About = () => { 
     const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
    navigator.clipboard.writeText(' ravn2706@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
   <section className='c-space my-20' id='about'>
<div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
<div className='col-span-1 xl:row-span-3'>
<div className='grid-container'>
<img src={ravneetImg} alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain '/>
<div>
    <p className='grid-headtext'>Hi , I'm Ravneet Kaur</p>
    <p className='grid-subtext'>I enjoy building thoughtful digital experiences that are fast, user-friendly, and impactful.</p>
</div>
</div>
</div>
<div className='col-span-1 xl:row-span-3'>
<div className="grid-container">
    <img src="/assets/grid2.png" alt='grid-2' className='w-full sm:h-[276px] h-fit object-contain '/>
    <div>
        <p className='grid-headtext '> Tech Stack</p>
        <p className='grid-subtext'>I work with React, Node.js, Express, MongoDB, THREE.js, GSAP and more.</p>
    </div>
</div>
</div>
<div className='col-span-1 xl:row-span-4'>
<div className="grid-container">
    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center ">
        <Globe height={326} width={326}
        backgroundColor='rgba(0,0,0,0)'  backgroundImageOpacity={0.5}
        showAtmosphere 
        showGraticules
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              labelsData={[
  {
    lat: 28.6139,  // Delhi latitude
    lng: 77.2090,  // Delhi longitude
    text: "I'm here",
    color: 'white',
    size: 100
  }
]}
              />
    </div>
    <div>
       <p className='grid-headtext'>I’m very flexible with time zone communications & locations </p> 
       <p className='grid-subtext'>I'm based in Delhi, India and open to remote work worldwide.</p>
        <a href="#contact"><Button name="Contact Me" isBeam containerClass="w-full mt-10"  /></a>  
    </div>
</div>
</div>
<div className='xl:col-span-2  xl:row-span-3 '>
    <div className='grid-container'>
<img src="/assets/grid3.png" alt='grid-3' className='w-full sm:h-[276px] h-fit object-contain   '/>
<div>
    <p className='grid-headtext'>My Passion for coding</p>
    <p className='grid-subtext'>I love solving problems and building things that make a difference.</p>
</div>
    </div>

</div>
<div className='xl:col-span-1 xl:row-span-2' >
<div className="grid-container">
    <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px]  object-contain'/>
    <div className='space-y-2'>
 <p className="grid-subtext text-center">Email</p>
 <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"  />
                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">ravn2706@gmail.com</p>
              </div>
    </div>
</div>
</div>
</div>
   </section>
  )
}

export default About
