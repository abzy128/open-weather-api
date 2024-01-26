import { getApiDocs } from "@/app/lib/swagger";
import ReactSwagger from "./react-swagger";
import { ThemeProvider } from "@mui/material";
import { lightModeTheme } from "@/themes";

export default async function Page() {
  const spec = await getApiDocs();
  return (
    <main className="items-center justify-between p-24 pt-2">
      <section className="container">
        <ReactSwagger spec={spec} />
      </section>
    </main>
  );
}
