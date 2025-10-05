import React from 'react';
import Galaxy from "../Galaxy";

type RootBackgroundProps = {
  speed?: number;
  rotationSpeed?: number;
  density?: number;
  glowIntensity?: number;
  hueShift?: number;
};

export default function RootBackground({
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
}