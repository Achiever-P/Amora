// A fully custom-generated animated backdrop (drifting gradient blobs + a
// faint circuit/data grid + optional floating particles) used anywhere the
// project previously relied on stock video or stock photography. Everything
// here is drawn with CSS, so there's no licensing concern and the colors
// stay in sync with Amora Prime's own palette.

const VARIANTS = {
    1: { a: "#5542ff", b: "#edff66", base: "#0b0022" },
    2: { a: "#0ea5e9", b: "#5542ff", base: "#020617" },
    3: { a: "#ef4444", b: "#f59e0b", base: "#1a0507" },
    4: { a: "#10b981", b: "#5542ff", base: "#031b12" },
};

const AnimatedBackdrop = ({ variant = 1, className = "", dense = false, particleCount = 12 }) => {
    const colors = VARIANTS[variant] || VARIANTS[1];

    return (
        <div
            className={`absolute inset-0 overflow-hidden ${className}`}
            style={{ background: colors.base }}
        >
            <div
                className="absolute -top-1/4 -left-1/4 w-[70%] h-[70%] rounded-full blur-[90px] opacity-40"
                style={{ background: colors.a, animation: "blob-float-a 14s ease-in-out infinite" }}
            />
            <div
                className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] rounded-full blur-[90px] opacity-30"
                style={{ background: colors.b, animation: "blob-float-b 18s ease-in-out infinite" }}
            />

            {/* faint circuit / data-grid overlay */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)",
                    backgroundSize: "38px 38px",
                    animation: "grid-pulse 6s ease-in-out infinite",
                }}
            />

            {dense && (
                <div className="absolute inset-0">
                    {Array.from({ length: particleCount }).map((_, i) => (
                        <span
                            key={i}
                            className="absolute rounded-full bg-white"
                            style={{
                                width: 2 + (i % 3),
                                height: 2 + (i % 3),
                                left: `${(i * 37) % 100}%`,
                                top: `${(i * 53) % 100}%`,
                                animation: `particle-drift ${6 + (i % 5)}s ease-in-out ${i * 0.4}s infinite`,
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AnimatedBackdrop;
