import React, { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'next-themes';
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from 'react-icon-cloud';

// Define the cloud properties
const cloudProps = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

// Function to render custom icons
const renderCustomIcon = (icon, theme) => {
  const bgHex = '#080510'; // Dark background for dark theme
  const fallbackHex = '#ffffff'; // Fallback color for icons

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio: 2, // Ensure good contrast ratio for visibility
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

export default function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || 'dark')
    );
  }, [data, theme]);

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
}
