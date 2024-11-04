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
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import TopLayout from "../components/TopLayout";
import { StudentList } from "../services/renderData";
import Grid from "@mui/material/Grid2";
import SearchIcon from "@mui/icons-material/Search";
import { mailIcon, phoneIcon, threeDotsIcon } from "../assets/iconSVG";
import { useNavigate } from "react-router";

const StudentPage = () => {
  return (
    <TopLayout>
      <Main />
    </TopLayout>
  );
};

const Main: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedClass, setSelectedClass] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const studentsPerPage = 10;
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleClassChange = (event: SelectChangeEvent<string>) => {
    setSelectedClass(event.target.value as string);
    setCurrentPage(1); // Reset to first page when class changes
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const handleRowClick = (student: any) => {
    navigate(`/students/${student.name}`, { state: { student } });
  };

  const handleNewStudentClick = () => {
    navigate("/addstudents");
  };

  const students = StudentList; // Add this line to define students
  const filteredStudents = students.filter((student) => {
    const matchesSearchQuery =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.includes(searchQuery);
    const matchesClass =
      selectedClass === "All" || student.class === selectedClass;
    return matchesSearchQuery && matchesClass;
  });

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

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
        Học sinh
      </Box>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ marginBottom: "20px" }}
      >
        <Grid size={6}>
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
              width: "50%",
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
        <Grid size={6} container>
          <Grid size={8} display="flex" justifyContent="flex-end">
            <Select
              fullWidth
              value={selectedClass}
              onChange={handleClassChange}
              displayEmpty
              sx={{
                width: "50%",
                backgroundColor: "white",
                borderRadius: "30px",
                borderColor: "#1568B1",
              }}
            >
              <MenuItem value="All">All Classes</MenuItem>
              {Array.from(
                new Set(StudentList.map((student) => student.class))
              ).map((className) => (
                <MenuItem key={className} value={className}>
                  {className}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid size={4} display="flex" justifyContent="flex-end">
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ borderRadius: "40px" }}
              onClick={handleNewStudentClick}
            >
              + New Student
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ background: "white", padding: "10px", borderRadius: "10px" }}>
        <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ color: "black", fontSize: "18px", fontWeight: "700" }}
                >
                  Tên học sinh
                </TableCell>
                <TableCell
                  sx={{ color: "#1568B1", fontSize: "18px", fontWeight: "700" }}
                >
                  Mã học sinh
                </TableCell>
                <TableCell
                  sx={{ color: "#818181", fontSize: "18px", fontWeight: "700" }}
                >
                  Ngày sinh
                </TableCell>
                <TableCell
                  sx={{ color: "black", fontSize: "18px", fontWeight: "700" }}
                >
                  Tên người giám hộ
                </TableCell>
                <TableCell
                  sx={{ color: "black", fontSize: "18px", fontWeight: "700" }}
                >
                  Quê quán
                </TableCell>
                <TableCell
                  sx={{ color: "black", fontSize: "18px", fontWeight: "700" }}
                >
                  Liên lạc
                </TableCell>
                <TableCell
                  sx={{ color: "black", fontSize: "18px", fontWeight: "700" }}
                >
                  Lớp
                </TableCell>
                <TableCell
                  sx={{ color: "black", fontSize: "18px", fontWeight: "700" }}
                >
                  Chi tiết
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentStudents.map((student) => (
                <TableRow
                  key={student.id}
                  onClick={() => handleRowClick(student)}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell
                    sx={{ color: "black", fontSize: "18px", fontWeight: "700" }}
                  >
                    {student.name}
                  </TableCell>
                  <TableCell sx={{ color: "#1568B1" }}>{student.id}</TableCell>
                  <TableCell sx={{ color: "#818181" }}>{student.dob}</TableCell>
                  <TableCell>{student.parentName}</TableCell>
                  <TableCell>{student.hometown}</TableCell>
                  <TableCell>
                    {phoneIcon({})} {mailIcon({})}
                  </TableCell>
                  <TableCell>
                    <Chip label={student.class} color="warning" />
                  </TableCell>
                  <TableCell align="center">{threeDotsIcon({})}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box display="flex" justifyContent="flex-end" sx={{ marginTop: 2 }}>
          <Pagination
            color="primary"
            count={Math.ceil(filteredStudents.length / studentsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default StudentPage;
