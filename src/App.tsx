import { DesignCard } from "./components/DesignCard";
import { KeyAndParenthesesIcon } from "./components/KeyAndParenthesesIcon";
import { LogoCodelandia } from "./components/LogoCodelandia";

export function App() { //md
  return (
    <div className="w-[90%] mx-auto pb-36">
        <header className="mt-6 mb-12 md:mt-12 md:mb-24 flex flex-col items-center gap-12 md:flex-row justify-between">
          <LogoCodelandia />
          <nav className="w-full md:w-auto gap-16 flex items-center justify-between">
            <a href="#" className="hidden text-gray-50 uppercase md:inline-block">
              Meu GitHub
            </a>
            <a href="#" className="inline-block w-[100%] md:w-64 py-5 border border-purple-500 rounded-md font-sans text-center text-gray-50 uppercase">
              Entrar na comunidade
            </a>
          </nav>
        </header>

        <main>
          <header className="mb-7">
            <span className="font-plex text-green-400 text-md font-bold tracking-wider uppercase mb-2">
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

        <footer>
          <i className="flex justify-center mb-6">
            <KeyAndParenthesesIcon />  
          </i>
          <div className="w-full flex justify-center gap-8 mx-auto">
            <span className="text-gray-300 font-plex text-md">
              © 2022 - João Henrik
            </span>
            <span className="text-gray-300 font-plex text-md">
              Codelândia
            </span>
          </div>
        </footer>
    </div>
  )
}
