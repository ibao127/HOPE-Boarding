import { Box, Button } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import TopLayout from "../../components/TopLayout";
import { bellIcon, settingIcon } from "../../assets/iconSVG";
import GroupAddFields from "../../components/teacher&student/GroupAddFields";
import BoxTeacherTop from "../../components/teacher/BoxTeacherTop";
import BoxTeacherBottom from "../../components/teacher/BoxTeacherBottom";

const AddTeacher = () => {
  return (
    <TopLayout>
      <Main />
    </TopLayout>
  );
};

const Main: React.FC = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container>
        <Grid size={8}>
          <Box sx={{ color: "#000000", fontSize: "36px", fontWeight: "700" }}>
            Thêm học sinh mới
          </Box>
        </Grid>
        <Grid size={4}>
          <Header />
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "20px" }}>
        <GroupAddFields
          children={
            <Box>
              <BoxTeacherTop />
            </Box>
          }
          label="Thông tin cá nhân"
        />
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <GroupAddFields
          children={
            <Box>
              <BoxTeacherBottom />
            </Box>
          }
          label="Kinh nghiệm"
        />
      </Box>
      {/* render here */}
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}
      >
        <Button
          variant="outlined"
          sx={{
            borderColor: "#1568B1",
            color: "#1568B1",
            marginRight: "10px",
            borderRadius: "40px",
            paddingY: "10px",
          }}
        >
          Lưu bản nháp
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1568B1",
            color: "white",
            paddingY: "10px",
            borderRadius: "40px",
          }}
        >
          Cập nhật
        </Button>
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
            src={require("../../assets/home/avatar.png")}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddTeacher;
