import { Box, useTheme } from "@mui/material";
import React from "react";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";

function Geography() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="GEOGRAPHY CHART" subtitle="A simple geography chart" />
      <Box
        height="75vh"
        borderRadius="4px"
        border={`1px solid ${colors.grey[100]}`}
      >
        <GeographyChart />
      </Box>
    </Box>
  );
}

export default Geography;
