import { useState } from "react";

const ColorSwitcher = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8" style={{ backgroundColor: selectedColor }}>
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-center">Choose a Color</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {colors.map((color) => (
            <button
              key={color}
              className={`w-10 h-10 rounded-full border-2 transition-transform duration-200 ease-in-out hover:scale-110 ${selectedColor === color ? 'border-black' : 'border-transparent'}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return <ColorSwitcher colors={["#ff5733", "#3357ff", "#f3f3f3", "#ff33a8", "#a833ff", "#33fff2", "#ff8c33", "#000000","#b7950b", "#aed6f1", "#ff3333", "#33ff33", "#ffff33", "#ff33ff", "#95a5a6", "#a52a2a"]} />;
}
