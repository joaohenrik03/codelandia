type DesignCardProps = {
    name: string;
    bio: string;
    demo: string;
    url: string;
}

export function DesignCard(props: DesignCardProps) {
    return(
        <div className="bg-stone-800 border border-purple-500 rounded-lg p-5 md:mb-4">
            <img 
                className="rounded-md h-[222px] w-full mb-4 object-cover" 
                src="https://source.unsplash.com/random" 
                alt="" 
            />

            <h2 className="font-plex font-medium text-xl md:text-2xl text-gray-50 text-left mb-4 md:mb-5">
                {props.name}
            </h2>
            <p className="font-medium text-gray-300 leading-7 text-left mb-6 md:mb-12 md:text-[18px]">
               {props.bio}
            </p>

            <div className="flex gap-2 md:justify-start">
                <a 
                    href={props.demo} 
                    className="flex-1 bg-green-400 border rounded-lg border-green-400 text-center uppercase font-sans font-bold color-stone-900 py-2 max-w-[165px]"
                    target="_blank"
                >
                    Demo
                </a>
                <a 
                    href={props.url} 
                    className="flex-1 border rounded-lg border-green-400 text-center uppercase font-sans font-bold text-gray-50 py-2 max-w-[165px]"
                    target="_blank"
                >
                    GitHub
                </a>
            </div>
        </div>
    )
}
