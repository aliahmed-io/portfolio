export type PerformanceLevel = 'high' | 'medium' | 'low';

export function detectPerformanceLevel(): PerformanceLevel {
  // Check for reduced motion preference
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return 'low';
  }

  // Check device memory (if available)
  const deviceMemory = (navigator as any).deviceMemory;
  if (deviceMemory && deviceMemory < 4) {
    return 'low';
  }

  // Check hardware concurrency
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
    return 'low';
  }

  // Check connection (if available)
  const connection = (navigator as any).connection;
  if (connection) {
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      return 'low';
    }
    if (connection.effectiveType === '3g') {
      return 'medium';
    }
  }

  // Check GPU tier (using a simple heuristic)
  if (typeof document !== 'undefined') {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        // Simple GPU tier detection
        if (typeof renderer === 'string') {
          if (renderer.includes('Intel') && !renderer.includes('Iris')) {
            return 'low';
          }
          if (renderer.includes('Mali') || renderer.includes('Adreno')) {
            return 'medium';
          }
        }
      }
    }
  }

  return 'high';
}

export function getOptimizedSettings(level: PerformanceLevel) {
  const settings = {
    high: {
      galaxyDensity: 0.6,
      galaxyGlow: 0.15,
      galaxySpeed: 0.05,
      galaxyRotation: 0.05,
      enablePixelAnimations: true,
      enableParticleEffects: true,
      particleCount: 12,
    },
    medium: {
      galaxyDensity: 0.4,
      galaxyGlow: 0.1,
      galaxySpeed: 0.03,
      galaxyRotation: 0.03,
      enablePixelAnimations: true,
      enableParticleEffects: true,
      particleCount: 8,
    },
    low: {
      galaxyDensity: 0.3,
      galaxyGlow: 0.08,
      galaxySpeed: 0.02,
      galaxyRotation: 0.02,
      enablePixelAnimations: false,
      enableParticleEffects: false,
      particleCount: 4,
    },
  };

  return settings[level];
}
