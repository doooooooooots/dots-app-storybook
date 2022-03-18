import { styled, Tabs } from "@mui/material";

const HorizontalTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 20,
  boxShadow: `inset 0 -1px ${theme.palette.neutral[100]}`,
}));

export default HorizontalTabs;
