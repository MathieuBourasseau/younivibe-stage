import Image from "next/image"
import { useState } from "react"
import Link from "next/link";
import { Role } from "@/app/types/auth";

interface NavButton {
    id: number;
    label: string;
    className: string;
    href: string;
}

type NavigationCandidateProps = {
    onNavigate: (section: string) => void
    activeSection?: string
    role: Exclude<Role, 'ADMIN'>
    onRoleChange: (role: Role) => void
}

type NavButtonsByRole = {
    [K in Exclude<Role, 'ADMIN'>]: NavButton[]
}

export function Navigation({ onNavigate, onRoleChange, activeSection, role }: NavigationCandidateProps) {

    // Links in the nav
    const navLinks = [
        {
            id: 1,
            label: "Comment ça marche ?",
            link: "explanations"
        },
        // Pages en construction - à réactiver plus tard
        // {
        //     id: 2,
        //     label: "Mission",
        //     link: "mission"
        // },
        // {
        //     id: 3,
        //     label: "Contact",
        //     link: "contact"
        // },
    ]

    // Buttons to register or login
    const navButtonsByRole: NavButtonsByRole = {
        STUDENT: [
            {
                id: 1,
                label: "Connexion",
                className: "candidate-login text-sm font-bold lg:text-xl",
                href: "http://jobs.younivibe.fr/login"
            },
            {
                id: 2,
                label: "Inscription",
                className: "register text-sm font-bold py-[5px] px-[10px] lg:text-xl lg:py-[16px] lg:px-[30px]",
                href: "http://jobs.younivibe.fr/login?mode=register"
            }
        ],
        COMPANY: [
            {
                id: 1,
                label: "Connexion",
                className: "company-login text-sm font-bold lg:text-xl",
                href: "http://hire.younivibe.fr/login"
            },
            {
                id: 2,
                label: "Inscription",
                className: "register text-sm font-bold py-[5px] px-[10px] lg:text-xl lg:py-[16px] lg:px-[30px]",
                href: "http://hire.younivibe.fr/login?mode=register"
            }
        ],
    };

    const currentNavButtons = navButtonsByRole[role]

    // Options for the select tag 
    const selectOptions = [
        {
            id: 1,
            label: "Candidat",
            value: "STUDENT"
        },
        {
            id: 2,
            label: "Entreprise",
            value: "COMPANY"
        },
        // {
        //     id: 3,
        //     label: "Université",
        //     value: "university"
        // },
    ];

    // Initialization of the burger menu state 
    const [isOpen, setIsOpen] = useState(false);

    // On click burger menu takes the revert value 
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="relative lg:shadow-lg">
            <nav className="candidate-nav flex flex-col py-5 px-0 lg:pl-5 lg:pr-20 lg:flex-row lg:items-center lg:justify-between lg:text-xl">

                {/* Bloc logo */}
                <div className="candidate-logo flex items-center justify-center shadow-lg  py-6 px-12 gap-2.5 lg:shadow-none">
                    <Image src="logo-seul-couleur.svg" alt="Younivibe Logo" width={36} height={36} className="candidate-logo-image block" />
                    <button onClick={() => onNavigate('home')} className="candidate-logo-title cursor-pointer">Younivibe</button>
                </div>

                {/* Bloc nav links */}
                <div className="flex justify-between py-2.5 px-5 lg:items-center">

                    <div className="flex w-full justify-between lg:hidden">

                        {/* Burger menu button */}
                        <button
                            className={`${isOpen} lg:hidden`}
                            onClick={toggleMenu}>
                            <Image
                                src={isOpen ? "/close-nav-burger.png" : "/nav-burger.svg"}
                                alt="Navigation mobile Younivibe"
                                width={36}
                                height={36}
                                className="candidate-logo-image cursor-pointer"
                            />
                        </button>
                        <div className="flex items-center gap-2.5 lg:gap-7">
                            {currentNavButtons.map((button) => (
                                <Link
                                    key={`${role}-${button.id}`}
                                    href={button.href}
                                    className={button.className}
                                >
                                    {button.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile nav */}
                    <div className={`
                        mobile-menu
                        ${isOpen ? "open" : ""}
                        rounded-md
                        bg-[#1F2351]
                        text-white font-bold
                        lg:hidden
                        `}>
                        <div className="select-option-container flex items-center justify-center border border-white w-full rounded-md overflow-hidden ">
                            <select
                                className="candidate-select-option w-full text-white text-center py-3 outline-none hover:bg-white hover:text-[#1F2351] cursor-pointer "
                                value={role}
                                onChange={(event) => onRoleChange(event.target.value as Role)}
                            >
                                {selectOptions.map((option) => (
                                    <option className="text-black" key={option.id} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <ul className="flex flex-col w-full gap-4 text-base">
                            {navLinks.map((link) => (
                                <li key={link.id} className="border border-white w-full rounded-md overflow-hidden">
                                    <button
                                        onClick={() => onNavigate(link.link)}
                                        className={`mobile-nav-item block w-full text-center py-3 px-6 hover:bg-white hover:text-[#1F2351] cursor-pointer relative ${activeSection === link.link ? "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-white" : ''
                                            }`}
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Desktop nav */}
                    <div className="select-option-container hidden lg:block">
                        <select
                            className="candidate-select-option outline-none lg:text-white"
                            value={role}
                            onChange={(event) => onRoleChange(event.target.value as Role)}
                        >
                            {selectOptions.map((option) => (
                                <option className="text-black" key={option.id} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <ul className=" nav-links hidden lg:flex lg:items-center lg:gap-2.5 lg:text-xl">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <button
                                    onClick={() => onNavigate(link.link)}
                                    className={`mobile-nav-item cursor-pointer relative ${activeSection === link.link ? "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-current" : ''
                                        }`}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bloc login - register */}
                <div className="register-login hidden flex items-center gap-2.5 lg:flex lg:gap-7">
                    {currentNavButtons.map((button) => (
                        <Link
                            key={`${role}-${button.id}`}
                            href={button.href}
                            className={button.className}
                        >
                            {button.label}
                        </Link>
                    ))}
                </div>

            </nav>
        </header>
    )
}