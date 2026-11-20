import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface EarthSelectOption {
  value: string;
  label: string;
  count?: number;
}

interface EarthSelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: (string | EarthSelectOption)[];
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

export const EarthSelect: React.FC<EarthSelectProps> = ({
  label,
  value,
  onChange,
  options,
  icon: Icon,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const normalizedOptions: EarthSelectOption[] = options.map((opt) =>
    typeof opt === 'string' ? { value: opt, label: opt } : opt
  );

  const selectedOption = normalizedOptions.find((o) => o.value === value) || {
    value,
    label: value
  };

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {label && (
        <label className="text-[11px] font-bold uppercase tracking-wider text-earth-mud block mb-1">
          {label}
        </label>
      )}

      {/* Dropdown Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-earth-terracotta/30 ${
          isOpen
            ? 'bg-earth-sand/30 border-earth-terracotta text-earth-soil shadow-sm'
            : 'bg-earth-cream hover:bg-earth-sand/25 border-earth-sand hover:border-earth-terracotta/50 text-earth-soil'
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 truncate">
          {Icon && <Icon className="w-3.5 h-3.5 text-earth-terracotta flex-shrink-0" />}
          <span className="truncate">{selectedOption.label}</span>
        </div>

        <ChevronDown
          className={`w-4 h-4 text-earth-terracotta transition-transform duration-200 flex-shrink-0 ml-2 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Earth Themed Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1.5 z-50 bg-earth-ivory border-2 border-earth-sand rounded-xl shadow-earth-lg p-1.5 max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-1 duration-150">
          <div role="listbox" className="space-y-0.5">
            {normalizedOptions.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors text-left ${
                    isSelected
                      ? 'bg-earth-terracotta text-white font-bold shadow-sm'
                      : 'text-earth-soil hover:bg-earth-sand/40 hover:text-earth-terracotta'
                  }`}
                  role="option"
                  aria-selected={isSelected}
                >
                  <span className="truncate">{opt.label}</span>
                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-earth-sand flex-shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
