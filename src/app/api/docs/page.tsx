import { getApiDocs } from "@/app/lib/swagger";
import ReactSwagger from "./react-swagger";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "API Docs",
  description: "API Docs",
};
export default async function Page() {
  const spec = await getApiDocs();
  return (
    <section className="container">
      <ReactSwagger spec={spec} />
    </section>
  );
}
