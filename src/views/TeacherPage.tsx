import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
  Pagination,
  InputAdornment,
  Typography,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import TopLayout from "../components/TopLayout";
import Grid from "@mui/material/Grid2";
import { TeacherList } from "../services/renderData";
import { phoneIcon, mailIcon, threeDotsIcon } from "../assets/iconSVG";

const TeacherPage = () => {
  return (
    <TopLayout>
      <Main />
    </TopLayout>
  );
};

const Main: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSubject, setSelectedSubject] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const teachersPerPage = 12;
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubjectChange = (event: SelectChangeEvent<string>) => {
    setSelectedSubject(event.target.value as string);
    setCurrentPage(1); // Reset to first page when subject changes
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const filteredTeachers = TeacherList.filter((teacher) => {
    const matchesSearchQuery = teacher.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesSubject =
      selectedSubject === "All" || teacher.subject === selectedSubject;
    return matchesSearchQuery && matchesSubject;
  });

  const indexOfLastTeacher = currentPage * teachersPerPage;
  const indexOfFirstTeacher = indexOfLastTeacher - teachersPerPage;
  const currentTeachers = filteredTeachers.slice(
    indexOfFirstTeacher,
    indexOfLastTeacher
  );

  const handleTeacherClick = (teacher: {
    name: string;
    subject: string;
    img: any;
  }) => {
    navigate(`/teachers/${teacher.name}`, {
      state: { name: teacher.name, subject: teacher.subject, img: teacher.img },
    });
  };

  const handleAddTeacherClick = () => {
    navigate("/addteachers");
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Box
        sx={{
          color: "#000000",
          fontSize: "36px",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        Giáo viên
      </Box>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ marginBottom: "20px" }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            variant="outlined"
            placeholder="Tìm kiếm"
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              },
            }}
            sx={{
              width: "70%",
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
          />
        </Grid>
        <Grid container size={{ md: 6, xs: 12 }}>
          <Grid
            size={{ xs: 12, md: 7 }}
            display="flex"
            justifyContent="flex-end"
          >
            <Select
              value={selectedSubject}
              onChange={handleSubjectChange}
              displayEmpty
              sx={{
                backgroundColor: "white",
                borderRadius: "30px",
                borderColor: "#1568B1",
                width: "80%",
              }}
            >
              <MenuItem value="All">All Subjects</MenuItem>
              {Array.from(
                new Set(TeacherList.map((teacher) => teacher.subject))
              ).map((subject) => (
                <MenuItem key={subject} value={subject}>
                  {subject}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5 }}
            display="flex"
            justifyContent="flex-end"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddTeacherClick}
              sx={{ borderRadius: "40px" }}
            >
              + Thêm giáo viên
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {currentTeachers.map((teacher) => (
          <Grid
            size={{ xs: 12, md: 3, sm: 6 }}
            sx={{
              backgroundColor: "white",
              borderRadius: "20px",
              paddingY: 2,
              position: "relative",
              cursor: "pointer",
            }}
            key={teacher.name}
            onClick={() => handleTeacherClick(teacher)}
          >
            <Box
              sx={{
                position: "absolute",
                top: 8,
                right: 10,
              }}
            >
              {threeDotsIcon({})}
            </Box>
            <Avatar
              src={teacher.img}
              alt={teacher.name}
              sx={{
                width: 70,
                height: 70,
                marginBottom: 2,
                display: "flex",
                margin: "auto",
              }}
            />
            <Typography marginTop={2} variant="h6" align="center">
              {teacher.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              {teacher.subject}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                columnGap: 2,
                marginTop: 3,
              }}
            >
              {phoneIcon({})} {mailIcon({})}
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="right" sx={{ marginTop: 2 }}>
        <Pagination
          color="primary"
          count={Math.ceil(filteredTeachers.length / teachersPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};

export default TeacherPage;
