import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Button variant="outlined">
          <Link href="/api/docs">Swagger</Link>
        </Button>
      </div>
    </main>
  );
}
