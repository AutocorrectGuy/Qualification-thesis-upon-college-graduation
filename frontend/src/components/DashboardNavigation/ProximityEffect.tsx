import React, { useState, useRef, useEffect } from 'react'
import eyeImg from '../../assets/img/eye2.png' // 32px width 32px height
import { useGlobalState } from '../../contexts/GlobalStateProvider'

const ProximityEffect: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null)
  const { isMobile, navVisible } = useGlobalState()
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imgRef.current || isMobile) return
      const rect = imgRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI)
      setRotation(angle)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  const ProximityEye = ({ isLeftEye }: { isLeftEye?: boolean }) => {
    const eyeName = isLeftEye ? 'left' : 'right'
    const styleName = isMobile ? 'right' : 'marginLeft'
    // distance between eyes
    const stylesForPC = isLeftEye ? 79 : 42
    const stylesForMobile = isLeftEye ? 165 : 129  
    const posX = { [styleName]: isMobile ? stylesForMobile : stylesForPC }

    return (
      <img
        src={eyeImg}
        ref={imgRef}
        alt={`proximity-eye-${eyeName}`}
        className={`select-none fixed w-[18px] h-[18px] z-50 ${isMobile ? 'rendering-pixelated' : ''}`}
        style={{
          [styleName]: `${posX[styleName]}px`,
          bottom: `120px`,
          transform: `rotate(${rotation + 45}deg)`,
        }}
      />
    )
  }

  return (
    <>
      {navVisible ? <>
        <ProximityEye isLeftEye />
        <ProximityEye />
      </> : null}
    </>
  )
}

export default ProximityEffect
