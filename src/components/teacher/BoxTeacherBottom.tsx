import { Box, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import InputComponent from "../teacher&student/InputComponent";

const BoxTeacherBottom = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        {/* First Column */}
        <Grid size={{ md: 6, xs: 12 }}>
          <InputComponent label="Nơi công tác" placeholder="Enter workplace" />
          <Box sx={{ marginBottom: "20px" }}>
            <Typography sx={{ marginBottom: "10px", fontSize: "18px" }}>
              Thời gian làm việc
            </Typography>
            <Grid container spacing={2}>
              <Grid size={6}>
                <TextField fullWidth variant="outlined" placeholder="Bắt đầu" />
              </Grid>
              <Grid size={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Kết thúc"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Second Column */}
        <Grid size={{ md: 6, xs: 12 }}>
          <InputComponent label="Trình độ" placeholder="Enter qualification" />
          <InputComponent
            label="Ngày gia nhập"
            placeholder="Enter joining date"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BoxTeacherBottom;
