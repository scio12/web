import { useState, useEffect } from "react";

export const Navbar: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isHidden, setHidden] = useState(true);

    useEffect(() => {
        const sectionSiapaKami = document.querySelector("#siapa-kami")!;

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2, // 15% threshold
        };

        const observer = new IntersectionObserver((entries) =>
            entries.forEach((entry) =>
                setHidden(!entry.isIntersecting)
            ), options);

        observer.observe(sectionSiapaKami);

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <nav className={`${isHidden ? "hidden" : ""} z-50 fixed top-0 h-14 w-screen bg-white border-b border-solid`}>
            <div className="flex w-full flex-wrap items-center justify-between px-3 h-full">
                <div className="ml-2 flex items-center font-play font-semibold text-xl">
                    <span>SCI</span>
                    {children}
                    <span className="ml-1">12</span>
                </div>
            </div>
        </nav>
    )
}