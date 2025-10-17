import React from "react";
import { HexColorPicker } from "react-colorful";

export default function ThemePicker({ color, onChange }) {
  return (
    <div className="theme">
      <HexColorPicker color={color} onChange={onChange} />
      <input
        className="theme__input"
        value={color}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
