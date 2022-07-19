type DesignCardProps = {
    name: string;
    bio: string;
    demo: string;
    url: string;
    imgSrc: string;
}

export function DesignCard(props: DesignCardProps) {
    const demoExists = props.demo.trim() === '';

    return (
        <div className="flex flex-col justify-between bg-stone-800 border border-purple-500 rounded-lg p-5 md:mb-4 min-h-[500px]">
            <div>
                <img
                    className="rounded-md h-[222px] w-full mx-auto mb-4 object-cover object-left smmd:max-w-[480px] md:max-w-full"
                    src={props.imgSrc}
                    alt="Foto do projeto"
                />
                <h2 className="font-plex font-medium text-xl md:text-2xl text-gray-50 text-left mb-4 md:mb-5">
                    {props.name}
                </h2>
                <p className="font-medium text-gray-300 leading-7 text-left  md:text-[18px] mb-4 md:mb-5">
                    {props.bio}
                </p>
            </div>

            <div className="flex gap-2 md:justify-start">
                {
                    demoExists ? (
                        <button
                            disabled
                            className="flex-1 bg-green-400 border rounded-lg border-green-400 text-center uppercase font-sans font-bold color-stone-900 py-2 max-w-[165px] opacity-50 cursor-not-allowed"
                        >
                            Demo
                        </button>

                    ) : (
                        <a
                            href={props.demo}
                            className="flex-1 bg-green-400 border rounded-lg border-green-400 text-center uppercase font-sans font-bold color-stone-900 py-2 max-w-[165px]"
                            target="_blank"
                        >
                            Demo
                        </a>
                    )
                }
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
