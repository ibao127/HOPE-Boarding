import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface GroupAddFieldsProps {
  label: string;
  children: ReactNode;
}

const GroupAddFields: React.FC<GroupAddFieldsProps> = ({ label, children }) => {
  return (
    <Box sx={{ marginBottom: "20px" }}>
      <Box
        sx={{
          backgroundColor: "#1568B1",
          padding: "10px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <Typography sx={{ color: "white", fontWeight: "bold" }}>
          {label}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "20px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default GroupAddFields;
