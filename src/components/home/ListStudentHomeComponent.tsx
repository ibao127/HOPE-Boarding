import React, { useState } from "react";
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Pagination,
  Chip,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  extendedHomeListStudent,
  StudentAvatar,
} from "../../services/renderData";
import { StudentHomeProps } from "../../services/typeProps";
import { printIcon, threeDotsIcon } from "../../assets/iconSVG";

const ListStudentHomeComponent = () => {
  const [selectedClass, setSelectedClass] = useState<string>("11a1");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const studentsPerPage = 5;

  const handleClassChange = (event: SelectChangeEvent<string>) => {
    setSelectedClass(event.target.value);
    setCurrentPage(1); // Reset to first page when class changes
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const filteredStudents = extendedHomeListStudent.filter(
    (student) => student.class === selectedClass
  );

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents: StudentHomeProps[] = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  return (
    <Box>
      <Box sx={{ backgroundColor: "white", borderRadius: "20px", padding: 2 }}>
        <Grid container size={12} display={"flex"} alignItems={"center"}>
          <Grid size={{ md: 8, xs: 12 }}>
            <Typography variant="h5" gutterBottom>
              Học sinh chưa đóng phí học kỳ I/2023
            </Typography>
          </Grid>
          <Grid
            size={{ md: 4, xs: 12 }}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Select
              value={selectedClass}
              onChange={handleClassChange}
              displayEmpty
              sx={{ marginBottom: 2, borderRadius: "50px", width: "80%" }}
            >
              {Array.from(
                new Set(extendedHomeListStudent.map((student) => student.class))
              ).map((className) => (
                <MenuItem key={className} value={className}>
                  {className}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Box sx={{ overflowX: "auto" }}>
          <Box sx={{ minWidth: "800px" }}>
            {currentStudents.map((student, index) => (
              <Grid
                container
                key={student.id}
                sx={{
                  marginBottom: 1,
                  padding: 1,
                  alignItems: "center",
                }}
              >
                <Grid size={1}>
                  <img
                    src={StudentAvatar[index % StudentAvatar.length]}
                    alt={student.name}
                    style={{
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                    }}
                  />
                </Grid>
                <Grid size={3}>
                  <Typography>{student.name}</Typography>
                </Grid>
                <Grid size={2}>
                  <Typography>{student.id}</Typography>
                </Grid>
                <Grid size={2}>
                  <Chip
                    label={student.class}
                    variant="filled"
                    color="warning"
                  />
                </Grid>
                <Grid size={2}>
                  <Typography>{student.fee}</Typography>
                </Grid>
                <Grid container size={2}>
                  <Grid size={6}>{printIcon({})}</Grid>
                  <Grid size={6}>{threeDotsIcon({})}</Grid>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Box>
      </Box>
      <Grid container size={12} display={"flex"} alignItems={"center"}>
        <Grid size={6}>Showing 1-5 from 100 data</Grid>
        <Grid size={6} display={"flex"} justifyContent={"flex-end"}>
          <Pagination
            count={Math.ceil(filteredStudents.length / studentsPerPage)}
            page={currentPage}
            color="primary"
            onChange={handlePageChange}
            sx={{ marginTop: 2 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ListStudentHomeComponent;
