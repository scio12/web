import { useState } from "react";

type ListProp = {
    name: string;
    href: string;
}

export const Navbar: React.FC<{ children: React.ReactNode, lists: ListProp[] }> = ({
    children,
    lists
}) => {
    const [isListVisible, setListVisible] = useState(false);

    return (
        <nav
            className="flex fixed top-0 flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg bg-white border-b border-solid border-zinc-200 z-10">
            <div className="h-[inherit]">
                <a className="ml-2 h-[inherit] flex items-center font-play font-semibold text-xl"
                    href="/"
                >
                    <span>SCI</span>
                    {children}
                    <span className="ml-1">12</span>
                </a>
            </div>

            <button
                className="text-xl h-6 w-6 cursor-pointer md:hidden block lg:transform lg:-translate-y-1"
                onClick={() => {
                    setListVisible(!isListVisible);
                }}>
                &#8801;
            </button>

            <div className={`${isListVisible ? "" : "hidden"} w-full md:flex md:items-center md:w-auto`}>
                <ul
                    className="pt-4 text-base text-gray-500 md:flex md:justify-between md:pt-0"
                >
                    {lists.map(list => <li key={list.href}>
                        <a className="md:p-4 py-2 block hover:text-black" href={list.href}>{list.name}</a>
                    </li>)}
                </ul>
            </div>
        </nav>
    )
}
