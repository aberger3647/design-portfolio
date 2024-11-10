export interface DevResource {
    title: string;
    description: string;
    video: string;
    github: string;
}

export const devresources: DevResource[] = [
    {
        title: 'Ghostbusters',
        description: 'A dating app that allows users to review dates. Contributed to visual design, front-end, and back-end code. Tools used: React, Express.js, Node.js, MongoDB, GraphQL, and Cloudinary.',
        video: 'https://player.vimeo.com/video/1028067692',
        github: 'https://github.com/aberger3647/ghostbusters'
    },
    {
        title: 'Clevercart',
        description: 'A smart shopping list app that learns your buying habits and helps you remember what you might need to buy on y our next trip to the store. Wrote unit tests for components, resulting in a 25% increase in test coverage. Handled differend UI states such as loading, errors, and success with and without data. Led discussions around application design. Tools used: React, Firebase',
        video: 'https://player.vimeo.com/video/1026231078',
        github: 'https://github.com/the-collab-lab/tcl-67-smart-shopping-list'
    },
    {
        title: 'Plant Parenthood',
        description: 'Gardeners can manage their plants, their garden tasks, and record observations. Responsible for back-end code, visual design and front-end interactivity. Tools used: Express.js, Node.js, Handlebars, Day.js, Bootstrap',
        video: 'https://player.vimeo.com/video/1028067692',
        github: 'https://github.com/aberger3647/plantparenthood'
    },
    {
        title: 'Weather Dashboard',
        description: 'A weather app that allows a user to input a city and view the current conditions along with a 5-day forecast. Searched-for cities appear in search history, and can be clicked on to retrieve weather information for that city. Tools used: OpenWeather API, Bootstrap',
        video: 'https://player.vimeo.com/video/1028075204',
        github: 'https://github.com/aberger3647/weather-dashboard'
    },    
    {
        title: 'Employee Tracker',
        description: 'A CLI using Node.js, Inquirer and MySQL that allows the user to view and manage the departments, roles, and employees in a company',
        video: 'https://player.vimeo.com/video/1028072049',
        github: 'https://github.com/aberger3647/employee-tracker'
    }
]