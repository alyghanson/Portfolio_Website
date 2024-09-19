// All data for the drop down menu: used on all pages except home


export const MenuItemsData = [
    {
        title: 'Home',
        url: '/portfolio/home',
    },
    {
        title: 'Resume',
        url: '/portfolio/resume',
    },
    {
        title: 'About Me',
        url: '/portfolio/about',
    },
    {
        title: 'Contact', 
        url: '/portfolio/contact',
    },
    {
        title: 'Links',
        url: '/portfolio/contact',
        // Nested drop down
        submenu: [
            {
                title: 'GitHub',
                url:  'https://github.com/alyghanson',
            },
            {
                title: 'BitBucket',
                url:'https://bitbucket.org/ahanson2cs322/workspace/repositories/',
            },
            {
                title: 'LinkedIn',
                url: 'https://www.linkedin.com/in/alyghanson/'

            },
        ]
    },
    // Add more here if needed
];
