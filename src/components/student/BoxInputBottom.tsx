import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import InputComponent from "../teacher&student/InputComponent";

const BoxInputBottom = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        {/* Left Column */}
        <Grid size={{ md: 6, xs: 12 }}>
          <InputComponent label="Họ và tên" placeholder="Enter full name" />
          <InputComponent label="Email *" placeholder="Enter email" />
          <InputComponent label="Địa chỉ *" placeholder="Enter address" isMultipleLine />
        </Grid>

        {/* Right Column */}
        <Grid size={{ md: 6, xs: 12 }}>
          <InputComponent
            label="Quan hệ với học sinh"
            placeholder="Enter relationship with student"
          />
          <InputComponent
            label="Số điện thoại"
            placeholder="Enter phone number"
          />
          <FormControl component="fieldset" sx={{ marginTop: "20px" }}>
            <FormLabel component="legend">Payments *</FormLabel>
            <RadioGroup row aria-label="payment" name="payment">
              <FormControlLabel value="cash" control={<Radio />} label="Cash" />
              <FormControlLabel
                value="debit"
                control={<Radio />}
                label="Debit"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BoxInputBottom;
