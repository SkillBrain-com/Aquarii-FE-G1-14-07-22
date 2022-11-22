import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export const AppTitle = styled(Typography)((props) => {
  const { theme } = props;

  return {
    fontSize: 20,
    color: theme.palette.primary.main,
    marginTop: "20px",
    lineHeight: "20px"
  };
});

export const BootstrapButton = styled(Button)((props) => {
  const { greenBg } = props;

  return {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: greenBg ? "green" : "#0069d9",
    borderColor: "#0063cc",
    color: "#fff",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      backgroundColor: greenBg ? "green" : "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  };
});
