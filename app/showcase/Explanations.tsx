import Image from "next/image";
import { Role } from "../types/auth";
import { mainTitle, mainPicture, formDesktop, explanationSection, benefitsTitles, younivibeBenefits, networks, companyAdvantages, recruiterSpace } from "./contentExplanations";

type ExplanationsProps = {
    role: Exclude<Role, 'ADMIN'>
}

export function Explanations({ role }: ExplanationsProps) {

    const currentMainTitles = mainTitle[role];
    const currentMainPictures = mainPicture[role];
    const currentFormDesktop = formDesktop[role];
    const currentExplanationsSection = explanationSection[role];
    const currentYounivibeBenefits = younivibeBenefits[role];

    return (
        <div>

            {/* TITLES BLOC */}
            <main>
                <div className="p-6 flex flex-col gap-8 items-center">
                    <h1 className="text-2xl font-black text-[#1F2351] lg:text-center lg:py-6">
                        {currentMainTitles.title}
                        <span className="colored-title hidden lg:block">{currentMainTitles.mobileTitle}</span>
                    </h1>
                    <h2
                        className={currentMainTitles.mobileStyle || 'hidden'}>
                        {currentMainTitles.mobileTitle || currentMainTitles.title}
                    </h2>
                </div>

                {/* EXPLANATIONS SECTION */}
                <section className={`relative flex flex-col justify-center overflow-hidden lg:overflow-visible`}>
                    <Image
                        src={currentMainPictures.title}
                        width={390}
                        height={128}
                        alt=""
                        className="relative object-contain w-full z-20 "
                    />

                    <div className={role === "COMPANY" ? "relative m-4 border border-[#1B68FF] rounded-lg lg:my-4 lg:mx-6 lg:rounded-xl lg:overflow-hidden lg:flex lg:flex-col " : "flex flex-col justify-center lg:relative"}>
                        <Image
                            src={currentFormDesktop.title}
                            width={390}
                            height={109}
                            alt=""
                            className="hidden lg:block lg:absolute lg:z-0 lg:w-[700px] lg:bottom-[-150px] lg:opacity-45 "
                        />

                        {/* --- MAIN LOOP (Steps) --- */}
                        {currentExplanationsSection.map((step, index) => {

                            // DYNAMIC LOGIC
                            const isList = step.mobileListStyle?.includes('list-disc') || step.mobileListStyle?.includes('list-none');
                            const isCustomList = step.mobileListStyle?.includes('list-none');

                            // IMPORTANT: Dynamic tags must start with an uppercase letter
                            const ListContainer = isList ? 'ul' : 'div';
                            const ListItem = isList ? 'li' : 'div';

                            const isSecond = index === 1;
                            const isCompanyFirstStep = role === 'COMPANY' && index === 0;

                            // Logique Background : COMPANY + 2ème étape + Desktop/Tablette uniquement (lg:)
                            const isGreyBackground = role === 'COMPANY' && isSecond;

                            return (
                                <article
                                    key={index}
                                    className={`flex w-fit mx-auto justify-center py-14 px-4 gap-[50px] relative z-10 ${isGreyBackground ? 'lg:bg-gray-100 lg:rounded-xl' : ''}`}
                                >
                                    {/* CORRECTION : On vérifie si l'image existe avant de l'afficher pour éviter l'erreur TS */}
                                    {step.image && (
                                        <Image
                                            src={step.image}
                                            width={230}
                                            height={109}
                                            alt=""
                                            className={step.mobileImageStyle || "absolute top-[-1px] left-[0px] opacity-50 lg:hidden"}
                                        />
                                    )}
                                    <span className="flex items-center justify-center bg-[#1F2351] w-[35px] h-[35px] text-white rounded-full shrink-0 relative z-10 lg:w-[70px] lg:h-[70px] lg:text-xl">{step.step}</span>

                                    <div className="flex flex-col gap-4 relative z-10">
                                        <div className="flex flex-col gap-4">
                                            <h2 className="text-[22px] font-bold md:text-base lg:text-[32px]">{step.title}</h2>
                                            <p className="text-sm md:text-base">{step.description}</p>
                                        </div>

                                        <div className="flex flex-col gap-4">
                                            <p className="text-sm md:text-base">{step.listText}</p>

                                            {/* Dynamic list (ul or div depending on config) */}
                                            <ListContainer className={step.mobileListStyle ? step.mobileListStyle : 'flex flex-col gap-4'}>

                                                {step.items.map((item, subIndex) => {

                                                    const showDescription = isCompanyFirstStep ? subIndex === 1 : true;

                                                    return (
                                                        <ListItem
                                                            key={subIndex}
                                                            className={
                                                                (role === 'STUDENT' && isList)
                                                                    ? "text-sm md:text-base pl-2"
                                                                    : (isList ? "flex items-start gap-3 text-sm md:text-base" : "flex gap-4")
                                                            }
                                                        >
                                                            {isCustomList && (
                                                                <span
                                                                    className="shrink-0 w-2 h-2 rounded-full mt-[6px]"
                                                                    style={{
                                                                        background: "linear-gradient(180deg, #006AFF 0%, #00DF7A 100%)"
                                                                    }}
                                                                />
                                                            )}

                                                            {item.icon && !isList && (
                                                                <Image
                                                                    src={item.icon}
                                                                    width={44} height={44} alt={item.subtitle || ""}
                                                                    className="object-contain lg:w-[64px] lg:h-[64px]"
                                                                />
                                                            )}

                                                            <div className={(role === 'STUDENT' && isList) ? "" : "flex flex-col justify-center gap-4"}>
                                                                {item.subtitle && (
                                                                    <p className="text-sm font-bold md:text-base">{item.subtitle}</p>
                                                                )}
                                                                {showDescription && (
                                                                    <p className={isList ? "" : "text-sm md:text-base"}>{item.description}</p>
                                                                )}
                                                            </div>
                                                        </ListItem>
                                                    )
                                                })}

                                            </ListContainer>

                                            {step.boldContent && (
                                                <p className="text-sm font-bold">{step.boldContent}</p>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>

                {/* COMPANY YOUNIVIBE MAKES THE DIFFERENCE */}
                {role === 'COMPANY' && (

                    <>
                        <section className="flex flex-col justify-center gap-4 py-8">

                            <div className="flex flex-col justify-center gap-6">
                                <h2 className="text-[24px] font-black text-[#1F2351] text-center lg:py-6 lg:text-[32px]">{benefitsTitles.title1}</h2>

                                <div className="lg:flex lg:items-center lg:justify-center lg:gap-10">
                                    {currentYounivibeBenefits.map((item, index) => {
                                        const isFirst = index === 0;

                                        return (
                                            <article
                                                key={index}
                                                className={`border flex m-4 rounded-lg transition-all relative ${isFirst
                                                    ? "flex-col p-4 border-gray-300 text-sm text-[#8E8E93]"
                                                    : "flex-row p-0 border-[#1B68FF] bg-white shadow-md text-sm text-[#1F2351] lg:relative"
                                                    }`}
                                            >
                                                {!isFirst && (
                                                    <Image
                                                        src={`/explanations-company/form-younivibe-difference.png`}
                                                        width={75}
                                                        height={44}
                                                        alt={""}
                                                        className="absolute top-[-50px] right-[-70px]"
                                                    />
                                                )}
                                                <div className={
                                                    isFirst
                                                        ? "hidden"
                                                        : "w-[30px] bg-gradient-to-b from-[#006AFF] to-[#00DF7A] shrink-0 rounded-l-lg"
                                                }>
                                                </div>
                                                <div className={`flex flex-col gap-2 ${!isFirst ? "p-4 w-full" : ""}`}>

                                                    <h3 className="font-bold mb-2 text-[18px] lg:text-[20px]">
                                                        {item.subtitle}
                                                    </h3>

                                                    <ul className="flex flex-col gap-2 list-disc pl-5">
                                                        {item.items.map((listItem, subIndex) => (
                                                            <li key={subIndex} className="text-sm lg:text-base">
                                                                {listItem.description}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                            </article>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="flex flex-col items-center px-6 gap-6 my-6 lg:bg-[#00000005]">
                                <h2 className="text-[24px] text-center font-bold lg:text-[32px]">{benefitsTitles.title2}</h2>
                                <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center lg:gap-16 max-w-6xl mx-auto">

                                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                                        <Image
                                            src={companyAdvantages.image}
                                            width={370}
                                            height={250}
                                            alt=""
                                            className="object-contain lg:w-full max-w-[500px]"
                                        />
                                    </div>

                                    <div className="flex flex-col items-start gap-6 px-2 my-8 lg:w-1/2 lg:my-0 lg:pl-8">

                                        {companyAdvantages.items.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-4 text-left"
                                            >
                                                <Image
                                                    src={item.icon}
                                                    width={24}
                                                    height={24}
                                                    alt=""
                                                    className="shrink-0 mt-1"
                                                />
                                                <p className="text-sm lg:text-base font-medium text-[#1F2351]">
                                                    {item.description}
                                                </p>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="flex flex-col items-center px-2 gap-8 py-8" >
                            <h2 className="text-[24px] text-center font-bold lg:text-[32px]">Ce qu'en disent les recruteurs</h2>
                            <div>
                                <Image
                                    src={`/explanations-company/recruiters-opinions.png`}
                                    width={390} height={24} alt="Témoignages recruteurs"
                                    className="lg:hidden"
                                />
                                <Image
                                    src={`/explanations-company/recruiters-opinions-desktop.png`}
                                    width={810} height={295} alt="Témoignages recruteurs"
                                    className="hidden lg:block"
                                />
                            </div>
                        </section>

                        <section className="flex flex-col items-center p-6 mb-[80px] bg-[linear-gradient(91.34deg,#006AFF_55.59%,#00DF7A_100%)] text-white">
                            <h2 className="text-[24px] my-4 font-bold text-center">{recruiterSpace.mainTitle}</h2>
                            <h3 className="text-[18px] my-4  font-bold text-center">{recruiterSpace.subtitle}</h3>

                            {recruiterSpace.items.map((item, index) => (
                                <p key={index} className="text-sm">{item.description}</p>
                            ))}

                            <button className="flex w-3/4 items-center justify-center text-sm font-bold py-4 rounded-full shadow-[0px_4px_4px_0px_#00000040] my-6 bg-[#00DF7A] cursor-pointer lg:max-w-[250px]">{recruiterSpace.cta}</button>
                        </section>

                    </>
                )}

                {role === 'STUDENT' && (
                    <section className="border border-[#8E8E93] px-6 py-12 flex flex-col gap-6 lg:justify-center lg:relative lg:bg-white lg:z-10 lg:w-[95%] lg:mx-auto lg:rounded-xl">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-around lg:py-8 ">
                            <div className="flex flex-col justify-center gap-6">
                                <div className="flex items-center gap-4">
                                    {networks[0]?.icon && (
                                        <Image
                                            src={`/explanations-candidate/${networks[0].icon}`}
                                            width={24} height={44} alt=""
                                            className=""
                                        />
                                    )}
                                    <p className="font-bold">{networks[0]?.title}</p>
                                </div>
                                <ul className="list-disc pl-5 flex flex-col gap-4">
                                    {networks.slice(1, 4).map((item, index) => (
                                        <li key={index} className="font-bold text-sm">
                                            {item.title}
                                            <p className="font-normal">{item.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Image
                                src={`/explanations-candidate/coworking-colleagues.svg`}
                                width={360} height={44} alt=""
                                className=""
                            />
                        </div>
                    </section>
                )}

            </main>

        </div>
    )
}