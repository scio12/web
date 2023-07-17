import { useState, useEffect } from "react";

const navItems = [
    { display: "Siapa Kami?", section: "siapa-kami", onHover: "hover:text-green-500" },
    { display: "Divisi", section: "divisi", onHover: "hover:text-yellow-400" },
    { display: "Kontak", section: "kontak", onHover: "hover:text-red-500" },
];


export const Navbar: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isHidden, setHidden] = useState(true);
    const [isListVisible, setListVisible] = useState(false);

    useEffect(() => {
        const sectionSiapaKami = document.querySelector("#hero")!;

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) =>
            entries.forEach((entry) => {
                setHidden(entry.isIntersecting);

                if (entry.isIntersecting) setListVisible(false)
            }), options);

        observer.observe(sectionSiapaKami);

        return () => {
            observer.disconnect()
        }
    }, []);


    return (
        <nav
            className={`${isHidden ? "hidden" : "flex"} fixed top-0 flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg bg-white border-b border-solid z-10`}>
            <div className="h-[inherit]">
                <button className="ml-2 h-[inherit] flex items-center font-play font-semibold text-xl"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    <span>SCI</span>
                    {children}
                    <span className="ml-1">12</span>
                </button>
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
                    className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0"
                >
                    <li>
                        <a className="md:p-4 py-2 block hover:text-cyan-600" href="/skola">Pojok Sekolah</a>
                    </li>
                    {navItems.map(nav => (
                        <li key={nav.section}>
                            <button onClick={() => {
                                const element = document.querySelector(
                                    `#${nav.section}`
                                );

                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });

                                    if (isListVisible) setListVisible(false)
                                }
                            }} className={`md:p-4 py-2 block ${nav.onHover}`}>{nav.display}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
