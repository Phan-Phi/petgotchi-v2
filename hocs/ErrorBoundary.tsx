import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Container, styled, Typography, Stack } from "@mui/material";

type ErrorBoundaryWrapperProps = {
  children?: React.ReactNode;
};

const ErrorBoundaryWrapper = ({ children }: ErrorBoundaryWrapperProps) => {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
};

function ErrorFallback() {
  return (
    <WrapperContainer>
      <WrapperStack spacing={2}>
        <Text variant="h6">
          Hệ thống hiện đã có lỗi,
          <br /> xin vui lòng thử lại sau.
        </Text>
      </WrapperStack>
    </WrapperContainer>
  );
}

export default ErrorBoundaryWrapper;

const WrapperContainer = styled(Container)(({ theme }) => {
  return {
    margin: "auto",
    width: "100vw",
    height: "100vh",
    maxHeight: "-webkit-fill-available",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});

const WrapperStack = styled(Stack)(({ theme }) => {
  return {
    justifyContent: "center",
    alignItems: "center",
  };
});

const Text = styled(Typography)(({ theme }) => {
  return {
    textAlign: "center",
  };
});
