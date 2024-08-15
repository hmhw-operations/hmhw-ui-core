import React, { useEffect, useState } from "react";
import { SvgName } from "./types";

export type IconProps = {
  name: SvgName;
};

const Icon: React.FC<IconProps> = ({ name }) => {
  // State to hold the imported icon component (not element)
  const [SvgIconComponent, setSvgIconComponent] = useState<React.ElementType | null>(null);

  useEffect(() => {
    const importIcon = async () => {
      try {
        const { default: ImportedIcon } = await import(`../../static/icons/${name}.svg?react`);
        // Store the component itself, not an instance of it
        setSvgIconComponent(() => ImportedIcon);
      } catch (error) {
        console.error(`Error importing icon: ${name}`, error);
      }
    };

    importIcon();
  }, [name]);

  if (!SvgIconComponent) {
    return null;
  }

  // Render the SVG component correctly as a React component
  return <SvgIconComponent />;
};

export default Icon;
