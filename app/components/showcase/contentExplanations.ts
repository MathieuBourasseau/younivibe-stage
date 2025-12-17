import { Role } from "../types/auth";

// Types 

export type MainTitleConfig = {
    title: string;
    mobileTitle?: string;
    mobileStyle?: string;
}

export type MainPictureConfig = {
    title: string;
}

export interface ItemConfig {
    title?: string;
    icon?: string;
    subtitle?: string;
    description?: string;
}

export type StepSectionConfig = {
    step?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    listText?: string;
    boldContent?: string;
    image?: string;
    mobileImageStyle?: string;
    mobileListStyle?: string;
    desktopStyle?: string;
    items: ItemConfig[];
}

// Content

export const mainTitle: Record<Exclude<Role, 'ADMIN'>, MainTitleConfig> = {
    STUDENT: {
        title: "Tu veux être acteur de ton avenir, pas juste répondre à des offres ?",
        mobileTitle: "Commence par te connecter à ce qui te fait vibrer",
        mobileStyle: "explanations colored-title text-[22px] font-bold lg:hidden"
    },
    COMPANY: {
        title: "Rencontrez des talents issus de nos campus qui partagent vos valeurs.",
    }
};

export const mainPicture: Record<Exclude<Role, 'ADMIN'>, MainPictureConfig> = {
    STUDENT: { title: '/explanations-candidate/women-smiling.png' },
    COMPANY: { title: '/explanations-company/company-explanations-work.png' }
};

export const formDesktop: Record<Exclude<Role, 'ADMIN'>, MainPictureConfig> = {
    STUDENT: { title: "/explanations-candidate/form-desktop.png" },
    COMPANY: { title: "/explanations-company/form-desktop-company.png" }
};

export const explanationSection: Record<Exclude<Role, 'ADMIN'>, StepSectionConfig[]> = {
    STUDENT: [
        {
            step: "1",
            title: "Tu valorises ce qui fait vraiment ta différence",
            description: "Sur Younivibe, tu ne te résumes pas à ton diplôme ou ton dernier stage.",
            listText: "Ici, tu mets en avant : ",
            boldContent: '"Tu ne rentres pas dans une case. Tu racontes ton élan."',
            image: "/explanations-candidate/form-step-1.png",
            mobileImageStyle: "absolute top-[-1px] left-[0px] opacity-50 lg:hidden",
            items: [
                { icon: "/explanations-candidate/heart-icon.svg", subtitle: "Ton engagement", description: "Projets associatifs, causes, convictions" },
                { icon: "/explanations-candidate/smiley-icon.svg", subtitle: "Tes softs skills", description: "Empathie, leadership, créativité..." },
                { icon: "/explanations-candidate/note-book-icon.svg", subtitle: "Tes projets persos ou pros", description: "Réels ou en devenir" }
            ]
        },
        {
            step: "2",
            title: "On te connecte avec les bonnes vibes",
            description: "Des opportunités qui résonnent avec ton énergie.",
            listText: "Ici, tu mets en avant : ",
            image: "/explanations-candidate/form-step-2.png",
            mobileImageStyle: "absolute bottom-0 left-0 opacity-40 w-[430px] max-w-none lg:hidden",
            mobileListStyle: "flex flex-col gap-4 list-disc pl-5 lg:list-none lg:pl-0",
            items: [
                { description: "Des entreprises alignées avec tes valeurs" },
                { description: "Des missions qui ont du sens" },
                { description: "Des recruteurs qui te parlent comme à un vrai talent" },
            ]
        },
    ],
    COMPANY: [
        {
            step: "1",
            title: "Vous définissez votre intention",
            description: "Sur Younivibe, vous ne publiez pas une simple annonce. Vous exprimez une intention : ce que vous voulez transmettre, construire, faire vivre à vos futurs talents.",
            listText: "Vous valorisez :",
            image: "/explanations-company/form-step-1.png",
            items: [
                { icon: "/explanations-candidate/smiley-icon.svg", subtitle: "La culture de votre organisation", description: "Vos valeurs, votre vision, vos engagements" },
                { icon: "/explanations-candidate/heart-icon.svg", subtitle: "Vos engagements", description: "Diversité, RSE, innovation, inclusion..." },
                { icon: "/explanations-candidate/note-book-icon.svg", subtitle: "Ce que vous cherchez à créer avec de nouveaux talents" }
            ]
        },
        {
            step: "2",
            title: "On vous connecte à des profils alignés",
            description: "Notre outil vous permet de rencontrer des talents engagés et de découvrir leur potentiel bien avant de parler d’un poste.",
            listText: "Vous découvrez le potentiel d’une personne avant même de parler de 'poste'.",
            image: "/explanations-company/form-step-2.png",
            mobileImageStyle: "absolute top-[-240px] left-[0] m-0 max-w-full max-h-full object-contain object-left opacity-50 lg:hidden",
            mobileListStyle: "flex flex-col gap-4 list-none pl-5 lg:list-none lg:pl-0",
            items: [
                { description: "Accédez à des profils authentiques et motivés, porteurs de projets personnels ou collectifs." },
                { description: "Initiez des échanges qui dépassent le cadre de l’entretien." },
                { description: "Engagez des discussions informelles autour d’un projet, d’un sujet d’intérêt commun ou d’une mission ponctuelle." }
            ]
        },
        {
            step: "3",
            title: "Vous construisez des relations durables",
            description: "Vous pouvez aller bien plus loin qu’un recrutement classique.",
            listText: "Younivibe permet de :",
            image: "/explanations-company/form-step-3.png",
            boldContent: "La relation n’est pas figée. Elle évolue dans le temps, comme un partenariat.",
            mobileImageStyle: "absolute top-0 left-0 m-0 max-w-full max-h-full object-contain object-left opacity-50 lg:hidden",
            mobileListStyle: "flex flex-col gap-4 list-none pl-5 lg:list-none lg:pl-0",
            items: [
                { description: "Créer une communauté de jeunes talents autour de votre vision" },
                { description: "Tester des collaborations via des projets courts ou immersifs" },
                { description: "Nourrir une dynamique de co-construction avec les talents de demain" }
            ]
        }
    ]
};

export const benefitsTitles = {
    title1: "Ce que Younivibe change pour vous",
    title2: "Les bénéfices pour votre entreprise"
};

export const younivibeBenefits: Record<Exclude<Role, 'ADMIN'>, StepSectionConfig[]> = {
    STUDENT: [],
    COMPANY: [
        {
            subtitle: "Les plateformes classiques",
            items: [
                { description: "Tri de CVs standardisés" },
                { description: "Matching sur des mots-clés" },
                { description: "Recrutement transactionnel" },
                { description: "Recrutement opaque" },
            ]
        },
        {
            subtitle: "Younivibe",
            items: [
                { description: "Découverte de profils vivants et différenciés" },
                { description: "Matching sur les intentions et les valeurs" },
                { description: "Rencontre humaine et conversationnelle" },
                { description: "Recrutement engagés en faveur des talents issus de nos universités" },
            ],
        },
    ]
};

export const networks = [
    {
        icon: "discussion-icon.svg",
        title: "Tu échanges avec :",
        description: ""
    },
    {
        title: "Tes pairs,",
        description: "autour de vos passions, parcours, projets",
        icon: ""
    },
    {
        title: "Des recruteurs,",
        description: "sur ton potentiel et ce que tu veux construire",
        icon: ""
    },
    {
        title: "Notre communauté,",
        description: "qui te partage des tips, des outils, et parfois même des déclics",
        icon: ""
    },
];

export const companyAdvantages = {
    image: "/explanations-company/woman-wind-turbine.png",
    items: [
        { icon: "/explanations-candidate/bird-icon.svg", description: "Vous gagnez du temps avec des profils réellement motivés" },
        { icon: "/explanations-candidate/bird-icon.svg", description: "Vous renforcez votre image auprès d'une génération exigeante" },
        { icon: "/explanations-candidate/bird-icon.svg", description: "Vous identifiez des talents qui ne rentrent pas dans les cases mais peuvent faire la différence" },
        { icon: "/explanations-candidate/bird-icon.svg", description: "Vous créez un lien plus humain, plus sincère, avec vos futurs collaborateurs grâce à un recrutement qui a du sens" },
    ]
};

export const recruiterSpace = {
    mainTitle: "Recrutez mieux. Recrutez autrement.",
    subtitle: "Créez votre espace entreprise",
    items: [
        { description: "✨ Trouvez les profils qui vibrent avec votre culture" },
        { description: "🤝 Et construisez des relations qui ont du sens" }
    ],
    cta: "Créer mon espace recruteur"
};