const Navbar = () => {
    return (
        <div className="sticky top-0 z-50">
            <div className="mx-[120px] bg-[var(--basecolor)] py-4 ">
                <div className="flex justify-between items-center">
                    <div>
                        <h2>Viral<span>Script</span>Library</h2>
                    </div>
                    <ul className="flex justify-between items-center gap-4">
                        <li>Home</li>
                        <li>Scripts
                        </li>
                        <li>How It Works
                        </li>
                        <li>Templates
                        </li>
                        <li>Pricing
                        </li>
                        <li>AI Generator</li>
                    </ul>
                </div>

            </div>
            <hr className="opacity-30"/>

        </div>
    )
}


export default Navbar;