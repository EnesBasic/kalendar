import { getContrastTextColor } from '../utils/colorUtils';

export function getContrastTextColor(hex) {
  // Remove hash if present
  hex = hex.replace('#', '');
  // Convert to RGB
  const r = parseInt(hex.substr(0,2),16);
  const g = parseInt(hex.substr(2,2),16);
  const b = parseInt(hex.substr(4,2),16);
  // Calculate luminance
  const luminance = (0.299*r + 0.587*g + 0.114*b)/255;
  return luminance > 0.5 ? '#000' : '#fff';
}