import { DesignCard } from "./components/DesignCard";
import { KeyAndParenthesesIcon } from "./components/KeyAndParenthesesIcon";
import { LogoCodelandia } from "./components/LogoCodelandia";

import rachiImg from "./assets/rachi.png";
import helpdogImg from "./assets/helpdog.png";

export function App() { 
  const projects = [
    {
      name: 'Rachi',
      bio: 'Página no formato One Page, responsiva, para usar em diversos tipos de micro, pequena e média empresas.',
      demo: 'https://joaohenrik03.github.io/rachi/',
      url: 'https://github.com/joaohenrik03/rachi',
      imgSrc: rachiImg,
    },
    {
      name: 'HelpDog',
      bio: 'Página para arrecadar doações para cães.',
      demo: 'https://help-dog.vercel.app/',
      url: 'https://github.com/joaohenrik03/help-dog',
      imgSrc: helpdogImg,
    },
  ];

  return (
    <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto pb-36">
        <header className="mt-6 mb-12 md:mt-12 md:mb-24 flex flex-col items-center gap-12 md:flex-row justify-between">
          <LogoCodelandia />
          <nav className="w-full md:w-auto gap-16 flex items-center justify-between">
            <a href="https://github.com/joaohenrik03" className="hidden text-gray-50 uppercase md:inline-block" target="_blank">
              Meu GitHub
            </a>
            <a href="https://discord.gg/wNCWTVuxyz" className="inline-block w-[100%] md:w-64 py-5 border border-purple-500 rounded-md font-sans text-center text-gray-50 uppercase" target="_blank">
              Entrar na comunidade
            </a>
          </nav>
        </header>

        <main>
          <header className="mb-7 md:mb-32 lg:max-w-[800px]">
            <span className="font-plex text-green-400 text-md font-bold tracking-wider uppercase mb-2 md:text-2xl md:mb-3">
              Comunidade dev
            </span>
            <h1 className="font-plex text-left text-2xl font-semibold text-gray-50 mb-4 md:text-6xl md:mb-8">
              Projetos da comunidade Codelândia
            </h1>
            <p className="font-sans font-medium text-gray-300 text-left leading-5 md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ligula, accumsan nec cursus in, eleifend sit amet dui.
            </p>
          </header>

          <section className="grid gap-6 mb-14 md:grid-cols-2 md:mb-36"> 
            {
              projects.map(project => (
                <DesignCard 
                  name={project.name}
                  bio={project.bio}
                  demo={project.demo}
                  url={project.url}
                  imgSrc={project.imgSrc}
                />   
              ))
            }
          </section>
        </main>

        <footer className="md:flex md:items-center md:justify-between">
          <i className="flex justify-center mb-6">
            <KeyAndParenthesesIcon />  
          </i>
          <div className="w-full md:w-auto flex justify-center gap-8 md:gap-12 mx-auto md:mx-0">
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
