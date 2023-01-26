import React from 'react'

const Card1 = ({image, subTitle, height='300',roundedBottomLeft=false, roundedBottomRight=false, roundedTopLeft=false, roundedTopRight=false}) => {
  return (
    <div className={`w-full h-[${height}px] relative`}>
    <img
      className={`shadow1 h-full w-full absolute top-0 object-cover ${roundedTopLeft ? 'rounded-tl-[30px]' : ''} ${roundedTopRight ? 'rounded-tr-[30px]' : ''} ${roundedBottomLeft ? 'rounded-bl-[30px]' : ''} ${roundedBottomRight ? 'rounded-br-[30px]' : ''} z-0`}
      src={image}
    />
    <div className={`flex flex-col w-full sectionTitle text-white backdrop-blur-sm items-center justify-center h-1/3 bg-black/60 ${roundedTopLeft ? 'rounded-tl-[30px]' : ''} ${roundedTopRight ? 'rounded-tr-[30px]' : ''} ${roundedBottomLeft ? 'rounded-bl-[30px]' : ''} ${roundedBottomRight ? 'rounded-br-[30px]' : ''} 
    absolute bottom-0 z-10`}>

      {subTitle}
    </div>
    
  </div>
  )
}

export default Card1