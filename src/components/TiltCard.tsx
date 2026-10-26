import React, { useRef, useState, useEffect } from 'react';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  maxTilt?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(34, 230, 255, 0.12)',
  maxTilt = 7,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState<string>('');
  const [glarePosition, setGlarePosition] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch-only or prefers reduced motion
    const touchQuery = window.matchMedia('(hover: none) and (pointer: coarse)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsTouchDevice(touchQuery.matches || motionQuery.matches);

    const handler = () => {
      setIsTouchDevice(touchQuery.matches || motionQuery.matches);
    };

    touchQuery.addEventListener?.('change', handler);
    motionQuery.addEventListener?.('change', handler);
    return () => {
      touchQuery.removeEventListener?.('change', handler);
      motionQuery.removeEventListener?.('change', handler);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(6px)`);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.8,
    });
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isTouchDevice ? undefined : transform,
        transition: 'transform 0.15s ease-out',
        transformStyle: isTouchDevice ? undefined : 'preserve-3d',
      }}
      className={`relative rounded-2xl overflow-hidden ${className}`}
      {...props}
    >
      {/* 3D dynamic surface glare sheen (only active on hoverable desktop) */}
      {!isTouchDevice && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(circle 320px at ${glarePosition.x}% ${glarePosition.y}%, ${glowColor}, transparent 80%)`,
            opacity: glarePosition.opacity,
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
};
