import { Paper, Typography, Grid } from "@mui/material";

export default function Footer() {
  return (
    <Paper
      component="footer"
      square
      variant="outlined"
      className="mt-[10%] fixed bottom-0 w-full"
    >
      <Grid 
        container 
        alignItems="center" 
        margin="16px"
        direction="column">
        <Typography>Abzal Orazbek</Typography>
        <Typography>IT-2204</Typography>
      </Grid>
    </Paper>
  );
}
