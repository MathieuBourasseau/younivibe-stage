import { Role } from "../types/auth"
import Image from 'next/image'
import React from 'react'
import { firstSection, secondSection, thirdSection, teamImages, partnersSection } from "./contentMissions"

type MissionsProps = {
    role: Exclude<Role, 'ADMIN'>
}

export default function Missions({ role }: MissionsProps) {

    const currentFirstSection = firstSection[role];
    const currentSecondSection = secondSection[role];
    const currentThirdSection = thirdSection[role];

    return (
        <main>

            {/* INTRO SECTION */}

            <section className="flex flex-col gap-6 py-[10] px-[10%] lg:flex-row lg:items-center lg:gap-8 lg:justify-center lg:p-12">
                <div className="flex flex-col gap-4 items-start lg:w-1/2 lg:gap-8">
                    <h1 className="text-[28px] font-bold lg:text-[38px]">
                        <span className='md:hidden'>{currentFirstSection.title.mobile}</span>
                        <span className='hidden md:block'>{currentFirstSection.title.desktop}</span>
                    </h1>

                    <h3 className="text-lg font-bold lg:text-[20px]">{currentFirstSection.subtitle}</h3>

                    {/* DESCRIPTION PART FIRST SECTION */}

                    {currentFirstSection.description.map((text, index) => (
                        <p key={index} className="text-sm lg:text-base">
                            {text.text}

                            {text.boldContent && (
                                <span className='font-bold'>{text.boldContent}</span>
                            )}
                        </p>
                    ))}

                    {/* LIST PART INTRO SECTION */}

                    <ul className="list-disc pl-5 lg:pl-8">
                        {currentFirstSection.list?.map((item, index) => (
                            <li key={index} className="text-sm lg:text-base">{item.text}</li>
                        ))}
                    </ul>
                </div>

                <div className="lg:w-1/2 lg:flex lg:items-center lg:justify-center ">

                    {currentFirstSection.image && (
                        <>
                            <Image
                                src={currentFirstSection.image[0]}
                                alt=""
                                width={420}
                                height={237}
                                className="w-full object-contain max-w-[450px] md:max-w-[600px] lg:hidden"
                            />
                            <Image
                                src={currentFirstSection.image[1]}
                                alt=""
                                width={670}
                                height={237}
                                className="hidden lg:block object-contain"
                            />
                        </>
                    )}
                </div>
            </section>

            {/* VALUES SECTION */}

            <section className="flex flex-col px-6 py-10 gap-8">

                {/* BLOC TITLES */}

                <div className="flex flex-col items-center gap-6">
                    <h2 className="text-2xl font-bold text-center lg:text-[32px]">{currentSecondSection.title.mobile}</h2>
                    <p className="text-sm text-center lg:text-base">{currentSecondSection.subtitle}</p>
                </div>

                {/* BLOC VALUES */}

                <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:max-w-[1200px] lg:mx-auto">
                    {currentSecondSection.description.map((item, index) => (
                        <article
                            key={index}
                            className="
                                flex flex-col 
                                gap-6 border border-gray-300 rounded-xl 
                                p-4 shadow-[0px_4px_4px_0px_#00000040]
                                md:max-w-xl md:mx-auto
                                md:items-center"
                        >
                            <div className="flex items-center gap-6 lg:flex-col">
                                <div className="h-[30px]">
                                    {item.icon && (
                                        <Image
                                            src={item.icon}
                                            alt=""
                                            width={25}
                                            height={25}
                                            className="w-full"
                                        />
                                    )}
                                </div>
                                <h3 className="text-[18px] bg-gradient-to-r from-[#2366FD] to-[#A848E4] bg-clip-text text-transparent font-bold lg:text-xl">
                                    {item.title}
                                </h3>
                            </div>
                            <div className="flex flex-col lg:items-center">
                                {item.text.map((paragraph, i) => (
                                    <p key={i} className="text-sm lg:text-base md:text-center">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* YOUNIVIBE COMMITMENT SECTION */}

            <section className="flex flex-col px-6 py-10  gap-8  lg:items-center lg:justify-between">
                <div className="flex flex-col gap-6 lg:flex-row-reverse lg:justify-between lg:items-center lg:max-w-[1400px]">
                    <div className="flex flex-col gap-6 lg:w-1/2">
                        <h2 className="text-2xl font-bold md:text-center lg:text-start min-[1200px]:text-[32px]">{currentThirdSection.title.mobile}</h2>
                        {currentThirdSection.subtitle.map((item, index) => (
                            <div
                                key={index}
                            >
                                <p className="text-sm font-semibold md:text-center lg:text-start min-[1200px]:text-base">{item.boldText}</p>
                                <p className="text-sm text-gray-400 md:text-center lg:text-start min-[1200px]:text-base">{item.greyText}</p>
                            </div>
                        ))}
                        <div className="flex flex-col gap-4 md:w-fit md:mx-auto lg:mx-0">
                            {currentThirdSection.description.map((item, index) => (
                                <div key={index} className="md:flex md:items-center">
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={item.icon}
                                            alt=""
                                            width={25}
                                            height={25}
                                            className="shrink-0"
                                        />
                                        <p className="text-sm md:text-center lg:text-start min-[1200px]:text-base">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex md:justify-center">
                        <Image
                            src={currentThirdSection.image[0]}
                            alt=""
                            width={310}
                            height={25}
                            className="w-full object-contain max-w-[600px] md:hidden"
                        />
                        <Image
                            src={currentThirdSection.image[1]}
                            alt=""
                            width={310}
                            height={25}
                            className="hidden md:block md:object-contain md:max-w-[600px] md:w-full lg:max-w-[650px]"
                        />

                    </div>
                </div>
            </section>

            {/* TEAM SECTION */}

            <section className="flex flex-col px-10 py-10  gap-8  lg:items-center lg:justify-between">
                <div className="flex flex-col items-center gap-6 lg:max-w-2/3">
                    <h2 className="text-2xl font-bold lg:text-[32px]">L'équipe</h2>
                    <p className="text-sm text-center md:text-base">On vient du monde de l'entreprise, de l'éducation, du terrain. On a vu ce qui ne fonctionnait plus.</p>
                    <p className="text-sm text-center text-gray-400 md:text-base">Étudiant·es sans réseau, premiers de promo invisibles, jeunes qui n'osent pas se vendre… On les a croisés, coachés, parfois accompagnés jusqu'à leur premier poste.
                        On a aussi rencontré des recruteurs fatigués du copier-coller LinkedIn, frustrés de passer à côté de profils prometteurs.</p>
                </div>

                <div className="relative z-20 w-fit mx-auto lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible">

                    <Image
                        src={`/home-candidate/homme-femme-ensemble.jpg`}
                        alt="L'équipe"
                        width={310}
                        height={220}
                        className="block w-full max-w-[450px] rounded-lg object-contain lg:hidden"
                    />

                    <Image
                        src={`/missions/team-mobile-image.svg`}
                        alt=""
                        width={100}
                        height={100}
                        className="absolute -z-10 -bottom-[10%] -left-[10%] w-[25%] object-contain lg:hidden"
                    />

                    <Image
                        src={`/missions/team-mobile-image-2.svg`}
                        alt=""
                        width={100}
                        height={100}
                        className="absolute -z-10 -top-[10%] -right-[10%] w-[25%] object-contain lg:hidden"
                    />

                    {/* TEAM MEMBERS */}
                    {teamImages.map((pic, index) => (
                        <div key={index} className=" hidden lg:block flex flex-col items-center gap-4 my-8">
                            <Image
                                src={pic.src}
                                alt={pic.label}
                                width={250}
                                height={250}
                                className="rounded-lg"
                            />
                            <p>{pic.label}</p>
                        </div>
                    ))}

                    <Image
                        src={`/missions/team-desktop-image.svg`}
                        alt=""
                        width={1400}
                        height={600}
                        className="hidden lg:block absolute -z-10 w-screen max-w-none top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                    />
                </div>
            </section>

            {/* PARTNERS SECTION */}

            <section className="flex flex-col items-start px-10 py-10 gap-8 md:items-center lg:flex-row lg:items-center lg:justify-between lg:mx-auto lg:gap-12">
                <div className="flex flex-col gap-6 md:max-w-2xl md:mx-auto lg:max-w-1/2 lg:mx-0 lg:pr-10 lg:items-start">

                    <h2 className="text-[32px] font-bold md:text-center lg:text-start">
                        {partnersSection.title}
                    </h2>
                    <p className="text-sm font-bold md:text-center md:text-base lg:text-start">
                        {partnersSection.subtitle}
                    </p>

                    {/* PARTNERS LIST */}

                    <div className="flex flex-col gap-6 md:w-fit md:mx-auto lg:w-full lg:mx-0">
                        {partnersSection.list.map((item, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <Image
                                    src={item.icon}
                                    alt="icon"
                                    width={20}
                                    height={20}
                                    className="shrink-0"
                                />
                                <p className="text-sm md:text-base">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm  md:text-center md:text-base lg:text-start">
                        {partnersSection.description}
                    </p>
                    <button className="hidden lg:block text-[15px] px-6 py-4 bg-[#00DF7A] rounded-full text-white font-bold shadow-[0px_4px_4px_0px_#00000040]">Devenir partenaire</button>
                </div>

                <div className="w-fit md:mx-auto lg:w-1/2 lg:flex lg:justify-end">
                    <Image
                        src={partnersSection.image}
                        alt="illustration"
                        width={310}
                        height={20}
                        className="block w-full max-w-[490px] lg:max-w-[660px]"
                    />
                </div>
                <button className="text-[15px] px-6 py-4 bg-[#00DF7A] rounded-full text-white font-bold shadow-[0px_4px_4px_0px_#00000040] lg:hidden">Devenir partenaire</button>
            </section>

            {/* CONTACT SECTION */}

            <section className="px-10 py-10 bg-[linear-gradient(92.81deg,#2366FD_0.73%,#A848E4_100%)]">
                <div className="flex flex-col gap-6 items-center">
                    <p className="text-sm text-white text-center md:text-base">Vous êtes étudiant·e, recruteur·se, responsable pédagogique, association, entreprise engagée ? Vous avez envie de faire partie du mouvement ?</p>
                    <button className="flex text-sm items-center px-6 py-4 gap-4 bg-[#FFFFFF] rounded-full md:text-base">
                        <Image
                            src={`/icons/bird-icon.svg`}
                            width={20}
                            height={20}
                            alt="Icone de l'oiseau de Younivibe"
                        />
                        Nous contacter
                    </button>
                </div>
            </section>
        </main>
    )
}
