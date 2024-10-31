import Grid from "@mui/material/Grid2";
import React from "react";
import { bellIcon, settingIcon } from "../../assets/iconSVG";
import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { UserRightData } from "../../services/renderData";

const UserRightRendering = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Header />
      <Main />
    </Box>
  );
};

const Main: React.FC = () => {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <Box sx={{ marginTop: 2 }}>
      <Box sx={{ color: "#000000", fontSize: "24px", fontWeight: "700" }}>
        Lastest Activity
      </Box>
      <Stepper orientation="vertical" sx={{ marginTop: 2 }}>
        {UserRightData.map((data, index) => {
          const parts = data.label.split(" ");
          const firstTwoWords = parts.slice(0, 2).join(" ");
          const restOfLabel = parts.slice(2).join(" ");
          const labelWithColor = restOfLabel.replace(
            /"(.*?)"/g,
            (match, p1) =>
              `<span style="color: ${getRandomColor()}; font-weight: bold;">"${p1}"</span>`
          );

          return (
            <Step key={index} active completed>
              <StepLabel>
                <Typography
                  component="span"
                  sx={{ fontWeight: 700, color: "black" }}
                >
                  {firstTwoWords}
                </Typography>{" "}
                <Typography
                  component="span"
                  dangerouslySetInnerHTML={{ __html: labelWithColor }}
                />
                <Typography sx={{ color: "#A098AE", fontSize: "14px" }}>
                  {data.date}
                </Typography>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};

const Header: React.FC = () => {
  return (
    <Grid container size={12} display={"flex"} alignItems={"center"}>
      <Grid size={2}>{bellIcon({})}</Grid>
      <Grid size={2}>{settingIcon({})}</Grid>
      <Grid size={8} container>
        <Grid
          size={6}
          display="flex"
          flexDirection="column"
          alignItems={"flex-end"}
        >
          <Grid sx={{ color: "#000000" }}>Thu Hiền</Grid>
          <Grid sx={{ color: "#818181" }}>Admin</Grid>
        </Grid>
        <Grid size={6} display={"flex"} justifyContent={"center"}>
          <img
            style={{ width: "40px", height: "40px" }}
            alt=""
            src={require("../../assets/home/avatar.png")}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserRightRendering;
