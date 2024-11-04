import React, { useState } from "react";
import TopLayout from "../components/TopLayout";
import {
  Badge,
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { clubs } from "../services/renderData";
import Grid from "@mui/material/Grid2";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NKPage = () => {
  return (
    <TopLayout>
      <Main />
    </TopLayout>
  );
};

const Main: React.FC = () => {
  const statusOptions = ["ĐÃ ĐẾN LỚP", "VẮNG", "ĐI MUỘN"];

  const [clubData, setClubData] = useState<{
    [key: string]: (typeof clubs)[keyof typeof clubs];
  }>(clubs);

  const [notifications, setNotifications] = useState<
    { message: string; status: string }[]
  >([]);
  const [open, setOpen] = useState(false);

  const handleStatusChange = (
    clubName: string,
    studentId: string,
    newStatus: string
  ) => {
    setClubData((prevData) => {
      const updatedClubs = { ...prevData };
      const club = updatedClubs[clubName];
      const student = club.students.find((s) => s.id === studentId);
      if (student) {
        student.status = newStatus;
        setNotifications((prev) => [
          ...prev,
          {
            message: `Học sinh ${student.name} của ${clubName} đổi trạng thái thành`,
            status: newStatus,
          },
        ]);
      }
      return updatedClubs;
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ĐÃ ĐẾN LỚP":
        return "green";
      case "VẮNG":
        return "red";
      default:
        return "orange";
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNotifications([]);
  };

  return (
    <Box>
      {/* NK */}
      <Box sx={{ marginTop: 2, padding: "20px" }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ marginBottom: "40px" }}
        >
          <Typography variant="h4">Ngoại khóa học sinh</Typography>
          <IconButton color="inherit" onClick={handleClickOpen}>
            <Badge badgeContent={notifications.length} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Grid>
        {Object.entries(clubData).map(([clubName, club]) => (
          <Box key={clubName} sx={{ marginBottom: 4 }}>
            <Box sx={{ color: "#EE7223", fontSize: "24px", marginBottom: 2 }}>
              {club.name}
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Tên</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Trạng thái
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {club.students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.id}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>
                        <Select
                          value={student.status}
                          onChange={(e) =>
                            handleStatusChange(
                              clubName,
                              student.id,
                              e.target.value as string
                            )
                          }
                          sx={{
                            color: getStatusColor(student.status),
                            "& .MuiSelect-icon": {
                              color: getStatusColor(student.status),
                            },
                          }}
                        >
                          {statusOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ))}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Notifications</DialogTitle>
          <DialogContent>
            {notifications.length === 0 ? (
              <DialogContentText>No notifications</DialogContentText>
            ) : (
              notifications.map((notification, index) => (
                <DialogContentText key={index}>
                  {notification.message}{" "}
                  <span style={{ color: getStatusColor(notification.status) }}>
                    {notification.status}
                  </span>
                </DialogContentText>
              ))
            )}
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default NKPage;
