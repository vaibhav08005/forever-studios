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
            viewBox="0 0 400 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Three horizontal bars - Rounded style from new screenshot */}
            <rect x="20" y="8" width="40" height="3" rx="1.5" fill="white" />
            <rect x="20" y="15" width="40" height="3" rx="1.5" fill="white" />
            <rect x="20" y="22" width="40" height="3" rx="1.5" fill="white" />

            {/* Red Tilak mark */}
            <rect x="38.5" y="8" width="3" height="17" rx="1" fill="#ff0000" />

            {/* J - Rounded Sans style */}
            <path
                d="M40 25 V115 Q40 145 15 145"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
            />

            {showText && (
                <g>
                    {/* M - Rounded Sans style */}
                    <path
                        d="M75 125 V45 L115 110 L155 45 V125"
                        stroke="white"
                        strokeWidth="10"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        fill="none"
                    />

                    {/* E - Rounded Sans style */}
                    <path
                        d="M185 125 V45 H245 M185 85 H235 M185 125 H245"
                        stroke="white"
                        strokeWidth="10"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        fill="none"
                    />

                    {/* Registration mark - Yellow from screenshot */}
                    <circle cx="280" cy="45" r="8" fill="#eab308" />
                    <text
                        x="276"
                        y="49"
                        fill="black"
                        style={{ font: 'bold 10px sans-serif' }}
                    >
                        R
                    </text>
                </g>
            )}
        </svg>
    );
};

export default JmeLogo;
