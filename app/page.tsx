import { lusitana } from "./ui/fonts";

export default function Home() {
  return (
    <div className="flex-grow flex flex-col justify-evenly items-center">
      <h1 className={` ${lusitana.className} text-white text-6xl `}>
        Join the blogging community
      </h1>
      <em className="text-white mx-12 flex text-2xl">
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
