import { DesignCard } from "./components/DesignCard";
import { LogoCodelandia } from "./components/LogoCodelandia";

export function App() {
  return (
    <div className="w-[90%] mx-auto">
        <header className="my-6 flex flex-col items-center justify-center gap-12">
          <LogoCodelandia />
          <a href="#" className="inline-block w-[100%] py-5 border border-purple-500 rounded-md font-sans text-center text-gray-50 uppercase">
            Entrar na comunidade
          </a>
        </header>

        <main>
          <header className="mb-7">
            <span className="font-plex text-green-400 text-sm font-bold tracking-wider uppercase mb-2">
              Comunidade dev
            </span>
            <h1 className="font-plex text-left text-2xl font-semibold text-gray-50 mb-4">
              Projetos da comunidade Codelândia
            </h1>
            <p className="font-sans font-medium text-gray-300 text-left leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ligula, accumsan nec cursus in, eleifend sit amet dui.
            </p>
          </header>

          <section className="grid gap-6 mb-14"> 
            <DesignCard />       
            <DesignCard />  
            <DesignCard />  
            <DesignCard />    
          </section>
        </main>
    </div>
  )
}
