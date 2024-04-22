import { useEffect, useState } from "react";
import { Input } from "@mui/material";

import { useDebounce } from "@hooks/index";
import { ColorPickerProps } from "types";

import useTodosStore from "../../zustand/useTodosStore";

const ColorPicker = ({ id, color = "#FFFFFF" }: ColorPickerProps) => {
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
