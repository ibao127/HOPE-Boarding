import { Box, Chip, Pagination, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import TopLayout from "../components/TopLayout";
import {
  bellIcon,
  chartIcon,
  likeIcon,
  settingIcon,
  starIcon,
  threeDotsIcon,
} from "../assets/iconSVG";
import { MealData } from "../services/renderData";
import { useNavigate } from "react-router";

const MealPage = () => {
  return (
    <TopLayout>
      <Main />
    </TopLayout>
  );
};

const Main: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTab, setSelectedTab] = useState<string>("Tất cả");
  const mealsPerPage = 5;
  const navigate = useNavigate();

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setSelectedTab(newValue);
    setCurrentPage(1); // Reset to first page when tab changes
  };

  const filteredMeals =
    selectedTab === "Tất cả"
      ? MealData
      : MealData.filter((meal) => meal.catergory === selectedTab);

  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
  const currentMeals = filteredMeals.slice(indexOfFirstMeal, indexOfLastMeal);

  const handleMealClick = (meal: any) => {
    navigate(`/meals/${meal.name}`, { state: { meal } });
  };

  return (
    <Box sx={{ padding: "20px", overflowX: "auto" }}>
      <Box sx={{ minWidth: "800px" }}>
        <Grid container>
          <Grid size={8}>
            <Box sx={{ color: "#000000", fontSize: "36px", fontWeight: "700" }}>
              Bữa ăn
            </Box>
          </Grid>
          <Grid size={4}>
            <Header />
          </Grid>
        </Grid>
        <Box
          sx={{
            backgroundColor: "white",
            padding: "10px",
            marginTop: "20px",
            borderRadius: "20px",
          }}
        >
          <Grid container alignItems="center" sx={{ marginTop: 2 }}>
            <Grid size={7}>
              <Typography
                sx={{ color: "#000000", fontSize: "24px", fontWeight: "700" }}
              >
                Thực đơn
              </Typography>
            </Grid>
            <Grid size={5}>
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                sx={{
                  borderBottom: "1px solid #e0e0e0",
                  "& .MuiTab-root": {
                    minWidth: "auto",
                    flex: 1,
                  },
                  "& .Mui-selected": {
                    borderBottom: "2px solid #1568B1",
                  },
                }}
              >
                <Tab label="Tất cả" value="Tất cả" />
                <Tab label="Bữa sáng" value="Bữa sáng" />
                <Tab label="Bữa trưa" value="Bữa trưa" />
                <Tab label="Bữa tối" value="Bữa tối" />
                <Tab label="Vặt" value="Vặt" />
              </Tabs>
            </Grid>
          </Grid>
          {/* Render here */}
          <Box sx={{ marginTop: "20px" }}>
            {currentMeals.map((meal, index) => (
              <Grid
                container
                key={index}
                onClick={() => handleMealClick(meal)}
                sx={{
                  marginBottom: 2,
                  padding: 2,
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Grid size={1} display="flex" justifyContent="center">
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#25ABE1",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
                <Grid size={2}>
                  <Typography>
                    <Chip
                      label={meal.catergory}
                      sx={{ fontSize: "14px" }}
                      color="primary"
                    />
                  </Typography>
                  <Box
                    sx={{ fontSize: "24px", fontWeight: "700", color: "black" }}
                  >
                    {meal.name}
                  </Box>
                </Grid>
                <Grid size={2} display="flex" alignItems="center">
                  {starIcon({})}
                  <Box
                    sx={{
                      marginLeft: 1,
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "black",
                    }}
                  >
                    {meal.star}
                  </Box>
                </Grid>
                <Grid size={2} display="flex" alignItems="center">
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
                <Grid size={2} display="flex" alignItems="center">
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
                <Grid size={1} display="flex" justifyContent="flex-end">
                  {threeDotsIcon({})}
                </Grid>
              </Grid>
            ))}
          </Box>
          <Box display="flex" justifyContent="right" sx={{ marginTop: 2 }}>
            <Pagination
              count={Math.ceil(filteredMeals.length / mealsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </Box>
      </Box>
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
            src={require("../assets/home/avatar.png")}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default MealPage;
