import { Box, Chip, Pagination } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import TopLayout from "../../components/TopLayout";
import {
  bellIcon,
  downTraddeIcon,
  settingIcon,
  threeDotsIcon,
  upTradeIcon,
} from "../../assets/iconSVG";
import { useLocation } from "react-router";
import { Student, StudentDetailTradeProps } from "../../services/typeProps";
import RenderRightComponent from "../../components/teacher&student/RenderRightComponent";

const StudentDetailPage = () => {
  const location = useLocation();
  const { student } = location.state as { student: Student };
  return (
    <TopLayout>
      <Main student={student} />
    </TopLayout>
  );
};

const Main: React.FC<{ student: Student }> = ({ student }) => {
  const studentInfo = [
    { label: "Ngày sinh:", value: student.dob || "01/01/2000" },
    { label: "Ngày nhập học:", value: "01/09/2015" },
    { label: "Giới tính:", value: "Nam" },
    { label: "Nhóm máu:", value: "O" },
    { label: "Số điện thoại:", value: "0123456789" },
    { label: "Địa chỉ:", value: "123 Main St" },
    { label: "Nơi sinh:", value: student.hometown || "Hà Nội" },
    {
      label: "Họ tên người bảo hộ:",
      value: student.parentName || "Nguyễn Văn A",
    },
    { label: "Quan hệ với học sinh:", value: "Bố" },
    { label: "Số điện thoại:", value: "0987654321" },
    { label: "Ghi chú đặc biệt:", value: "Không có" },
  ];

  const tradeData: StudentDetailTradeProps[] = Array.from(
    { length: 15 },
    (_, index) => ({
      label: `Phí học nội trú tháng ${index + 1}`,
      date: `2024-10-${String(index + 1).padStart(2, "0")}`,
      amount: `${(Math.random() * 10000000).toFixed(0)}`,
      isUp: Math.random() > 0.5,
    })
  );

  const [page, setPage] = useState(1);
  const itemsPerPage = 4;
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedData = tradeData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const formatCurrency = (amount: string) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(amount));
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container>
        <Grid size={8}>
          <Box sx={{ color: "#000000", fontSize: "36px", fontWeight: "700" }}>
            Thông tin học sinh
          </Box>
        </Grid>
        <Grid size={4}>
          <Header />
        </Grid>
      </Grid>
      <Grid
        container
        columnSpacing={2}
        rowSpacing={2}
        sx={{ marginTop: "20px" }}
      >
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
                src={require("../../assets/home/1.png")}
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
                  left: "200px",
                }}
              >
                <Chip label={student.class} color="warning" />
              </Box>
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
                  {student.name}
                </Box>
                <Box sx={{ color: "#818181", fontSize: "18px" }}>
                  {student.id}
                </Box>
              </Box>
            </Box>
            {/* render here */}
            <Box sx={{ paddingX: "20px", marginBottom: "20px" }}>
              <Grid container>
                <Grid size={{ md: 5, xs: 12 }}>
                  <Box sx={{ color: "#EE7223", fontSize: "24px" }}>
                    Thông tin
                  </Box>
                  <Box sx={{ marginTop: 2 }}>
                    {studentInfo.map((info, index) => (
                      <Grid size={12} key={index} sx={{ marginBottom: 2 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            sx={{
                              color: "black",
                              fontSize: "18px",
                              fontWeight: "700",
                            }}
                          >
                            {info.label}
                          </Box>
                          <Box
                            sx={{
                              color: "#000000",
                              fontSize: "18px",
                            }}
                          >
                            {info.value}
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Box>
                </Grid>
                <Grid size={{ md: 7, xs: 12 }}>
                  <Box>
                    <Box sx={{ paddingX: "20px", marginBottom: "20px" }}>
                      <Grid container spacing={2}>
                        {paginatedData.map((trade, index) => (
                          <Grid size={12} key={index}>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                {trade.isUp
                                  ? upTradeIcon({})
                                  : downTraddeIcon({})}
                                <Box sx={{ marginLeft: "10px" }}>
                                  <Box
                                    sx={{
                                      color: "#363B64",
                                      fontSize: "18px",
                                    }}
                                  >
                                    {trade.label}
                                  </Box>
                                  <Box
                                    sx={{ color: "#A098AE", fontSize: "14px" }}
                                  >
                                    {trade.date}
                                  </Box>
                                </Box>
                              </Box>
                              <Box
                                sx={
                                  trade.isUp
                                    ? { color: "#27B24A", fontSize: "18px" }
                                    : { color: "#F72B2B", fontSize: "18px" }
                                }
                              >
                                {trade.isUp ? "+" : "-"}
                                {formatCurrency(trade.amount)}
                              </Box>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        sx={{ marginTop: 2 }}
                      >
                        <Pagination
                          color="primary"
                          count={Math.ceil(tradeData.length / itemsPerPage)}
                          page={page}
                          onChange={handleChange}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <RenderRightComponent
            label={"Lịch học"}
            subject={"Math"}
            color={"#EE7223"}
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

export default StudentDetailPage;
