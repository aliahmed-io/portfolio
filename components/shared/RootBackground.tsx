import React, { memo } from 'react';
import dynamic from 'next/dynamic';

type RootBackgroundProps = {
  speed?: number;
  rotationSpeed?: number;
  density?: number;
  glowIntensity?: number;
  hueShift?: number;
};

// Dynamically import Galaxy with no SSR for better performance
const Galaxy = dynamic(() => import('../Galaxy'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-b from-gray-900/50 to-black/50" />
});

const RootBackground = memo(function RootBackground({
  speed = 0.02,
  rotationSpeed = 0.01,
  density = 0.3,
  glowIntensity = 0.05,
  hueShift = 0
}: RootBackgroundProps) {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Galaxy 
        mouseRepulsion={true}
        mouseInteraction={true}
        density={density}
        glowIntensity={glowIntensity}
        saturation={0}
        hueShift={hueShift}
        speed={speed}
        rotationSpeed={rotationSpeed}
        repulsionStrength={0.5}
        transparent={true}
      />
    </div>
  );
});

export default RootBackground;