import { useEffect, useState } from "react";

export default function RobotBackground() {
  const [SplineComponent, setSplineComponent] = useState<any>(null);

  useEffect(() => {
    // 🚫 nunca carrega no DEV (evita crash no HMR)
    if (import.meta.env.DEV) return;

    let mounted = true;

    import("@splinetool/react-spline").then((mod) => {
      if (mounted) {
        setSplineComponent(() => mod.default);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  if (!SplineComponent) return null;

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      key="spline-background"
    >
      <SplineComponent scene="https://prod.spline.design/vru2yIo4hyvhK2aE/scene.splinecode" />
    </div>
  );
}
