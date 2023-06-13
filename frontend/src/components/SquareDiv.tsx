// SquareDiv.tsx
import React, { useRef, useState, useEffect } from 'react'

interface SquareDivProps {
  className?: string
  children?: React.ReactNode
}

const SquareDiv: React.FC<SquareDivProps> = ({ className, children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState<number | undefined>()

  const updateHeight = () => {
    if (!containerRef.current) return
    const width = containerRef.current.offsetWidth
    setHeight(width)
  }

  useEffect(() => {
    if (!containerRef.current) return
    const resizeObserver = new ResizeObserver(updateHeight)
    resizeObserver.observe(containerRef.current)
    updateHeight()
    return () => resizeObserver.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className={`w-full ${className}`}
      style={{ height }}
    >
      {children}
    </div>
  )
}

export default SquareDiv
