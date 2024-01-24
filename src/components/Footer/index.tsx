const data = {
    brandName: "Gereja Kristen Kemah Daud",
    brandLink: "#",
    routes: [
        { name: "About Us", path: "#" },
        { name: "Blog", path: "#" },
        // { name: "License", path: "#" },
    ],
}

export function Footer() {
    const { brandName, brandLink, routes } = data;
    const year = new Date().getFullYear();

    return (
        <footer className="flex justify-between items-center container mx-auto w-full py-2">
            <div className="flex w-full flex-wrap items-center px-2 justify-between">
                <p className="font-normal text-inherit text-xs md:text-sm ">
                    &copy;{year} {" "} {brandName || ""}
                </p>
                <ul className="flex items-center gap-4">
                    {routes.map(({ name, path }) => (
                        <li key={name}>

                            {name || ""}

                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
