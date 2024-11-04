import React from "react";
import { Box, TextField, Typography } from "@mui/material";

interface InputComponentProps {
  label: string;
  isMultipleLine?: boolean;
  placeholder: string;
}

const InputComponent: React.FC<InputComponentProps> = ({
  label,
  isMultipleLine = false,
  placeholder = "",
}) => {
  return (
    <Box sx={{ marginBottom: "20px" }}>
      <Typography sx={{ marginBottom: "10px", fontSize: "18px" }}>
        {label}
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder={placeholder}
        multiline={isMultipleLine}
        rows={isMultipleLine ? 4 : 1}
      />
    </Box>
  );
};

export default InputComponent;
