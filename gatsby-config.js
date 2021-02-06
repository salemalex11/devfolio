module.exports = {
  siteMetadata: {
    siteUrl: `https://salemalex11.netlify.app`,

    name: 'Alex Lamouri',

    title: `Alex Lamouri's Portfolio`,

    description: `Computer Science @ UofT | Technical Expert @ Apple`,

    github: `https://github.com/salemalex11`,

    linkedin: `https://www.linkedin.com/in/salemalex11/`,

    resume: 'https://salemalex11.github.io',

    about:
      '4th year student at the University of Toronto Mississauga. Double major in CS and CCIT. Aspiring SDE/SWE. Interested in AI/ML, Automation, Cybersecurity, Ethics, Front-End/Back-End/Full-Stack, Mobile, Web, UI/UX.',

    education: [
      {
        name: 'University of Toronto (Sept. 2017 - Aug. 2021)',
        description:
          "HBSc in Computer Science. GPA: 3.67/4.00. Dean's List Scholar (2017 - 2020).",
      },
    ],
    
    experience: [
      {
        name: 'Apple (Sept. 2017 - Present)',
        description: 'Technical Expert, Technical Specialist, Specialist',
        link: '',
      },
    ],

    projects: [
      {
        name: 'social-connect (2020)',
        description:
          'Web app used for playing real-time chess with friends online. React, Node, Express, SocketIO.',
        link: 'https://github.com/salemalex11/social-connect',
      },
      {
        name: 'mentAlly (2020)',
        description:
          'Android app used for habit/mood tracking, exercises, self-assessments, and helplines. Android Studio, Java, Firebase.',
        link: 'https://github.com/salemalex11/mentAlly',
      },
      {
        name: 'song-micro (2020)',
        description:
          'RESTful API microservices used to create playlists, like music, and follow users. Java, MongoDB, Neo4j.',
        link: 'https://github.com/salemalex11/song-micro',
      },
      {
        name: 'mongo-blog (2020)',
        description:
          'RESTful API used to create and read blog posts. Java, MongoDB.',
        link: 'https://github.com/salemalex11/mongo-blog',
      },
      {
        name: 'bacon-law (2020)',
        description:
          'RESTful API used to calculate Bacon’s Law for a given actor/actress. Java, Neo4j.',
        link: 'https://github.com/salemalex11/bacon-law',
      },
      {
        name: 'studenTax (2020)',
        description: 'Tax calculator for students. Python, Tkinter.',
        link: 'https://github.com/salemalex11/studenTax',
      },
      {
        name: 'gomoku (2019)',
        description: '2+ player japanese board game. Python, PyGame.',
        link: 'https://github.com/salemalex11/gomoku',
      },
      {
        name: 'twitter-scraper (2019)',
        description:
          'Twitter scraper used to perform analytics and export to CSV. Python, Requests, BeautifulSoup.',
        link: 'https://github.com/salemalex11/twitter-scraper',
      },
    ],
    
    skills: [
      {
        name: 'Languages',
        description: 'Python, Java, C, HTML, CSS, JavaScript',
      },
      {
        name: 'Frameworks',
        description: 'Flask, React, Node, Express',
      },
      {
        name: 'Databases',
        description: 'MySQL, PostgreSQL, MongoDB, Neo4j',
      },
      {
        name: 'Tools',
        description:
          'Git, Docker, Postman, Heroku, Wing, Eclipse, VS Code, Android Studio',
      },
      {
        name: 'Other',
        description:
          'Bilingual (English/French), Apple Certified iOS Technician (ACiT)',
      },
    ],
  },
  
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
