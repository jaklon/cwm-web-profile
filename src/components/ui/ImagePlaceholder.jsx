import { Image as ImageIcon } from 'lucide-react';

export default function ImagePlaceholder({
  src,
  alt = '',
  className = '',
  aspectRatio = '16/9',
  label = 'Image',
  objectPosition = 'center',
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover object-${objectPosition} ${className}`}
      />
    );
  }
  return (
    <div
      className={`w-full flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-dashed border-green-300 rounded-xl ${className}`}
      style={{ aspectRatio }}
    >
      <ImageIcon size={32} className="text-green-400 mb-2" />
      <span className="text-xs font-medium text-green-600 text-center px-4">{label}</span>
      <span className="text-xs text-green-400 mt-1">Replace src prop with image path</span>
    </div>
  );
}
