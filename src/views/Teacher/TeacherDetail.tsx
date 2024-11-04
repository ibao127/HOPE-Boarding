import { Box } from "@mui/material";
import React from "react";
import { useLocation } from "react-router";
import Grid from "@mui/material/Grid2";
import {
  bellIcon,
  locationIcon,
  mail1Icon,
  phone1Icon,
  settingIcon,
  threeDotsIcon,
} from "../../assets/iconSVG";
import TopLayout from "../../components/TopLayout";
import RenderRightComponent from "../../components/teacher&student/RenderRightComponent";

const TeacherDetail = () => {
  const location = useLocation();
  const { name, subject, img } = location.state as {
    name: string;
    subject: string;
    img: any;
  };

  return (
    <TopLayout>
      <Main img={img} name={name} subject={subject} />
    </TopLayout>
  );
};

const Main: React.FC<{ name: string; subject: string; img: any }> = ({
  img,
  name,
  subject,
}) => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container>
        <Grid size={8}>
          <Box sx={{ color: "#000000", fontSize: "36px", fontWeight: "700" }}>
            Thông tin giáo viên
          </Box>
        </Grid>
        <Grid size={4}>
          <Header />
        </Grid>
      </Grid>
      {/* Render below here */}
      <Grid container columnSpacing={2} sx={{ marginTop: "20px" }}>
        <Grid size={{ md: 8, xs: 12 }}>
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
                src={img}
                style={{
                  width: "100px",
                  height: "100px",
                  border: "3px solid white",
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
                  {name}
                </Box>
                <Box sx={{ color: "#818181", fontSize: "18px" }}>{subject}</Box>
              </Box>
              <Grid container marginY={2}>
                <Grid
                  display={"flex"}
                  alignItems={"center"}
                  columnGap={1}
                  size={{ md: 3, xs: 12 }}
                >
                  {locationIcon({})} Hà Nội
                </Grid>
                <Grid
                  display={"flex"}
                  alignItems={"center"}
                  columnGap={1}
                  size={{ md: 3, xs: 12 }}
                >
                  10/09/1987
                </Grid>
                <Grid
                  display={"flex"}
                  alignItems={"center"}
                  columnGap={1}
                  size={{ md: 3, xs: 12 }}
                >
                  {phone1Icon({})} +12 345 6789 0
                </Grid>
                <Grid
                  display={"flex"}
                  alignItems={"center"}
                  size={{ md: 3, xs: 12 }}
                  columnGap={1}
                >
                  {mail1Icon({})}Emain@gmail.com
                </Grid>
              </Grid>
              <Box>
                <Box
                  sx={{
                    color: "black",
                    fontSize: "24px",
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  Giới thiệu:
                </Box>
                <Box>
                  Thầy giáo là người tận tâm truyền đạt kiến thức và khơi dậy
                  đam mê học tập cho học sinh. Với sự kiên nhẫn và nhiệt huyết,
                  thầy không chỉ giảng dạy mà còn là người bạn đồng hành, luôn
                  lắng nghe và hỗ trợ từng học trò trên con đường trưởng thành.
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    color: "black",
                    fontSize: "24px",
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  Học vấn:
                </Box>
                <Box>
                  {/* render as unorder list */}
                  <ul>
                    <li>{subject} Major, University Akademi Historia</li>
                    <sub>2010 - 2014</sub>
                    <li>Master of {subject}, University Akademi Historia</li>
                    <sub>2017-2020</sub>
                  </ul>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    color: "black",
                    fontSize: "24px",
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  Kinh nghiệm giảng dạy:
                </Box>
                <Box>
                  {/* render as unorder list */}
                  <ul>
                    <li>{subject} Major, University Akademi Historia</li>
                    <sub>2010 - 2014</sub>
                  </ul>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <RenderRightComponent
            label={"Lịch dạy"}
            subject={subject}
            color={"#27B24A"}
          />
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
export default TeacherDetail;
