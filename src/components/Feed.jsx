import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Videos, Sidebar } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`/search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items))
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          varaint="body2"
          sx={{ mt: "1.5", color: "#fff" }}
        >
          Copyright AsheerHameed
        </Typography>
      </Box>

      <Box p={2} sx={{ overFlowY: "auto", flex: 2, height: "90vh" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#df2517" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
