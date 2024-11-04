import Grid from "@mui/material/Grid2";
import React from "react";
import TopLayout from "../components/TopLayout";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, Box } from "@mui/material";
import UserRightRendering from "../components/user/UserRightRendering";
import {
  threeDotsIcon,
  phone1Icon,
  mail1Icon,
  location1Icon,
} from "../assets/iconSVG";
import UserRenderContent from "../components/user/UserRenderContent";

const UserPage = () => {
  return (
    <TopLayout>
      <Main />
    </TopLayout>
  );
};

const Main: React.FC = () => {
  return (
    <Grid container>
      <Grid size={{ md: 9, xs: 12 }} sx={{ padding: "20px" }}>
        <Grid container display={"flex"} alignItems={"center"}>
          <Grid size={8}>
            <h1>User Dashboard</h1>
          </Grid>
          <Grid size={4}>
            <TextField
              fullWidth
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
            />
          </Grid>
        </Grid>
        {/* render here */}
        <Grid container columnSpacing={2} sx={{ marginTop: "20px" }}>
          <Grid size={{ md: 12, xs: 12 }}>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100px",
                  backgroundColor: "#1568B1",
                }}
              />
              <Box sx={{ position: "relative", height: "80px" }}>
                <img
                  alt=""
                  src={require("../assets/home/avatar.png")}
                  style={{
                    width: "100px",
                    height: "100px",
                    border: "5px solid white",
                    position: "absolute",
                    top: "-50px",
                    borderRadius: "100%",
                    left: "20px",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                  }}
                >
                  {threeDotsIcon({})}
                </Box>
              </Box>
              <Box sx={{ padding: "0 20px", paddingBottom: "20px" }}>
                <Box>
                  <Box
                    sx={{ color: "black", fontSize: "32px", fontWeight: "700" }}
                  >
                    Thu Hiền
                  </Box>
                  <Box sx={{ color: "#818181", fontSize: "18px" }}>Admin</Box>
                  <Grid container>
                    <Grid
                      size={{ md: 4, xs: 12 }}
                      sx={{
                        color: "#818181",
                        fontSize: "18px",
                        marginTop: "5px",
                      }}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      {location1Icon({})}
                      <Box>Hà Nội, Việt Nam</Box>
                    </Grid>
                    <Grid
                      size={{ md: 4, xs: 12 }}
                      sx={{
                        color: "#818181",
                        fontSize: "18px",
                        marginTop: "5px",
                      }}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <Box>
                        <Box sx={{ marginBottom: 2 }}>Số điện thoại</Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          {phone1Icon({})} +12 345 6789 0
                        </Box>
                      </Box>
                    </Grid>
                    <Grid
                      size={{ md: 4, xs: 12 }}
                      sx={{
                        color: "#818181",
                        fontSize: "18px",
                        marginTop: "5px",
                      }}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <Box>
                        <Box sx={{ marginBottom: 2 }}>Email</Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          {mail1Icon({})}Emain@gmail.com
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container columnSpacing={2} rowSpacing={2} sx={{ marginTop: 2 }}>
          <Grid
            size={{ md: 6, xs: 12 }}
            sx={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <UserRenderContent data={0} des="741 liên lạc" label="Liên lạc" />
          </Grid>
          <Grid
            size={{ md: 6, xs: 12 }}
            sx={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <UserRenderContent
              data={1}
              des="459 tin nhắn chưa đọc"
              label="Tin nhắn"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        size={{ md: 3, xs: 12 }}
        sx={{
          backgroundColor: "white",
          paddingY: "20px",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <UserRightRendering />
      </Grid>
    </Grid>
  );
};

export default UserPage;
