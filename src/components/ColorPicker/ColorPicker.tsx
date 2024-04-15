import { Input } from "@mui/material";
import useTodosStore from "../../zustand/useTodosStore";
import useDebounce from "../../hooks/useDebounce";
import { useEffect, useState } from "react";
import { ColorPickerProps } from "./ColorPicker.types";

const ColorPicker = ({ id, color = "#000000" }: ColorPickerProps) => {
  const [newColor, setNewColor] = useState(color);
  const debouncedColor = useDebounce(newColor, 300);
  const updateColor = useTodosStore((state) => state.updateColor);
  const addColor = useTodosStore((state) => state.addColor);

  useEffect(() => {
    updateColor(id, debouncedColor);
    addColor(debouncedColor);
  }, [debouncedColor, updateColor, id, addColor]);

  return (
    <Input
      type="color"
      value={newColor}
      onChange={(e) => setNewColor(e.target.value)}
      sx={{
        width: "20px",
        border: "none",
      }}
    />
  );
};

export default ColorPicker;
