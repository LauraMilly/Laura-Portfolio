import Spline from "@splinetool/react-spline";

export default function RobotBackground() {
    // 🔥 evita crash no dev
    if (import.meta.env.DEV) return null;

    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Spline scene="https://prod.spline.design/vru2yIo4hyvhK2aE/scene.splinecode" />
        </div>
    );
}
