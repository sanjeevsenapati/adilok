import React from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  caption?: string;
  credit?: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  caption,
  credit
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-earth-soil/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-earth-ivory rounded-2xl overflow-hidden shadow-2xl border-2 border-earth-terracotta/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-earth-soil/70 text-white hover:bg-earth-terracotta transition-colors shadow-lg"
          aria-label="Close fullscreen view"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Container */}
        <div className="relative flex-grow flex items-center justify-center bg-black/95 overflow-hidden min-h-[50vh] max-h-[75vh]">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain max-h-[75vh] select-none"
          />
        </div>

        {/* Details Caption Bar */}
        <div className="p-5 bg-earth-ivory border-t border-earth-sand flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-serif font-bold text-lg text-earth-soil">{title}</h3>
            {caption && <p className="text-xs text-earth-mud mt-0.5">{caption}</p>}
          </div>
          {credit && (
            <div className="text-[11px] text-earth-ochre font-medium sm:text-right flex-shrink-0">
              Source: {credit}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
