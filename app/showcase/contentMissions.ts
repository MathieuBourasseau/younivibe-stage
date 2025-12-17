import { Role } from "../types/auth";

// Types

type IntroSection = {
    title: { mobile: string, desktop: string };
    subtitle: string;
    image: string[];
    description: { text: string, boldContent?: string }[];
    list: { text: string }[];
}

type ValuesSection = {
    title: { mobile: string };
    subtitle: string;
    description: {
        icon: string;
        title: string;
        text: string[];
    }[];
}

type EngagementSection = {
    title: { mobile: string };
    image: string[];
    subtitle: { boldText?: string, greyText?: string }[];
    description: { icon: string, title: string }[];
}

type PartnersSection = {
    title: string;
    subtitle: string;
    image: string;
    list: ItemConfig[]
    description: string;

}

type ItemConfig = {
    icon: string;
    text: string;
}

// Content 

export const firstSection: Record<Exclude<Role, 'ADMIN'>, IntroSection> = {

    STUDENT: {
        title: {
            mobile: "Révéler les talents invisibles.",
            desktop: "Révéler les talents invisibles. Créer des rencontres qui changent des trajectoires.",
        },
        subtitle: "Et remettre du sens dans le recrutement.",
        image: [
            "/missions/reveal-talents-mobile-candidate.png",
            "/missions/reveal-talents-candidate.png",
        ],
        description: [
            { text: "Nos campus débordent de talents. Ils ont les idées, l'envie, les compétences. Ce qui leur manque ? Le réseau. Les codes. L'accès." },
            {
                text: "Chez Younivibe, on s'est donné une mission simple et urgente : ",
                boldContent: "ouvrir les portes, rendre visibles les potentiels, connecter des étudiant·es brillants à des entreprises prêtes à recruter autrement.",
            }
        ],
        list: [
            { text: "Parce que l’égalité des chances ne doit pas rester un slogan." },
            { text: "Parce que le recrutement peut (et doit) devenir un acte citoyen." }
        ]
    },

    COMPANY: {
        title: {
            mobile: "Révéler les talents invisibles.",
            desktop: "Révéler les talents invisibles. Créer des rencontres qui changent des trajectoires.",
        },
        subtitle: "Et remettre du sens dans le recrutement.",
        image: [
            "/missions/reveal-talents-mobile-company.png",
            "/missions/reveal-talents-company.png",
        ],
        description: [
            { text: "Nos campus débordent de talents. Ils ont les idées, l'envie, les compétences. Ce qui leur manque ? Le réseau. Les codes. L'accès." },
            {
                text: "Chez Younivibe, on s'est donné une mission simple et urgente : ",
                boldContent: "ouvrir les portes, rendre visibles les potentiels, connecter des étudiant·es brillants à des entreprises prêtes à recruter autrement.",
            }
        ],
        list: [
            { text: "Parce que l’égalité des chances ne doit pas rester un slogan." },
            { text: "Parce que le recrutement peut (et doit) devenir un acte citoyen." }
        ]
    }
}

export const secondSection: Record<Exclude<Role, 'ADMIN'>, ValuesSection> = {

    STUDENT: {
        title: {
            mobile: "Ce qui nous guide, chaque jour",
        },
        subtitle: "Nos valeurs fondamentales qui orientent chacune de nos actions",
        description: [
            {
                icon: "/missions/boldness-icon.svg",
                title: "Audace",
                text: [
                    "Nous croyons en celles et ceux qui osent se présenter tels qu'ils sont.",
                    "L'audace, c'est affirmer ses valeurs, ses idées, son engagement, même quand le parcours est atypique. Nous valorisons l'initiative, le courage d'être soi, la capacité à inventer sa propre voie."
                ]
            },
            {
                icon: "/missions/valorisation-icon.svg",
                title: "Valorisation",
                text: [
                    "Chaque parcours mérite d'être reconnu, pas seulement ceux qui ont les bons stages ou les bons contacts.",
                    "Nous mettons en lumière les engagements associatifs, les projets personnels, les qualités humaines. Parce que la valeur d'un·e candidat·e ne se résume pas à un CV."
                ]
            },
            {
                icon: "/missions/connection-icon.svg",
                title: "Connexion",
                text: [
                    "Nous créons des rencontres qui comptent. Des connexions sincères, où les talents et les recruteurs partagent une vision commune.",
                    "Nous croyons à l'échange, à l'écoute, à la co-construction. C'est là que naissent les vraies opportunités."
                ]

            },
        ],
    },

    COMPANY: {
        title: {
            mobile: "Ce qui nous guide, chaque jour",
        },
        subtitle: "Nos valeurs fondamentales qui orientent chacune de nos actions",
        description: [
            {
                icon: "/missions/boldness-icon.svg",
                title: "Audace",
                text: [
                    "Nous croyons en celles et ceux qui osent se présenter tels qu'ils sont.",
                    "L'audace, c'est affirmer ses valeurs, ses idées, son engagement, même quand le parcours est atypique. Nous valorisons l'initiative, le courage d'être soi, la capacité à inventer sa propre voie."
                ]
            },
            {
                icon: "/missions/valorisation-icon.svg",
                title: "Valorisation",
                text: [
                    "Chaque parcours mérite d'être reconnu, pas seulement ceux qui ont les bons stages ou les bons contacts.",
                    "Nous mettons en lumière les engagements associatifs, les projets personnels, les qualités humaines. Parce que la valeur d'un·e candidat·e ne se résume pas à un CV."
                ]
            },
            {
                icon: "/missions/connection-icon.svg",
                title: "Connexion",
                text: [
                    "Nous créons des rencontres qui comptent. Des connexions sincères, où les talents et les recruteurs partagent une vision commune.",
                    "Nous croyons à l'échange, à l'écoute, à la co-construction. C'est là que naissent les vraies opportunités."
                ]

            },
        ],
    },
}

export const thirdSection: Record<Exclude<Role, 'ADMIN'>, EngagementSection> = {

    STUDENT: {
        title: {
            mobile: "Notre engagement",
        },
        image: [
            "/missions/engagement-mobile.png",
            "/missions/engagement-desktop.png"
        ],
        subtitle: [
            { boldText: "Ouvrir les portes. Réequilibrer les chances. Redonner du pouvoir à celles et ceux qui en manquent trop souvent." },
            { greyText: "Chez Younivibe, nous agissons pour que chaque étudiant·e issu·e d'un parcours universitaire, quel que soit son parcours ou son réseau, ait une vraie chance d'accéder à des opportunités professionnelles à impact." }
        ],
        description: [
            {
                icon: "/missions/hands-icon.svg",
                title: "Réparer les inégalités d'accès",
            },
            {
                icon: "/missions/hands-icon.svg",
                title: "Faire du recrutement un levier d'inclusion sociale",
            },
            {
                icon: "/missions/hands-icon.svg",
                title: "Accompagner les entreprises qui recrutent avec sens",
            },
        ],
    },

    COMPANY: {
        title: {
            mobile: "Notre engagement",
        },
        image: [
            "/missions/engagement-mobile.png",
            "/missions/engagement-desktop.png"
        ],
        subtitle: [
            { boldText: "Ouvrir les portes. Réequilibrer les chances. Redonner du pouvoir à celles et ceux qui en manquent trop souvent." },
            { greyText: "Chez Younivibe, nous agissons pour que chaque étudiant·e issu·e d'un parcours universitaire, quel que soit son parcours ou son réseau, ait une vraie chance d'accéder à des opportunités professionnelles à impact." }
        ],
        description: [
            {
                icon: "/missions/hands-icon.svg",
                title: "Réparer les inégalités d'accès",
            },
            {
                icon: "/missions/hands-icon.svg",
                title: "Faire du recrutement un levier d'inclusion sociale",
            },
            {
                icon: "/missions/hands-icon.svg",
                title: "Accompagner les entreprises qui recrutent avec sens",
            },
        ],
    },
}

export const teamImages = [
    { src: "/missions/hafida-amzelloug.jpg", label: "Hafida Amzelloug CEO" },
    { src: "/missions/valentin-guillot.jpg", label: "Valentin Guillot CTO" },
    { src: "/missions/mathieu-bourasseau.jpg", label: "Mathieu Bourasseau stagiaire" },
]

export const partnersSection: PartnersSection = {
    title: "Nos partenaires",
    subtitle: "Nous travaillons main dans la main avec :",
    image: "/missions/handshake.svg",
    list: [
        { icon: "/icons/bird-icon.svg", text: "Des universités et associations étudiantes" },
        { icon: "/icons/bird-icon.svg", text: "Des entreprises en quête de sens" },
        { icon: "/icons/bird-icon.svg", text: "Des collectivités et structures engagées pour l'inclusion" },
        { icon: "/icons/bird-icon.svg", text: "Des recruteur·ses visionnaires qui veulent casser les codes" },
    ],
    description: "Chaque partenariat est une extension de notre mission : ouvrir les bonnes portes, au bon moment, pour les bonnes raisons.",
}
