import {Link} from "@nextui-org/react";

export default () => {
    const heroText = "Gakumas Calculator";
    const description = "Gakumas Calculator";
    const githubLink = "https://www.github.com/Ant00000ny/gakumas-calculator";

    return (
        <>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                     aria-hidden="true">
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{heroText}</h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#calculator"
                               className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                                started</a>
                            <Link isExternal color="foreground" href={githubLink} className="text-sm font-semibold leading-6 text-gray-900">
                                Star on Github
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true">
                </div>
            </div>
        </>
    )
}
