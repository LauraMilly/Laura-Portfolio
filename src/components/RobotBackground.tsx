import { memo, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

function RobotBackground() {
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      // ⚠️ NÃO desmonta o Spline
      mountedRef.current = false;
    };
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      suppressHydrationWarning
    >
      <Spline scene="https://prod.spline.design/vru2yIo4hyvhK2aE/scene.splinecode" />
    </div>
  );
}

/**
 * 🔒 memo impede QUALQUER re-render
 * mesmo que o componente pai atualize estado
 */
export default memo(RobotBackground);
