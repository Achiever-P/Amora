import AnimatedBackdrop from "./AnimatedBackdrop.jsx";

// A branded visual panel - gradient backdrop + circuit pattern + a large
// relevant icon - used everywhere the project previously relied on stock
// photography that didn't match a web/AI development agency's theme.
const BrandVisual = ({ variant = 1, icon, label, className = "", iconClassName = "" }) => {
    return (
        <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
            <AnimatedBackdrop variant={variant} />
            <div className="relative z-10 flex flex-col items-center gap-3 text-white">
                {icon && (
                    <span className={`opacity-80 drop-shadow-lg ${iconClassName}`}>{icon}</span>
                )}
                {label && (
                    <span className="font-general text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-70 text-center px-4">
                        {label}
                    </span>
                )}
            </div>
        </div>
    );
};

export default BrandVisual;
