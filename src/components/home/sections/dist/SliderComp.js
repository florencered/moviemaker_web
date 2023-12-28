import { Slider } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";

const marks = [
  {
    value: 0,
    label: "0 Km",
  },
  {
    value: 100,
    label: "100 Km",
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function Radius() {
  return (
    <Box sx={{ width: { lg: 500, md: 450, sm:300, xs:380 } }}>
      <div className="bg-[#F7EAA9] p-10 rounded-xl shadow-slate-500 shadow-md">
        <Slider
          sx={{
            "& .MuiSlider-thumb": {
              color: "black",
            },
            "& .MuiSlider-track": {
              color: "black",
            },
            "& .MuiSlider-rail": {
              color: "#acc4e4",
            },
            "& .MuiSlider-active": {
              color: "black",
            },
            "& .MuiSlider-valueLabel": {
              fontSize: 12,
              fontWeight: "bold",
              top: -6,
              backgroundColor: "unset",
              color: "black",
              "&:before": {
                display: "none",
              },
              "& *": {
                background: "transparent",
                color: "black",
              },
            },
          }}
          size="small"
          defaultValue={10}
          getAriaValueText={valuetext}
          marks={marks}
          aria-label="Small"
          valueLabelDisplay="auto"
          min={0}
          max={100}
        />
      </div>
    </Box>
  );
}
