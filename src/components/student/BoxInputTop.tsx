import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import InputComponent from "../teacher&student/InputComponent";

const BoxInputTop = () => {
  const [photo, setPhoto] = useState<string | ArrayBuffer | null>(null);
  const [medicalRecord, setMedicalRecord] = useState<
    string | ArrayBuffer | null
  >(null);

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

  const handleMedicalRecordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setMedicalRecord(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        {/* First Column */}
        <Grid size={{ md: 2, xs: 12 }}>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography sx={{ marginBottom: "10px", fontSize: "18px" }}>
              Photo
            </Typography>
            <Box
              sx={{
                width: "100%",
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
                <Typography color="blue" sx={{ textAlign: "center" }}>
                  Click here to select file
                </Typography>
              )}
            </Box>
            <input
              type="file"
              id="photo-input"
              style={{ display: "none" }}
              onChange={handlePhotoChange}
            />
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography sx={{ marginBottom: "10px", fontSize: "18px" }}>
              Sổ y tế
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "200px",
                border: "2px dashed blue",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                borderRadius: "10px",
                overflow: "hidden",
              }}
              onClick={() =>
                document.getElementById("medical-record-input")?.click()
              }
            >
              {medicalRecord ? (
                <img
                  src={medicalRecord as string}
                  alt="Medical Record"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <Typography color="blue">Upload Sổ y tế</Typography>
              )}
            </Box>
            <input
              type="file"
              id="medical-record-input"
              style={{ display: "none" }}
              onChange={handleMedicalRecordChange}
            />
          </Box>
        </Grid>

        {/* Second Column */}
        <Grid size={{ md: 5, xs: 12 }}>
          <InputComponent label="Họ và tên" placeholder="Enter full name" />
          <InputComponent
            label="Ngày sinh và nơi sinh"
            placeholder="Enter date and place of birth"
          />
          <InputComponent label="Email *" placeholder="Enter email" />
          <InputComponent
            label="Địa chỉ"
            placeholder="Enter address"
            isMultipleLine
          />
        </Grid>

        {/* Third Column */}
        <Grid size={{ md: 5, xs: 12 }}>
          <InputComponent label="Giới tính" placeholder="Enter gender" />
          <InputComponent label="Nhóm máu" placeholder="Enter blood type" />
          <InputComponent
            label="Số điện thoại"
            placeholder="Enter phone number"
          />
          <InputComponent
            label="Ghi chú đặc biệt"
            isMultipleLine
            placeholder="Enter special notes"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BoxInputTop;
