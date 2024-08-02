import { lusitana } from "./ui/fonts";

export default function Home() {
  return (
    <div className="flex-grow flex flex-col justify-center items-center px-4 md:px-10 py-10 md:py-20">
      <h1
        className={`${lusitana.className} text-2xl text-center md:text-white md:text-6xl`}
      >
        Join the blogging community
      </h1>
      <em className="text-white mt-4 text-center text-md px-4 md:mx-12 md:text-2xl">
        -{" "}
        <q>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
          similique neque. Nisi saepe officia facere assumenda et necessitatibus
          labore esse? Error sint, cupiditate omnis perferendis illum porro ab
          sequi nisi
        </q>
      </em>
    </div>
  );
}
