import Link from "next/link";
import Script from "next/script";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";

export default function Home() {
  async function getWeather(formData: FormData) {
    "use server";
    const cityName = formData.get("cityName");
    if (cityName == undefined) return;
    const weather = await fetch(
      `api/weather/current?cityName=${cityName}`
    ).then((res) => res.json());
    console.log(weather);
  }
  return (
    <main className="items-center justify-between p-24">
      <Paper component="div" square variant="outlined">
        <Grid container spacing={5} padding={4}>
          <Grid item padding={10}>
            <form id="cityForm" className="mb-3" action={getWeather}>
              <div className="mb-4">
                <TextField id="cityInput" label="City name" required />
              </div>
              <Button type="submit" variant="outlined">
                Get weather
              </Button>
            </form>
          </Grid>
          <Grid item padding={10}>
            <div></div>
          </Grid>
        </Grid>
      </Paper>
      <Grid container direction="column" paddingTop={2}>
        <Typography>Looking for API documentation?</Typography>
        <Link href="/api/docs" className="m-2">
          <Button variant="outlined">Swagger</Button>
        </Link>
      </Grid>
      <Script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      />
    </main>
  );
}
