export function DesignCard() {
    return(
        <div className="bg-stone-800 border border-purple-500 rounded-lg p-5">
            <img 
                className="rounded-md max-h-[222px] w-full mb-4 object-cover" 
                src="https://source.unsplash.com/random" 
                alt="" 
            />

            <h2 className="font-plex font-medium text-2xl text-gray-50 text-left mb-4">
                Nome do projeto 1
            </h2>
            <p className="font-medium text-gray-300 leading-7 text-left mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ligula, accumsan nec cursus in, eleifend sit amet dui.
            </p>

            <div className="flex gap-2">
                <a 
                    href="#" 
                    className="flex-1 bg-green-400 border rounded-lg border-green-400 text-center uppercase font-sans font-bold color-stone-900 py-2"
                >
                    Demo
                </a>
                <a 
                    href="#" 
                    className="flex-1 border rounded-lg border-green-400 text-center uppercase font-sans font-bold text-gray-50 py-2"
                >
                    GitHub
                </a>
            </div>
        </div>
    )
}
