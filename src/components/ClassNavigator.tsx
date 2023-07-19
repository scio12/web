type Props = {
    children: React.ReactNode;
    currentClass: string;
    classList: string[]
}

export const ClassNavigator = ({ children, currentClass, classList }: Props) => {
    return (
        <footer
            className="sticky bottom-0 px-4 border-t border-solid w-full backdrop-blur-sm"
        >
            <div className="flex flex-wrap h-full md:w-[60%] items-center justify-between">

                <a
                    href="/"
                    className="ml-2 h-[inherit] flex items-center font-play font-semibold text-xl"
                >
                    <span>SCI</span>
                    {children}
                    <span className="ml-1">12</span>
                </a>
                <div className="flex gap-1 p-3">
                    <select className="min-w-[5.2em] min-h-[2.2em] border rounded-md" value={currentClass} onChange={(e) => {
                        document.location = `/skola/schedule/${e.target.value}`
                    }}>
                        <option value="">Pilih kelas</option>
                        {classList.map(className => <option key={className} value={className}>{className}</option>)}
                    </select>
                    <button className="p-[0.3em] bg-white border rounded-md" onClick={() => {
                        localStorage.removeItem("favorite-class");
                        document.location = "/skola/schedule"
                    }}>
                        Reset Favorit
                    </button>
                </div>
            </div>
        </footer>
    )
}