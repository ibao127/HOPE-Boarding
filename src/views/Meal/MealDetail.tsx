import { Box, Chip, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import TopLayout from "../../components/TopLayout";
import {
  bellIcon,
  chartIcon,
  likeIcon,
  settingIcon,
  starIcon,
} from "../../assets/iconSVG";
import MealRightRendering from "../../components/meal/MealRightRendering";
import { useLocation } from "react-router";
import { MealDataProps } from "../../services/typeProps";

const MealDetail = () => {
  const location = useLocation();
  const { meal } = location.state as { meal: any };

  return (
    <TopLayout>
      <Main meal={meal} />
    </TopLayout>
  );
};

const Main: React.FC<{ meal: MealDataProps }> = ({ meal }) => {
  const ingredients = [
    "Tôm", // Shrimp
    "Hành lá", // Scallions
    "Ớt", // Chili
    "Tỏi", // Garlic
    "Hành tím", // Shallot
    "Gừng", // Ginger
    "Chanh", // Lime
    "Nước mắm", // Fish sauce
    "Dừa tươi", // Fresh coconut
    "Trứng gà", // Egg
  ];

  const nutrition = [
    "Calories: 150",
    "Protein: 8g",
    "Fat: 4g",
    "Carbohydrates: 20g",
    "Fiber: 1g",
    "Sodium: 300mg",
    "Sugars: 5g",
    "Vitamin C: 10mg",
    "Vitamin A: 500 IU",
    "Iron: 2mg",
  ];

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container>
        <Grid size={8}>
          <Box sx={{ color: "#000000", fontSize: "36px", fontWeight: "700" }}>
            Thông tin món ăn
          </Box>
        </Grid>
        <Grid size={4}>
          <Header />
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          size={{ md: 9, xs: 12 }}
          sx={{
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "10px",
            marginTop: "50px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#25ABE1",
                width: "300px",
                height: "200px",
                borderRadius: "10px",
                marginRight: "20px",
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <Chip label={meal.catergory} color="primary" />
                <Typography variant="body1">Phí sản xuất</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {meal.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#000000" }}
                >
                  đ28.340
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "#818181" }}>
                Đây là mô tả giả cho món ăn này. Món ăn này rất ngon và bổ
                dưỡng, phù hợp cho mọi lứa tuổi.
              </Typography>
            </Box>
            {/* render here */}
          </Box>
          <Grid container sx={{ marginTop: 2 }}>
            <Grid size={4} display="flex" alignItems="center">
              {starIcon({})}
              <Box
                sx={{
                  marginLeft: 1,
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "black",
                }}
              >
                <Box>{meal.star}</Box>
                <Box
                  sx={{
                    color: "#818181",
                    fontSize: "18px",
                    fontWeight: "400",
                  }}
                >
                  đánh giá
                </Box>
              </Box>
            </Grid>
            <Grid size={4} display="flex" alignItems="center">
              {chartIcon({})}
              <Box
                sx={{
                  marginLeft: 1,
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "black",
                }}
              >
                <Box>{meal.order}</Box>
                <Box
                  sx={{
                    color: "#818181",
                    fontSize: "18px",
                    fontWeight: "400",
                  }}
                >
                  lượt đặt
                </Box>
              </Box>
            </Grid>
            <Grid size={4} display="flex" alignItems="center">
              {likeIcon({})}
              <Typography
                sx={{
                  marginLeft: 1,
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "black",
                }}
              >
                <Box> {meal.like}%</Box>
                <Box
                  sx={{
                    color: "#818181",
                    fontSize: "18px",
                    fontWeight: "400",
                  }}
                >
                  ưa chuộng
                </Box>
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ marginTop: 3 }}>
            <Grid size={6}>
              <Box sx={{ color: "black", fontSize: "24px", fontWeight: "700" }}>
                Nguyên liệu
              </Box>
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li style={{ color: "#818181" }} key={index}>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </Grid>
            <Grid size={6}>
              <Box sx={{ color: "black", fontSize: "24px", fontWeight: "700" }}>
                Dinh dưỡng
              </Box>
              <ul>
                {nutrition.map((nutrient, index) => (
                  <li style={{ color: "#818181" }} key={index}>
                    {nutrient}
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ md: 3, xs: 12 }}>
          <MealRightRendering />
        </Grid>
      </Grid>
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
            style={{ width: "50px", height: "50px" }}
            alt=""
            src={require("../../assets/home/avatar.png")}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default MealDetail;
