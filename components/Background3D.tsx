"use client";

import { useRef, useEffect, Suspense, useState, lazy } from "react";

const Spline = lazy(() => import("./SplineClient"));

export default function Background3D() {
  const splineRef = useRef<unknown>(null);
  const [isMounted, setIsMounted] = useState(false);

  function onLoad(splineApp: unknown) {
    splineRef.current = splineApp;
  }

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!splineRef.current) return;

      const splineApp = splineRef.current as {
        findObjectByName: (name: string) => { rotation: { x: number; y: number } } | undefined;
      };

      // Calculate normalized mouse positions (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;

      // Target head and common group rotation names
      const targetObjects = ["head", "Head", "Robot", "robot", "Group", "group", "Main", "main"];
      targetObjects.forEach((name) => {
        try {
          const obj = splineApp.findObjectByName(name);
          if (obj) {
            // Apply rotation with a smooth scale factor
            obj.rotation.y = x * 0.35;
            obj.rotation.x = -y * 0.25;
          }
        } catch {
          // Silent fallback if search errors
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-y-0 right-0 w-full lg:w-[50vw] -z-10 pointer-events-none opacity-80">
      <Suspense fallback={null}>
        {isMounted && (
          <Spline
            scene="https://prod.spline.design/TLMw5vq3CXat145W/scene.splinecode"
            className="w-full h-full"
            onLoad={onLoad}
          />
        )}
      </Suspense>
      {/* Overlay pill to cover the 'Built with Spline' logo watermark */}
      <div 
        className="absolute bottom-4 right-4 w-[140px] h-[36px] rounded-full pointer-events-none z-50"
        style={{
          background: 'linear-gradient(135deg, #050505 0%, #000000 100%)',
          filter: 'blur(2px)',
          opacity: 0.95
        }}
      />
    </div>
  );
}
