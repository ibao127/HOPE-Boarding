import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { bellIcon, settingIcon } from "../../assets/iconSVG";
import { mealHomeList } from "../../services/renderData";

const MealRightRendering = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Main />
    </Box>
  );
};

const Main: React.FC = () => {
  return (
    <Box sx={{ marginTop: 2 }}>
      <Box sx={{ color: "#363B64", fontSize: "24px", fontWeight: "700" }}>
        Thực đơn gần đây
      </Box>
      <Box>
        {mealHomeList.map((meal, index) => {
          return (
            <Grid container key={index} sx={{ rowGap: 2, marginY: 2 }}>
              <img alt="" src={meal.img} style={{ width: "100%" }} />
              <Box
                sx={{
                  color: "#363B64",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                {meal.name}
              </Box>
            </Grid>
          );
        })}
      </Box>
      <Button
        sx={{
          marginY: 2,
          backgroundColor: "black",
          color: "white",
          borderRadius: 10,
          paddingY: 1.5,
          width: "100%",
        }}
      >
        Xem thêm
      </Button>
    </Box>
  );
};

export default MealRightRendering;
