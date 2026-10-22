import React from 'react';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';

interface ImageViewerModalProps {
  image: string | null;
  title: string | null;
  onClose: () => void;
}

export const ImageViewerModal: React.FC<ImageViewerModalProps> = ({
  image,
  title,
  onClose
}) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="w-full max-w-6xl flex items-center justify-between text-white pb-3 border-b border-[#333942]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs uppercase text-[#FA5428] font-semibold">Workflow Inspector</span>
          <span className="text-[#6E7681]">/</span>
          <span className="text-sm font-medium text-white truncate max-w-md">{title}</span>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-lg bg-[#1F2328] hover:bg-[#FA5428] text-[#B4BAC2] hover:text-white transition-colors"
          title="Close inspector"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="flex-1 w-full max-w-6xl flex items-center justify-center p-2 sm:p-6 overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={title || 'Workflow Scenario'}
          className="max-h-[82vh] max-w-full object-contain rounded-xl shadow-2xl border border-[#333942] bg-[#121417]"
        />
      </div>

      {/* Bottom bar */}
      <div
        className="w-full max-w-6xl pt-3 border-t border-[#333942] flex items-center justify-between text-xs font-mono text-[#8B949E]"
        onClick={(e) => e.stopPropagation()}
      >
        <span>High-Resolution Scenario Capture · Actual Make.com Scenario</span>
        <button
          onClick={onClose}
          className="px-4 py-1.5 rounded bg-[#FA5428] hover:bg-[#E1441B] text-white text-xs font-medium"
        >
          Close Viewer
        </button>
      </div>
    </div>
  );
};
