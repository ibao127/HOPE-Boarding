import React from "react";
import TopLayout from "../components/TopLayout";
import { Box, InputAdornment, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SearchIcon from "@mui/icons-material/Search";
import { foodFeeIcon, studentSVG, teacherIcon } from "../assets/iconSVG";
import chart1 from "../assets/home/chart1.png";
import chart2 from "../assets/home/chart2.png";
import ListStudentHomeComponent from "../components/home/ListStudentHomeComponent";
import HomeRightComponent from "../components/home/HomeRightComponent";

const Home = () => {
  return (
    <TopLayout>
      <Main />
    </TopLayout>
  );
};

const Main: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={{ md: 9, xs: 12 }} container sx={{ padding: "20px" }}>
          <Grid size={12} container sx={{ alignItems: "center" }}>
            <Grid
              size={8}
              sx={{ color: "#000000", fontSize: "36px", fontWeight: "700" }}
            >
              Tổng quan
            </Grid>
            <Grid size={4}>
              <TextField
                variant="outlined"
                placeholder="Tìm kiếm"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "30px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  style: {
                    backgroundColor: "white",
                    borderRadius: "200px",
                  },
                }}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid
            size={12}
            container
            sx={{
              marginvertical: "10px",
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <Grid size={{ md: 4, xs: 12 }} container alignItems="center">
              <Grid size={3}>
                <Box
                  sx={{
                    backgroundColor: "#1568B1",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 50,
                    height: 50,
                  }}
                >
                  {studentSVG({ width: 30, height: 30, color: "white" })}
                </Box>
              </Grid>
              <Grid size={9}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box sx={{ color: "#818181", fontSize: 18 }}>Học sinh</Box>
                  <Box sx={{ fontSize: 36, fontWeight: "700", color: "black" }}>
                    100
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid size={{ md: 4, xs: 12 }} container alignItems="center">
              <Grid size={3}>
                <Box
                  sx={{
                    backgroundColor: "#EE7223",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 50,
                    height: 50,
                  }}
                >
                  {teacherIcon({ width: 30, height: 30, color: "white" })}
                </Box>
              </Grid>
              <Grid size={9}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box sx={{ color: "#818181", fontSize: 18 }}>Giáo viên</Box>
                  <Box sx={{ fontSize: 36, fontWeight: "700", color: "black" }}>
                    234
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid size={{ md: 4, xs: 12 }} container alignItems="center">
              <Grid size={3}>
                <Box
                  sx={{
                    backgroundColor: "#FCC43E",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 50,
                    height: 50,
                  }}
                >
                  {foodFeeIcon({ width: 30, height: 30, color: "white" })}
                </Box>
              </Grid>
              <Grid size={9}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box sx={{ color: "#818181", fontSize: 18 }}>Phí ăn</Box>
                  <Box
                    sx={{
                      fontSize: 36,
                      fontWeight: "700",
                      color: "black",
                      wordWrap: "break-word",
                      overflowWrap: "break-word",
                      width: "100%",
                    }}
                  >
                    32.000.000
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={12} container spacing={2} justifyContent="center">
            <Grid size={{ md: 6, xs: 12 }} container justifyContent="center">
              <Box>Tỷ lệ học sinh có tham gia học hôm nay ngày 12/11/2023</Box>
              <img style={{ blockSize: "15em" }} alt="" src={chart1} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }} container justifyContent="center">
              <Box>Tỷ lệ học sinh chưa đóng phí theo các khối</Box>
              <img style={{ blockSize: "15em" }} alt="" src={chart2} />
              <Grid size={12} container justifyContent="center">
                <Grid
                  size={4}
                  container
                  alignItems="center"
                  sx={{ display: "flex" }}
                >
                  <Box
                    sx={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "4px",
                      backgroundColor: "#FCC43E",
                    }}
                  />
                  <Box>Khối 10</Box>
                </Grid>
                <Grid
                  size={4}
                  container
                  alignItems="center"
                  sx={{ display: "flex" }}
                >
                  <Box
                    sx={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "4px",
                      backgroundColor: "#EE7223",
                    }}
                  />
                  <Box>Khối 11</Box>
                </Grid>
                <Grid
                  size={4}
                  container
                  alignItems="center"
                  sx={{ display: "flex" }}
                >
                  <Box
                    sx={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "4px",
                      backgroundColor: "#1568B1",
                    }}
                  />
                  <Box>Khối 12</Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{ width: "100%" }}>
            <ListStudentHomeComponent />
          </Box>
        </Grid>
        <Grid size={{ md: 3, xs: 12 }} sx={{ backgroundColor: "white" }}>
          <HomeRightComponent />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
