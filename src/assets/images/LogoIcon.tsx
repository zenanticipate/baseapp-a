import * as React from 'react';

interface LogoIconProps {
    className?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = (props: LogoIconProps) => (
<svg width="118" height="20" viewBox="0 0 118 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.384613 17.1605C0.384613 18.7911 1.19766 19.5924 2.8651 19.5924H8.21193C12.1945 19.5924 14.7577 17.4" />
    <path d="M18.0925 19.761C19.0847 19.761 19.636 19.2409 20.0218 17.9196L21.0691 14.6584H27.67L28.7311 17.9196C29" />
    <path d="M34.2019 15.6423C34.2019 16.4436 34.6705 17.3011 35.5386 18.1164C36.7789 19.3112 38.9424 20 41.3816 20" />
    <path d="M51.7583 17.1605C51.7583 18.7911 52.5713 19.5924 54.2388 19.5924H62.5208C63.4992 19.5924 64.1332 18.98" />
    <text x="10" y="15" font-size="16" fill="grey" font-weight="bold">TripleZen</text>
</svg>
);
