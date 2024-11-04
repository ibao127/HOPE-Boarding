import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import InputComponent from "../teacher&student/InputComponent";

const BoxTeacherTop = () => {
  const [photo, setPhoto] = useState<string | ArrayBuffer | null>(null);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        {/* First Column */}
        <Grid size={{ md: 6, xs: 12 }}>
          <InputComponent label="Họ và tên" placeholder="Enter full name" />
          <InputComponent label="Email *" placeholder="Enter email" />
          <InputComponent
            label="Giới thiệu"
            isMultipleLine
            placeholder="Enter introduction"
          />
          <InputComponent label="Ngày sinh" placeholder="Enter date of birth" />
        </Grid>

        {/* Second Column */}
        <Grid size={{ md: 6, xs: 12 }}>
          <InputComponent label="Dạy môn" placeholder="Enter subject" />
          <InputComponent
            label="Số điện thoại"
            placeholder="Enter phone number"
          />
          <Box sx={{ marginBottom: "20px" }}>
            <Typography sx={{ marginBottom: "10px", fontSize: "18px" }}>
              Ảnh
            </Typography>
            <Box
              sx={{
                width: "200px",
                height: "200px",
                border: "2px dashed blue",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                borderRadius: "10px",
                overflow: "hidden",
              }}
              onClick={() => document.getElementById("photo-input")?.click()}
            >
              {photo ? (
                <img
                  src={photo as string}
                  alt="Photo"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <Typography color="blue">Upload Photo</Typography>
              )}
            </Box>
            <input
              type="file"
              id="photo-input"
              style={{ display: "none" }}
              onChange={handlePhotoChange}
            />
          </Box>
          <InputComponent label="Quê quán" placeholder="Enter hometown" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BoxTeacherTop;
