import React from "react";
import { ReactSVG, Props as ReactSVGProps } from "react-svg";

interface SvgIconProps extends ReactSVGProps {
    name: string;
    className?: string; // Add className prop to apply Tailwind classes
}

// Copy icons to public/icons folder in your project.
// Make sure to add the fill="currentColor" in svg file.
// This will allow the svg to inherit the color from the parent element.
const SvgIcon: React.FC<SvgIconProps> = ({ name, className, ...props }) => {
    const iconPath = `/icons/${name}.svg`;
    
    return (
        <ReactSVG
            src={iconPath}
            beforeInjection={(svg) => {
                if (className) {
                    svg.classList.add(...className.split(" "));
                }
            }}
            {...props}
        />
    );
};

export default SvgIcon;