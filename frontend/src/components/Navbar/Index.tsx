import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Index = () => {
    const NavbarActionData = {};

    const [scrollPosition, setScrollPosition] = useState(0);
    const [navbarBgColor, setNavbarBgColor] = useState(
        "backdrop-blur-lg  bg-gray-500/70"
    );

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Set navbar background color based on scroll position
        if (scrollPosition > 100) {
            setNavbarBgColor("bg-gray-500/70");
        } else {
            setNavbarBgColor("backdrop-blur-lg  bg-gray-500/70");
        }
    }, [scrollPosition]);

    return (
        <div>
            <nav
                className={` ${navbarBgColor} transition-colors duration-200 ease-in flex-no-wrap flex w-full items-center justify-between relative z-10 mb-14 py-2 shadow-dark-mild dark:bg-surface-dark lg:flex-wrap lg:justify-start lg:py-4`}
            >
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <button
                        className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                        type="button"
                        data-twe-collapse-init
                        data-twe-target="#navbarSupportedContent12"
                        aria-controls="navbarSupportedContent12"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200"></span>
                    </button>

                    <div
                        className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                        id="navbarSupportedContent12"
                        data-twe-collapse-item
                    >
                        <a
                            className="mb-4 me-5 ms-2 mt-3 flex items-center lg:mb-0 lg:mt-0"
                            href=""
                        >
                            {/* Logo goes here */}
                        </a>

                        <ul
                            className="list-style-none me-auto flex flex-col ps-0 lg:flex-row "
                            data-twe-navbar-nav-ref
                        >
                            <li
                                className="mb-4 lg:mb-0 lg:pe-2 "
                                data-twe-nav-item-ref
                            >
                                <a
                                    className="text-white font-bold transition duration-200 hover:ease-in-out motion-reduce:transition-none lg:px-2"
                                    href="#"
                                    data-twe-nav-link-ref
                                >
                                    Link 1
                                </a>
                            </li>

                            <li
                                className="mb-4 lg:mb-0 lg:pe-2"
                                data-twe-nav-item-ref
                            >
                                <a
                                    className="text-white font-bold transition duration-200 hover:ease-in-out motion-reduce:transition-none lg:px-2"
                                    href="#"
                                    data-twe-nav-link-ref
                                >
                                    Link 2
                                </a>
                            </li>

                            <li
                                className="mb-4 lg:mb-0 lg:pe-2"
                                data-twe-nav-item-ref
                            >
                                <a
                                    className="text-white font-bold transition duration-200 hover:ease-in-out motion-reduce:transition-none lg:px-2"
                                    href="#"
                                    data-twe-nav-link-ref
                                >
                                    Link 3
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="relative flex items-center">
                        <a
                            className="me-4 text-secondary-500 transition duration-200 hover:text-secondary-600/70 hover:ease-in-out focus:text-secondary-600/70 active:text-secondary-600/70 motion-reduce:transition-none dark:text-secondary-500 dark:hover:text-secondary-500/80 dark:focus:text-secondary-500/80 dark:active:text-secondary-500/80"
                            href="#"
                        >
                            <span className="[&>svg]:w-5">
                                <ShoppingCartIcon className="text-white " />
                            </span>
                        </a>

                        <div
                            className="relative"
                            data-twe-dropdown-ref
                            data-twe-dropdown-alignment="end"
                        >
                            <a
                                className="me-4 flex items-center text-secondary-500 transition duration-200 hover:text-secondary-600/70 hover:ease-in-out focus:text-secondary-600/70 active:text-secondary-600/70 motion-reduce:transition-none dark:text-secondary-500 dark:hover:text-secondary-500/80 dark:focus:text-secondary-500/80 dark:active:text-secondary-500/80"
                                href="#"
                                id="dropdownMenuButton1"
                                role="button"
                                data-twe-dropdown-toggle-ref
                                aria-expanded="false"
                            >
                                <span className="[&>svg]:w-5">
                                    <NotificationsIcon className="text-white " />
                                </span>

                                <span className="absolute -mt-4 ms-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white bg-red-500">
                                    1
                                </span>
                            </a>

                            <ul
                                className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                                aria-labelledby="dropdownMenuButton1"
                                data-twe-dropdown-menu-ref
                            >
                                <li>
                                    <a
                                        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                        href="#"
                                        data-twe-dropdown-item-ref
                                    >
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                        href="#"
                                        data-twe-dropdown-item-ref
                                    >
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                        href="#"
                                        data-twe-dropdown-item-ref
                                    >
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div
                            className="relative"
                            data-twe-dropdown-ref
                            data-twe-dropdown-alignment="end"
                        >
                            <a
                                className="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                                href="#"
                                id="dropdownMenuButton2"
                                role="button"
                                data-twe-dropdown-toggle-ref
                                aria-expanded="false"
                            >
                                <img
                                    src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                                    className="rounded-full"
                                    width={25}
                                    alt=""
                                    loading="lazy"
                                />
                            </a>

                            <ul
                                className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                                aria-labelledby="dropdownMenuButton2"
                                data-twe-dropdown-menu-ref
                            >
                                <li>
                                    <a
                                        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                        href="#"
                                        data-twe-dropdown-item-ref
                                    >
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                        href="#"
                                        data-twe-dropdown-item-ref
                                    >
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                        href="#"
                                        data-twe-dropdown-item-ref
                                    >
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Index;
