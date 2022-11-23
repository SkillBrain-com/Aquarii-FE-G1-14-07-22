import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const StyledCell = styled(Paper)((props) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
});
