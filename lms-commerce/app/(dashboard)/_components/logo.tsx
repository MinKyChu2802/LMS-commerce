import React from 'react'
import Image from "next/image"

const Logo = () => {
  return (
    <Image
    height={130}
    width={30}
    src={"/logo.svg"}
    alt=''
    />
  )
}

export default Logo
