import Image from "next/image";
import FAQ from "../faq/FAQ";
import { useState, type ChangeEvent, type MouseEvent } from "react";
import { CheckboxInput } from "../ui/form/input";
import { toast } from "sonner";

export default function Home() {

    const filters = [
        {
            id: 1,
            icon: "/form-icons/valise.png",
            placeholder: "Type de contrat",
            options: [
                { id: 1, value: "internship", label: "Stage" },
                { id: 2, value: "apprenticeship", label: "Alternance" },
                { id: 3, value: "commitedJob", label: "Job engagé" },
            ]
        },
        {
            id: 2,
            icon: "/form-icons/pin.png",
            placeholder: "Localisation",
            options: [
                { id: 4, value: "85", label: "Vendée (85)" },
                { id: 5, value: "44", label: "Loire-Atlantique (44)" },
            ],
            mobileHidden: true,
        },
        {
            id: 3,
            icon: "/form-icons/cible.png",
            placeholder: "Domaine",
            options: [
                { id: 6, value: "law", label: "Droit" },
                { id: 7, value: "health", label: "Santé" },
                { id: 8, value: "marketing", label: "Marketing" },
            ]
        },
        {
            id: 4,
            icon: "/form-icons/plante.png",
            placeholder: "Impact",
            options: [
                { id: 9, value: "social", label: "Social" },
                { id: 10, value: "environment", label: "Environnemental" },
            ]
        }
    ];

    const contactRequest = [
        { title: "Candidat" },
        { title: "Recruteur" },
        { title: "Futur partenaire" },
        { title: "Presse / Média" },
        { title: "Autre" },
    ]

    const younivibeExplanations = [
        { number: "1", title: "Crée ton profil à ton image", description: "Tes expériences, tes projets, tes valeurs." },
        { number: "2", title: "Explore des missions inspirantes", description: "Stage, alternance ou job, choisis ce qui te motive." },
        { number: "3", title: "Candidate avec sincérité", description: "Pas besoin d'en faire trop. Ce que tu es suffit." },
    ];

    const partnersData = [
        { logo: "universities", title: "50+ Etablissements", description: "Etablissements d'enseignement supérieur partenaires" },
        { logo: "companies", title: "450+ Entreprises", description: "Structures à impact qui recrutent sur Younivibe" },
        { logo: "associations", title: "100+ Associations", description: "Acteurs de l'inclusion qui nous accompagnent" },
    ];

    const younivibePartners = [
        { id: 1, logo: "fake-company" },
        { id: 2, logo: "fake-company" },
        { id: 3, logo: "fake-company" },
        { id: 4, logo: "studely-logo" },
        { id: 5, logo: "fake-company" },
        { id: 6, logo: "fake-company" },
        { id: 7, logo: "fake-company" },
        { id: 8, logo: "fake-company" },
    ];

    const committedCompanies = [
        { id: 1, title: "Studely", logo: "studely-logo" },
        { id: 2, title: "fake-company", logo: "fake-company" },
        { id: 3, title: "fake-company", logo: "fake-company" },
        { id: 4, title: "fake-company", logo: "fake-company" },
        { id: 5, title: "fake-company", logo: "fake-company" },
        { id: 6, title: "fake-company", logo: "fake-company" },
    ];

    const coloredWords = [
        { id: 1, label: "Egalité", badgeClass: "colored-badge", coloredWord: "colored-word", individualClass: "equality" },
        { id: 2, label: "RSE", badgeClass: "colored-badge", coloredWord: "colored-word", individualClass: "csr" },
        { id: 3, label: "Ecologie", badgeClass: "colored-badge", coloredWord: "colored-word", individualClass: "ecology" },
        { id: 4, label: "Economie circulaire", badgeClass: "colored-badge", coloredWord: "colored-word", individualClass: "circular-economy" },
        { id: 5, label: "Emploi & Formations", badgeClass: "colored-badge", coloredWord: "colored-word", individualClass: "employment" },
        { id: 6, label: "Engagement citoyen", badgeClass: "colored-badge", coloredWord: "colored-word", individualClass: "civic-engagement" },
        { id: 7, label: "Lien social", badgeClass: "colored-badge", coloredWord: "colored-word", individualClass: "social-bond" },
        { id: 8, label: "Solidarité", badgeClass: "colored-badge", coloredWord: "colored-word", individualClass: "solidarity" },
        { id: 9, label: "Energies", badgeClass: "colored-badge", coloredWord: "colored-word", individualClass: "energy" },
    ]

    const younivibePurposes = [
        {
            title: "Les étudiants et leur parcours",
            logo: "academic-background",
            description:
                "Nous valorisons tous les profils, peu importe l'école ou la filière. Le talent ne se mesure pas au prestige de l'établissement.",
        },
        {
            title: "Les engagements extra-scolaires comme leviers de recrutement",
            logo: "personal-committment",
            description:
                "Ton action associative, tes projets personnels, tes initiatives citoyennes sont des atouts précieux que nous mettons en avant.",
        },
        {
            title: "Une relation respectueuse et humaine entre candidats et recruteurs",
            logo: "respectful-relationship",
            description:
                "Fini les processus déshumanisés. Ici, chaque candidature est traitée avec respect et bienveillance.",
        },
    ];

    const researchAdvices = [
        {
            title: "Valoriser ton engagement associatif sur un CV",
            image: "femme-souriante-contrat",
            description: "Comment transformer tes actions bénévoles en atouts professionnels concrets.",
            label: "CV & Candidature"
        },
        {
            title: "5 erreurs à éviter quand tu cherches une alternance",
            image: "homme-femme-ensemble",
            description: "Les pièges classiques et comment les contourner pour maximiser tes chances.",
            label: "Alternance"
        },
        {
            title: "Comment préparer un entretien sans stresser",
            image: "hommes-travaillant",
            description: "Techniques concrètes pour gérer ton stress et révéler ton potentiel.",
            label: "Entretien"
        }
    ];

    const [formData, setFormData] = useState({
        type: '',
        name: '',
        mail: '',
        subject: '',
        message: '',
    })

    const [acceptTerms, setAcceptTerms] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {

        const { name, value } = event.target;

        setFormData(formdata => ({
            ...formdata,
            [name]: value,
        }));
    };

    const handleFormContact = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (!acceptTerms) {
            toast.error("Vous devez accepter la politique de confidentialité pour soumettre le formulaire.");
            return;
        }

        try {

            const response = await fetch('/api/contact', { // URL A MODIFIER
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Message envoyé avec succès ! ");

                setFormData({
                    type: '',
                    name: '',
                    mail: '',
                    subject: '',
                    message: ''
                });

                setAcceptTerms(false);

            } else {
                toast.error(data.error || "Problème lors de l'envoi du message. ")
            };

        } catch (error) {
            console.error("Erreur lors de l'envoi du message :", error);
            toast.error("Problème lors de l'envoi du message. Veuillez réessayer.")
        }
    };




    return (
        <div>

            {/* SECTION SOCIAL COMMITMENT */}
            <section className="flex flex-col gap-6 justify-center items-center px-4 py-10">
                <div className="flex flex-col gap-5 items-center justify-center text-center">
                    <h1 className="text-[28px] font-black md:text-[32px]">
                        Tu as une passion ?
                        <span className="colored-title">Un engagement social ?</span>
                    </h1>
                    <p className="text-sm md:text-base">
                        C'est le moment de le valoriser pour décrocher les meilleures opportunités qui ont du sens.
                    </p>
                </div>

                {/* Search form */}
                <form action="" className="flex flex-col items-center border border-gray-600 p-6 rounded-md w-full gap-6 md:w-3xl">
                    <div className="flex gap-4 items-center w-full border border-gray-600 p-2 rounded-lg ">
                        <div className="flex gap-2 items-center w-1/2 md:w-full">
                            <Image src="/form-icons/magnifyingglass.svg" alt="Recherche" width={20} height={20} />
                            <input
                                type="text"
                                placeholder="Rechercher"
                                className="w-full border-r-[2px] border-r-gray-400 outline-none focus:outline-none md:border-none md:w-full"
                            />
                        </div>

                        {/* Only display for mobile */}
                        <div className="flex gap-2 items-center w-1/2 md:hidden">
                            <Image src="/form-icons/pin.png" alt="Recherche" width={20} height={20} />
                            <input
                                type="text"
                                placeholder="Localisation"
                                className="w-full outline-none focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Only display for mobile */}
                    <div className="flex items-center flex-col gap-4 md:hidden">

                        {/* Type of contract bloc */}
                        <div className="search-bar-options-group ">
                            <Image src={filters[0].icon} alt={filters[0].placeholder} width={20} height={20} />
                            <select name="contractType" className="search-bar-options-select" defaultValue="">
                                <option value="" disabled hidden>{filters[0].placeholder}</option>
                                {filters[0].options.map((option => (
                                    <option key={option.id} value={option.value}>{option.label}</option>
                                )))}
                            </select>
                        </div>
                        {/* Other filters  */}
                        <div className="grid grid-cols-2 gap-3 w-full">
                            {filters.slice(2).map((filter) => (
                                <div
                                    key={filter.id}
                                    className={
                                        filter.mobileHidden
                                            ? "search-bar-options-group w-full hidden md:flex"
                                            : "search-bar-options-group w-full flex"
                                    }>
                                    <Image src={filter.icon} alt={filter.placeholder} width={20} height={20} />
                                    <select name="contractType" className="search-bar-options-select w-full" defaultValue="">
                                        <option value="" disabled hidden>{filter.placeholder}</option>
                                        {filter.options.map((op) => (
                                            <option
                                                key={op.id}
                                                value={op.value}
                                            >
                                                {op.label}</option>
                                        ))}
                                    </select>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Only displayed for tablets and desktop */}
                    <div className="hidden md:flex md:gap-4 w-full">
                        {filters.map((filter) => (
                            <div key={filter.id} className="search-bar-options-group w-full flex">
                                <Image src={filter.icon} alt={filter.placeholder} width={20} height={20} />
                                <select className="search-bar-options-select w-full md:text-base" defaultValue="">
                                    <option value="" disabled hidden>{filter.placeholder}</option>
                                    {filter.options.map((op) => (
                                        <option key={op.value} value={op.value}>{op.label}</option>
                                    ))}
                                </select>
                            </div>
                        ))}
                    </div>
                </form>

                <div className="flex flex-col items-center gap-6 md:flex-row">
                    <button className="search-form-btn ">Trouver une opportunité</button>
                    <a href="" className="create-offer">
                        Créer un profil
                    </a>
                </div>
            </section>

            {/* SECTION EXPLANATIONS*/}
            <section className="flex flex-col gap-6 justify-center items-center px-4 py-10">
                <div className="flex flex-col gap-5 items-center justify-center text-center">
                    <h2 className="text-2xl font-black md:text-[32px]">Comment ça marche ?</h2>
                    <p className="text-sm md:text-base">Tu veux faire bouger les lignes ? On t'explique comment faire.</p>
                </div>
                <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-around lg:w-full">
                    <Image src="/home-candidate/younivibe-explanations.jpg" alt="" width={390} height={284} className="w-full max-w-[390px] md:max-w-[600px] lg:max-w-[700px]" />
                    <div className="flex flex-col gap-6">
                        {younivibeExplanations.map((step) => (
                            <article key={step.number} className="profile-card flex flex-col flex-start p-6 border border-gray-600 rounded-lg gap-2">
                                <span className="profile-card-number">{step.number}</span>
                                <p className="text-sm font-bold md:text-base">{step.title}</p>
                                <p className="text-sm md:text-base">{step.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION MISSION + COMPANIES COMMITED*/}
            <section className="flex flex-col gap-6 justify-center items-center px-4 py-10 lg:px-0">
                <div className="flex flex-col gap-5 items-center justify-center text-center">
                    <h2 className="text-2xl font-black md:text-[32px]">Notre mission</h2>
                    <p className="text-sm md:text-base">
                        <span className="font-bold">Beaucoup de talents passent sous les radars.</span>
                        {''} Chez Younivibe, on valorise ta personnalité, ton énergie, ton engagement.
                    </p>
                </div>

                <div className="lg:w-full lg:flex lg:justify-center lg:px-4">
                    <div className="flex flex-col-reverse bg-[#1F2351] rounded-[20px] items-center p-4 gap-6 lg:flex-row max-w-[1400px] w-full lg:overflow-visible lg:my-[120px] lg:py-[40px] lg:min-h-[400px] xl:min-h-[450px] relative">
                        <div className="w-full flex justify-center lg:w-1/2">
                            <Image src="/home-candidate/younivibe-mission.svg" alt="Mission Younivibe" width={355} height={410}
                                className="
                            younivibe-mission-image 
                            lg:absolute 
                            lg:-translate-y-1/2 lg:left-0 
                            lg:w-[400px] lg:h-[480px]
                            xl:w-[643px] xl:h-[743px]"/>
                        </div>
                        <div className="flex flex-col gap-6 text-white text-sm md:text-base lg:max-w-[520px] lg:text-lg xl:text-xl lg:gap-8">
                            <div className="">
                                <p>
                                    <strong>Younivibe</strong> est ce projet qui veut donner une vraie chance à celles et ceux qu’on
                                    n’attendait pas.
                                </p>
                                <p>
                                    Pour que chacun puisse <strong>montrer sa valeur, être soutenu</strong>, et accéder aux mêmes
                                    opportunités que les autres.
                                </p>
                            </div>
                            <div className="younivibe-mission-text-bottom">
                                <p>
                                    C’est un <strong>tremplin</strong> pour construire un avenir professionnel aligné avec ses convictions.
                                    Un lieu où l’on avance non pas grâce aux codes, mais grâce à l’envie <strong>d’apprendre, de
                                        contribuer et de s’élever</strong>. Ici, on ne cherche pas à rentrer dans les cases. On révèle les
                                    voix qu’on n’entend pas encore.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COMMITED COMPANIES BLOC */}
                <div className="
                    w-full 
                    hidden:bg-[linear-gradient(96.82deg,rgba(174,65,235,0.6)_0.48%,rgba(0,223,122,0.6)_97.99%)] 
                    lg:bg-[linear-gradient(96.82deg,rgba(174,65,235,0.6)_0.48%,rgba(0,223,122,0.6)_97.99%)]
                    lg:p-8
                    "
                >
                    <div className="lg:flex lg:items-center lg:justify-around">
                        <div className="flex flex-col gap-8 lg:relative lg:bg-white lg:rounded-xl lg:p-4 lg:max-w-[550px] lg:max-h-[] xl:max-w-[770px] xl:max-h-[250px]">
                            <div>
                                <div className="flex flex-col gap-5 items-center justify-center text-center w-full lg:items-start lg:text-left">
                                    <h2 className="text-2xl font-black md:text-[32px]">Les entreprises engagées</h2>
                                    <p className="text-sm md:text-base">
                                        Younivibe agit avec entreprises et acteurs de l'inclusion qui s'engagent pour de vrai.
                                    </p>
                                </div>
                                <div className="hidden lg:block">
                                    {coloredWords.map((word) => (
                                        <span key={word.id} className={`${word.badgeClass} ${word.individualClass}`}>
                                            <span className={word.coloredWord}>{word.label}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-8 place-items-center lg:flex ">
                                {committedCompanies.map((company) => (
                                    <Image
                                        key={company.id}
                                        src={`/home-candidate/${company.logo}.jpg`}
                                        alt={company.title}
                                        width={70}
                                        height={70}
                                        className="rounded-full object-cover lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px]"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:justify-center">
                            <Image
                                src="/home-candidate/companies-committed.png"
                                alt="Entreprises partenaires engagées"
                                width={452}
                                height={449}
                                className="lg:w-[350px] lg:h-[345px] xl:w-[452px] xl:h-[449px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONY SECTION */}
            <section className="flex flex-col gap-6 justify-center items-center px-4 py-10">
                <div className="flex flex-col items-center gap-8 ">
                    <div className="flex flex-col gap-5 items-center justify-center text-center">
                        <h2 className="text-2xl font-black md:text-[32px]">
                            Ils l'ont fait.<span className="colored-title">Pourquoi pas toi ?</span>
                        </h2>
                        <p className="text-sm md:text-base">
                            <strong>Des jeunes comme toi ont trouvé leur voie.</strong> Ici on ne sélectionne pas sur la "bonne école"
                            mais sur la bonne énergie.
                        </p>
                    </div>
                    <Image
                        src="/home-candidate/mobile-students-testimonials.png"
                        width={370}
                        height={354}
                        alt="Témoignages d'étudiants"
                        className="md:hidden"
                    />
                    <Image
                        src="/home-candidate/students-testimonials.png"
                        width={810}
                        height={295}
                        alt="Témoignages d'étudiants"
                        className="hidden md:block"
                    />
                </div>

                {/* PARTENERS BLOC */}
                <div className="flex flex-col gap-6 justify-center items-center px-4 py-10">
                    <div className="flex flex-col gap-5 items-center justify-center text-center">
                        <h2 className="text-2xl font-black md:text-[32px]">Ils croient en toi autant que nous</h2>
                        <p className="text-sm md:text-base">
                            Younivibe agit avec des établissements, entreprises et acteurs de l'inclusion qui s'engagent pour de vrai.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6 place-items-center md:grid-cols-4">
                        {younivibePartners.slice(0, 6).map((partner) => (
                            <Image
                                src={`/home-candidate/${partner.logo}.jpg`}
                                width={70}
                                height={70}
                                alt={partner.logo}
                                key={partner.id}
                                className="rounded-full object-cover md:w-[88px] md:h-[88px]"
                            />
                        ))}
                        {younivibePartners.slice(6, 8).map((partner) => (
                            <Image
                                src={`/home-candidate/${partner.logo}.jpg`}
                                width={88}
                                height={88}
                                alt={partner.logo}
                                key={partner.id}
                                className="hidden md:block md:rounded-full object-cover"
                            />
                        ))}
                    </div>
                </div>

                {/* DATA BLOC */}
                <div className="flex flex-col border border-gray-600 rounded-lg gap-6 items-center shadow-[0px_4px_4px_0px_#00000040] w-full p-4 md:flex-row md:justify-center md:items-center md:p-6 lg:gap-12 lg:w-5xl">
                    {partnersData.map((partner, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-[10px] h-[132px]">
                            <div className="flex flex-col items-center justify-center gap-[10px] text-center">
                                <Image
                                    src={`/home-candidate/${partner.logo}.svg`}
                                    alt={partner.title}
                                    width={42}
                                    height={45}
                                />
                                <p className="text-sm font-bold md:text-lg">{partner.title}</p>
                            </div>
                            <div className="text-sm text-center text-[#8E8E93] md:text-base ">{partner.description}</div>
                        </div>
                    ))}
                </div>

                <div className="my-3">
                    <a href="" className="become-partner text-sm md:text-xl">
                        Devenir partenaire
                    </a>
                </div>
            </section>

            {/* SECTION COMMITMENT */}
            <section className="flex flex-col gap-6 justify-center items-center px-4 py-10">

                {/* SECTION TITLE COMMITMENT */}
                <div className="flex flex-col gap-5 items-center justify-center text-center">
                    <h2 className="text-2xl font-black md:text-[32px]">Notre engagement</h2>
                    <p className="text-sm md:text-base">
                        C’est notre mission : {''}
                        <span className="colored-commitment text-[#A848E4] font-bold md:colored-subtitle">booster l'employabilité des étudiants à travers la valorisation de leur engagement</span>
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch lg:max-w-6xl">
                    {younivibePurposes.map((purpose, index) => (
                        <article key={index} className="commitment-card flex flex-col items-center justify-center gap-4 p-6 bg-[#D9B5F54D] rounded-lg w-full">
                            <div className="flex flex-col items-center justify-center text-center gap-4">
                                <Image
                                    src={`/home-candidate/${purpose.logo}.svg`}
                                    alt={purpose.title}
                                    width={42}
                                    height={45}
                                />
                                <p className="text-sm font-bold md:text-base">{purpose.title}</p>
                            </div>
                            <div className="text-sm text-center md:text-base">
                                <p>{purpose.description}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="w-[90%] md:w-auto">
                    <a href="" className="join-younivibe md:text-base">
                        Je rejoins le mouvement
                    </a>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center">
                <FAQ />
            </section>

            {/* BLOG SECTION */}
            <section className="flex flex-col gap-6 justify-center items-center px-4 py-10">
                <div className="flex flex-col gap-5 items-center justify-center text-center">
                    <h2 className="text-2xl font-black md:text-[32px]">Des conseils pour booster ta recherche et <span className="colored-title">réveler ton potentiel.</span></h2>
                    <p className="text-sm md:text-base">
                        Découvre nos derniers articles pour t'aider à franchir le cap.
                    </p>
                </div>

                <div className="grid grid-cols-1 w-full gap-6 md:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl">
                    {researchAdvices.map((article, key) => (
                        <article key={key} className="flex flex-col border border-gray-400 rounded-lg overflow-hidden shadow-[0px_4px_4px_0px_#00000040] h-full">
                            <Image
                                src={`/home-candidate/${article.image}.jpg`}
                                width={200}
                                height={50}
                                alt={article.title}
                                className="article-card-image"
                            />
                            <div className="flex flex-col gap-8 items-start p-6">
                                <span className="article-card-label md:text-base">{article.label}</span>
                                <p className="text-sm font-bold md:text-base">{article.title}</p>
                                <p className="text-sm md:text-base">{article.description}</p>
                                <a href="" className="see-more md:text-base">Lire l’article ⭢</a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="form-section flex flex-col gap-6 justify-center items-center lg:flex-row lg:p-0 lg:justify-around lg:relative">
                <Image
                    src={`/home-candidate/form-image.svg`}
                    alt=""
                    width={100}
                    height={420}
                    className="hidden lg:block lg:absolute top-1/2 left-0 -translate-y-1/2 w-[80%] pointer-events-none -z-0"
                />
                <div className="lg:relative lg:flex lg:self-start">
                    <div className="flex flex-col gap-5 items-center justify-center text-center ">
                        <div className="md:flex gap-5 items-center lg:justify-center lg:gap-3">
                            <Image
                                src={`/form-icons/younivibe-contact.svg`}
                                alt="logo contact"
                                width={33}
                                height={26}
                                className="hidden lg:block"
                            />
                            <h2 className="text-2xl font-black md:text-[32px] lg:text-[20px] xl:text-[32px]">Envie d'en savoir plus ?</h2>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image
                                src={`/form-icons/younivibe-contact.svg`}
                                alt="logo contact"
                                width={33}
                                height={26}
                                className="lg:hidden"
                            />
                            <p className="text-base font-bold">Contactez-nous</p>
                        </div>
                    </div>
                </div>

                <form action="" className="w-full border border-gray-300 p-6 rounded-xl shadow-[0px_4px_4px_0px_#00000040] bg-white md:w-2xl lg:shadow-none lg:relative">
                    <fieldset className="flex flex-col gap-8 w-full min-w-0">
                        <div className="select-contact">
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                id="type"
                                className="select-contact-option"
                                required
                            >
                                <option value="" disabled>Vous êtes : </option>
                                {contactRequest.map((item, index) => (
                                    <option 
                                        key={index} 
                                        value={item.title} 
                                        className="select-contact-option-value"
                                    >{item.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-sm font-bold">Prénom Nom</label>
                            <input
                                className="border border-gray-400 p-2 rounded-lg w-full"
                                type="text"
                                placeholder="Marie Dubois"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-sm font-bold">Adresse e-mail</label>
                            <input
                                className="border border-gray-400 p-2 rounded-lg w-full"
                                type="text"
                                placeholder="mail@mail.com"
                                name="mail"
                                value={formData.mail}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
                            <label htmlFor="subject" className="text-sm font-bold">Objet de votre demande:</label>
                            <div className="text-sm bg-[#EEEEEE] border-gray-400 p-2 rounded-xl">
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Choisissez une option</option>
                                    {contactRequest.map((request, index) => (
                                        <option key={index} value={request.title}>{request.title}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-sm font-bold">Votre message</label>
                            <textarea
                                name="message"
                                id="message"
                                className="border border-gray-400 rounded-lg h-[128px]"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <a href="" className="flex self-start items-center gap-4 p-3 text-sm text-[#8E8E93] rounded-xl bg-[#EEEEEE]">
                            <Image
                                src={`/form-icons/upload.svg`}
                                alt="logo contact"
                                width={23}
                                height={24}
                            />
                            Importer un fichier
                        </a>
                        <div className="flex gap-3 text-sm items-center">
                            <CheckboxInput
                                id="terms"
                                checked={acceptTerms}
                                onChange={(e) => setAcceptTerms(e.target.checked)}
                                required
                            />
                            <label htmlFor="terms">En soumettant ce formulaire, j'accepte que les informations saisies soient utilisées pour permettre de me recontacter au sujet de Younivibe.</label>
                        </div>
                        <button onClick={handleFormContact} className="send-request">Envoyer ma demande</button>
                    </fieldset>
                </form>
            </section>
        </div>
    );
}
