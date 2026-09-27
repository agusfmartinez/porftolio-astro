export type Lang = 'es' | 'en'
export type Localized = Record<Lang, string>

export const getLang = (locale: string | undefined): Lang => (locale === 'en' ? 'en' : 'es')

export const HOME_PATH: Record<Lang, string> = { es: '/', en: '/en/' }

const MONTHS: Record<Lang, string[]> = {
    es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
}

// `ym` = 'YYYY-MM'
export const formatMonth = (ym: string, lang: Lang) => {
    const [year, month] = ym.split('-').map(Number)
    return `${MONTHS[lang][month - 1]} ${year}`
}

export const UI = {
    es: {
        meta: {
            title: 'Portfolio de Agustin Martinez - Desarrollador Fullstack',
            description: 'Desarrollador Fullstack (Python, Django, MERN). Programador JavaScript y diseñador gráfico. Contrata al desarrollador para llevar tu proyecto a producción.',
        },
        nav: {
            home: 'Inicio',
            about: 'Sobre mi',
            experience: 'Experiencia',
            portfolio: 'Portfolio',
            education: 'Educación',
            services: 'Servicios',
            contact: 'Contacto',
            switchLabel: 'View in English',
            switchText: 'EN',
        },
        hero: {
            greeting: 'Hola, soy Agustin Martinez',
            subtitle: 'Desarrollador Fullstack (Python · Django · MERN), programador JavaScript, Diseñador Gráfico y estudiante de Ingeniería Informática.',
        },
        sections: {
            about: 'Sobre mi',
            experience: 'Experiencia Laboral',
            portfolio: 'Portfolio',
            education: 'Educación',
            services: 'Servicios',
            contact: 'Contacto',
        },
        profile: {
            role: 'Desarrollador Fullstack',
            photoAlt: 'Foto de perfil',
            cv: 'Ver CV',
            cvUrl: 'https://drive.google.com/file/d/1r2wCgWS0ljhze0T4LYuzWSaTF_FE3LQd/view?usp=sharing',
            intro: 'Soy Agustin Martinez, Desarrollador Fullstack, y Programador con mas de 3 años de experiencia. Recientemente certificado de la carrera de Desarrollador Fullstack MERN. Actualmente estudiando la carrera de Ingeniería Informática. Además cuento con mas de 10 años de experiencia como Diseñador Gráfico. A continuación comparto mis skills:',
            seeExperience: 'ver experiencia',
            seeProject: 'ver proyecto',
            groups: {
                frontend: 'Frontend',
                backend: 'Backend',
                databases: 'Bases de datos',
                devops: 'DevOps y herramientas',
                design: 'Diseño',
            },
        },
        experience: {
            present: 'Actualidad',
        },
        education: {
            certificate: 'Ver certificado',
        },
        projects: {
            inProgress: 'En desarrollo',
            screenshotAlt: 'Captura de pantalla del proyecto',
            screenshotPending: 'Captura pendiente',
            seeMore: 'Ver más',
            seeLess: 'Ver menos',
        },
        services: {
            request: 'Solicitar servicio',
            subjectPrefix: 'Solicitud servicio - ',
            body: (service: string) => `Buenas tardes, me pongo en contacto para solicitar sus servicios de ${service}... {Favor de adjuntar su información de contacto de ser necesario}`,
        },
        contact: {
            title: 'Trabajemos juntos',
            text: 'Ponte en contacto conmigo si deseas llevar tu negocio al siguiente nivel!',
            sendMail: 'Enviar mail:',
        },
        footer: {
            developedBy: 'Desarrollado por',
        },
    },
    en: {
        meta: {
            title: 'Agustin Martinez Portfolio - Fullstack Developer',
            description: 'Fullstack Developer (Python, Django, MERN). JavaScript programmer and graphic designer. Hire me to take your project to production.',
        },
        nav: {
            home: 'Home',
            about: 'About',
            experience: 'Experience',
            portfolio: 'Portfolio',
            education: 'Education',
            services: 'Services',
            contact: 'Contact',
            switchLabel: 'Ver en español',
            switchText: 'ES',
        },
        hero: {
            greeting: "Hi, I'm Agustin Martinez",
            subtitle: 'Fullstack Developer (Python · Django · MERN), JavaScript programmer, Graphic Designer and Computer Engineering student.',
        },
        sections: {
            about: 'About me',
            experience: 'Work Experience',
            portfolio: 'Portfolio',
            education: 'Education',
            services: 'Services',
            contact: 'Contact',
        },
        profile: {
            role: 'Fullstack Developer',
            photoAlt: 'Profile photo',
            cv: 'View CV',
            cvUrl: 'https://drive.google.com/file/d/159G25zu2g53POK1OKRkV70b8-ldRVtba/view?usp=drive_link',
            intro: "I'm Agustin Martinez, a Fullstack Developer and Programmer with over 3 years of experience. Recently certified as a MERN Fullstack Developer. Currently studying Computer Engineering. I also have over 10 years of experience as a Graphic Designer. Here are my skills:",
            seeExperience: 'see experience',
            seeProject: 'see project',
            groups: {
                frontend: 'Frontend',
                backend: 'Backend',
                databases: 'Databases',
                devops: 'DevOps & tools',
                design: 'Design',
            },
        },
        experience: {
            present: 'Present',
        },
        education: {
            certificate: 'View certificate',
        },
        projects: {
            inProgress: 'In progress',
            screenshotAlt: 'Screenshot of project',
            screenshotPending: 'Screenshot pending',
            seeMore: 'See more',
            seeLess: 'See less',
        },
        services: {
            request: 'Request service',
            subjectPrefix: 'Service request - ',
            body: (service: string) => `Hello, I'm reaching out to request your ${service} services... {Please include your contact information if needed}`,
        },
        contact: {
            title: "Let's work together",
            text: 'Get in touch if you want to take your business to the next level!',
            sendMail: 'Send email:',
        },
        footer: {
            developedBy: 'Developed by',
        },
    },
}

export const useTranslations = (lang: Lang) => UI[lang]
