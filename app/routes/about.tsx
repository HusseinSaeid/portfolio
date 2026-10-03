import { Skills } from "~/components/Skills";
import Summary from "~/components/Summary";

export default function About() {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center px-6 py-20 font-audiowide lg:px-12 ">
      <Summary />
      <Skills />
    </section>
  );
}
