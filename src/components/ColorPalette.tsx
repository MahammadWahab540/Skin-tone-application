import React from 'react';
import { Copy } from 'lucide-react';

interface ColorPaletteProps {
  name: string;
  colors: string[];
}

export function ColorPalette({ name, colors }: ColorPaletteProps) {
  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
  };

  return (
    <div>
      <h3 className="text-xl font-medium text-gray-800 mb-3">{name}</h3>
      <div className="grid grid-cols-5 gap-4">
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => copyColor(color)}
            className="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            style={{ backgroundColor: color }}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity">
              <Copy className="w-5 h-5 text-white" />
            </div>
            <span className="absolute bottom-2 left-2 text-xs font-mono text-white/90 drop-shadow-md">
              {color}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}