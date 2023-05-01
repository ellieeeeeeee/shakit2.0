"use client";
import { Box } from "@mui/material";
//클라이언트 구성 요소, 즉 브라우저에서 실행되도록 의도

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <Grid container alignItems="center" justifyContent="center" direction="column">
      <Box height={435}></Box>
      <Stack direction="row" columnGap={1}>
        <Button variant="text" className="text-red-500 bg-gray-200">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <a href="/feed"> 피드 이동</a>
      </Stack>
    </Grid>
  );
}
