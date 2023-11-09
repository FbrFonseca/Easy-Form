import React from 'react'
import Image from "next/image"

const Hero = () => {
  return (
    <div>
        <Image src="/images/background.jpg" 
        alt="Angles Fighting"
        class="object-fill"
        width={100}
        height={100}
        />
    </div>
  )
}

export default Hero