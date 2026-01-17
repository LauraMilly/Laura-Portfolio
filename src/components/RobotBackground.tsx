import { useEffect, useState } from "react";
import type { ComponentType } from "react";

export default function RobotBackground() {
  const [Spline, setSpline] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    let mounted = true;

    if (typeof window === "undefined") return;

    import("@splinetool/react-spline").then((mod) => {
      if (mounted) {
        setSpline(() => mod.default as ComponentType<any>);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  // ⚠️ nunca retornar null após montar
  if (!Spline) {
    return <div className="absolute inset-0 z-0 bg-black" />;
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Spline scene="https://prod.spline.design/vru2yIo4hyvhK2aE/scene.splinecode" />
    </div>
  );
}
