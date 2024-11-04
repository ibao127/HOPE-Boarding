import { Box } from "@mui/material";
import React from "react";
import { calendarIcon, clockIcon } from "../../assets/iconSVG";

const RenderRightComponent: React.FC<{
  label: string;
  subject: string;
  color: string;
}> = ({ color, label, subject }) => {
  const getTodayDate = (): string => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const generateRandomTime = (startHour: number, startMinute: number) => {
    const hour = startHour + Math.floor(Math.random() * 2);
    const minute = startMinute + Math.floor(Math.random() * 60);
    const endHour = hour + 1;
    const endMinute = minute;
    const formatTime = (hour: number, minute: number) => {
      const period = hour >= 12 ? "PM" : "AM";
      const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
      const formattedMinute = String(minute).padStart(2, "0");
      return `${formattedHour}:${formattedMinute} ${period}`;
    };
    return {
      startTime: formatTime(hour, minute),
      endTime: formatTime(endHour, endMinute),
    };
  };

  const RenderBox = ({
    subject,
    startHour,
    startMinute,
  }: {
    subject: string;
    startHour: number;
    startMinute: number;
  }) => {
    const { startTime, endTime } = generateRandomTime(startHour, startMinute);
    return (
      <Box
        sx={{
          display: "flex",
          backgroundColor: "white",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#1568B1",
            width: "6%",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          }}
        />
        <Box
          sx={{
            padding: "20px",
            width: "90%",
          }}
        >
          <Box
            sx={{
              color: "#000000",
              fontSize: "24px",
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            {subject}
          </Box>
          <Box sx={{ color: "#000000", fontSize: "18px", marginBottom: "10px" }}>
            Lớp: 11A3
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
          >
            {calendarIcon({ width: 24, height: 24, color: "#000000" })}
            <Box sx={{ marginLeft: "10px", color: "#000000", fontSize: "16px" }}>
              {getTodayDate()}
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {clockIcon({ width: 24, height: 24, color: "#000000" })}
            <Box sx={{ marginLeft: "10px", color: "#000000", fontSize: "16px" }}>
              {startTime} - {endTime}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  const subjects = Array(4).fill(subject);
  let startHour = 9;
  let startMinute = 0;

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{ backgroundColor: color, padding: "20px", borderRadius: "20px" }}
      >
        <Box
          sx={{
            color: "#000000",
            fontSize: "24px",
            fontWeight: "700",
            marginBottom: "10px",
          }}
        >
          {label}
        </Box>
        <Box sx={{ color: "white", fontSize: "14px" }}>
          Hôm nay, {getTodayDate()}
        </Box>
      </Box>
      <Box>
        {/* Render here */}
        <Box sx={{ width: "100%", marginTop: "10px" }}>
          {subjects.map((subject, index) => {
            const box = (
              <RenderBox
                key={index}
                subject={subject}
                startHour={startHour}
                startMinute={startMinute}
              />
            );
            startHour += 1; // Ensure the next time is later
            return box;
          })}
        </Box>
      </Box>
      <Box
        sx={{
          color: "white",
          fontSize: "18px",
          backgroundColor: "black",
          borderRadius: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingY: "15px",
        }}
      >
        Xem thêm
      </Box>
    </Box>
  );
};

export default RenderRightComponent;
