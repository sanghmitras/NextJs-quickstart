import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 light:bg-background dark:bg-background">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4 items-center justify-center  border border-border rounded-md p-4 bg-muted">
          <div className="lg:text-3xl font-bold underline sm:text-xl  text-primary dark:text-muted-foreground text-center">
            Hello, I can be your Nextjs developer
          </div>
          <div className="text-sm text-primary dark:text-pink-500 flex gap-2 items-center">
            connect with me on Github:{" "}
            <ExternalLink
              className="w-4 h-4 cursor-pointer"
              href="https://www.linkedin.com/in/sanghmitra-singh-rathore/"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
