import React from 'react';

interface JmeLogoProps {
    className?: string;
    size?: number | string;
    color?: string;
    showText?: boolean;
}

const JmeLogo: React.FC<JmeLogoProps> = ({
    className = "",
    size = "100%",
    color = "currentColor",
    showText = true
}) => {
    return (
        <svg
            width={size}
            height="auto"
            viewBox="0 0 500 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <style>{`
                    .logo-text {
                        font-family: 'Anton', sans-serif;
                        text-transform: uppercase;
                        letter-spacing: -0.02em;
                    }
                `}</style>
                <linearGradient id="logo-footer-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#8a6d1a" />
                </linearGradient>
            </defs>

            {/* The "FOREVER" Text with no gap and matching footer gradient for "VER" */}
            <text
                x="20"
                y="110"
                className="logo-text"
                fontSize="100"
                fontWeight="bold"
            >
                <tspan fill="white">FORE</tspan>
                <tspan fill="url(#logo-footer-gradient)">VER</tspan>
            </text>
        </svg>
    );
};

export default JmeLogo;
