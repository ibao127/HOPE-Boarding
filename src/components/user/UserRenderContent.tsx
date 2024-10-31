import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  StudentAvatar,
  UserContactData,
  UserMessageData,
} from "../../services/renderData";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid2";
import { sendIcon } from "../../assets/iconSVG";

const UserRenderContent: React.FC<{
  label: string;
  des: string;
  data: number;
}> = ({ data, des, label }) => {
  const [renderData, setRenderData] = useState<any[]>([]);

  useEffect(() => {
    switch (data) {
      case 0:
        setRenderData(UserContactData);
        break;
      case 1:
        setRenderData(UserMessageData);
        break;
    }
  }, [data]);

  return (
    <Box sx={{ padding: "10px" }}>
      <Grid container>
        <Grid size={9}>
          <Box>
            <Box sx={{ fontSize: "20px", fontWeight: "bold" }}>{label}</Box>
            <Box sx={{ color: "#818181", fontSize: "18px", marginTop: "5px" }}>
              {des}
            </Box>
          </Box>
        </Grid>
        <Grid
          size={3}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {/* circle button color blue with content is + */}
          <Button
            sx={{
              backgroundColor: "#1568B1",
              color: "white",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              fontSize: "30px",
              minWidth: "50px",
            }}
          >
            +
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ marginY: "20px" }}>
        <TextField
          variant="outlined"
          placeholder="Tìm kiếm"
          sx={{
            backgroundColor: "white",
            borderRadius: "30px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
            style: {
              backgroundColor: "white",
              borderRadius: "200px",
            },
          }}
          fullWidth
        />
      </Box>
      <Box>
        {data === 0 &&
          renderData.map((student, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={StudentAvatar[index % StudentAvatar.length]}
                  alt={student.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {student.name}
                  </Typography>
                  <Typography sx={{ color: "#818181" }}>
                    {student.class}
                  </Typography>
                </Box>
              </Box>
              <Box>{sendIcon({ width: 24, height: 24, color: "#1568B1" })}</Box>
            </Box>
          ))}
        {data === 1 &&
          renderData.map((message, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <img
                src={StudentAvatar[0]} // Use the first avatar for all messages
                alt={message.name}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <Box sx={{ flex: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    {message.name}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{ color: "#1568B1", fontWeight: "normal" }}
                  >
                    2 giờ trước
                  </Typography>
                </Box>
                <Typography sx={{ color: "#818181" }}>
                  {message.message}
                </Typography>
              </Box>
            </Box>
          ))}
      </Box>
      <Box>
        <Button
          fullWidth
          sx={{
            backgroundColor: "#000000",
            color: "white",
            paddingY: "10px",
            borderRadius: "50px",
          }}
        >
          Xem thêm
        </Button>
      </Box>
    </Box>
  );
};

export default UserRenderContent;
