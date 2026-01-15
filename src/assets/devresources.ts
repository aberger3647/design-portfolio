export interface DevResource {
    title: string;
    description: string;
    stack: string;
    video: string;
    link: string;
    github: string;
}

export const devresources: DevResource[] = [
    {
        title: 'Moon Gazing',
        description: 'Discover what phase the moon is in, find the best spots to view it, and receive alerts when moongazing conditions are optimal.',
        stack: 'React/Vite/Typescript, Supabase, Visual Crossing API, Resend API',
        video: 'https://player.vimeo.com/video/1154727115',
        link: 'https://moongaz.ing/',
        github: 'https://github.com/aberger3647/moongazing'
    },
        {
        title: 'Big Al Strength',
        description: 'Business website for my online personal training and coaching services.',
        stack: 'React/Vite/Typescript, Tailwind, Sanity Studio',
        video: 'https://player.vimeo.com/video/1154730592',
        link: 'https://www.bigalstrength.com/',
        github: 'https://github.com/aberger3647/big-al'
    },
]