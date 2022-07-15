import { LogoCodelandia } from "./components/LogoCodelandia";

export function App() {
  return (
    <div className="w-[90%] mx-auto">
        <header className="mt-6 flex flex-col items-center justify-center gap-12">
          <LogoCodelandia />
          <a href="#" className="inline-block w-[100%] py-5 border border-purple-500 rounded-md font-sans text-center text-gray-50 text-base uppercase">
            Entrar na comunidade
          </a>
        </header>
    </div>
  )
}
