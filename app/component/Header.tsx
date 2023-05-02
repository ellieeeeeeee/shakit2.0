import { Box, Container, Link, Stack, Typography, styled } from "@mui/material";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <HeaderArea>
      <Container>
        <HeaderInfo>
          <Image src="/logo.png" alt="logo" width={150} height={46} />
          <Stack direction="row" spacing={2}>
            <Link variant="h5">로그인/회원가입</Link>
            <Link variant="h5">주문/배송</Link>
            <Link variant="h5">장바구니 0</Link>
          </Stack>
        </HeaderInfo>
        <Gnb>
          <Link variant="h3">쉐이킷 키트</Link>
          <Link variant="h3">나만의 키트</Link>
          <Link variant="h3">칵테일 재료</Link>
          <Link variant="h3">칵테일 용품</Link>
          <Link variant="h3">스웰쳐</Link>
          <Link variant="h3" className="feed">
            피드
          </Link>
          <Link variant="h3">이벤트</Link>
        </Gnb>
      </Container>
    </HeaderArea>
  );
}
const HeaderArea = styled(Box)(({ theme }) => ({
  background: "#fff",
}));

const HeaderInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "83px",
  a: {
    color: "#000 ",
    padding: "0 16px",
    margin: "0 !important",
    ":nth-child(2)": {
      borderLeft: "1px solid #d9d9d9",
      borderRight: "1px solid #d9d9d9",
    },
  },
}));
const Gnb = styled(Stack)(({ theme }) => ({
  display: "inline-block",
  padding: "23px 0 33px",
  a: {
    fontWeight: 700,
    "+ a": {
      marginLeft: "40px",
    },
  },
  ".feed": {
    color: theme.palette.primary.main,
    paddingLeft: "40px",
    borderLeft: "1px solid #d9d9d9",
  },
}));
