import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { PerspectiveCamera } from '@react-three/drei'

import { useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'

import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'   
const Hero = () => {
   
    const isSmallScreen=useMediaQuery({maxWidth:440})
    const isMobile=useMediaQuery({maxWidth:768})
    const isTablet=useMediaQuery({maxWidth:1024 , minWidth:769})

   const sizes=calculateSizes(isSmallScreen,isMobile,isTablet);

  return (
    <section className='min-h-screen w-full flex flex-col relative' id='home' >
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-2  c-space gap-2'>
            <p className=' text-xl font-medium text-white text-center font-generalsans'>Hi , I am Ravneet Kaur <span className='waving-hand'>👋</span></p>
            <p className='hero-tag text-gray_gradient text-center text-4xl'>Code. Design. Deploy.</p>

        </div>
        <div className='w-full h-full absolute inset-0 gap-4'>
            {/* <Leva /> */}
<Canvas className='w-full h-full '>
    <Suspense fallback={<CanvasLoader />}>

    
<PerspectiveCamera makeDefault position={[0, 0, 20]} />

 <HeroCamera isMobile={isMobile}>
    <HackerRoom 

position={sizes.deskPosition} 
 rotation={[0,-Math.PI,0]}
 scale={sizes.deskScale}/>
 </HeroCamera>
<group>
   
</group>
<ambientLight intensity={1} />
<directionalLight position={[10, 10, 5]} intensity={0.5} />
</Suspense>
</Canvas>
        </div>
        <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space '>
<a href="#about" className='w-fit'>
    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96 "/>
</a>
        </div>
    </section>
  )
}

export default Hero
