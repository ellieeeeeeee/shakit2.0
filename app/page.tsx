"use client";
//클라이언트 구성 요소, 즉 브라우저에서 실행되도록 의도
import { Box, Container, Typography } from "@mui/material";
import styled from "styled-components";
import FeedList from "./component/FeedList";

export default function Home() {
  return (
    <Box>
      <Banner height={435} width="100%" sx={{ backgroundColor: "background.paper" }}></Banner>
      <Container maxWidth="lg">
        <FeedList />
      </Container>
    </Box>
  );
}
const Banner = styled(Box)``;
