import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Typography
        component="p"
        variant="h6"
        textAlign="center"
        bgcolor="#f7f7f7"
        color="primary"
        padding="10px"
        mt={10}
      >
        پروژه وبلاگ با GraphQl | React
      </Typography>
    </footer>
  );
}

export default Footer;
