import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { clients } from "@/lib/constant";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center antialiased justify-center ">
        <Button
          size={"lg"}
          className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
            Start For Free Today
          </span>
        </Button>
        <h1 className="max-w-5xl text-center text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
          Automate Your Work With Fuzzie
        </h1>
        <InfiniteMovingCards
          className="mt-4 md:mt-8"
          items={clients}
          direction="right"
          speed="slow"
        />
      </section>
    </main>
  );
}
