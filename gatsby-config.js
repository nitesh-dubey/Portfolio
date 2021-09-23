module.exports = {
  pathPrefix: `/myportfolio`,
  siteMetadata: {
    title: "Nitesh's Portfolio",
    links: {
      legato: {
        url: `https://www.legatohealth.com/`
      },
      projects: {
        splash: {
          github: 'https://github.com/nitesh-dubey/Splash-Image-Search',
          website: 'https://splash.vercel.app/'
        },
        intown: {
          github: `https://github.com/nitesh-dubey/Intown`
        },
        vient: {
          github: `https://github.com/nitesh-dubey/Vient`
        },
        propertyManagement: {
          github: `https://github.com/nitesh-dubey/Property-Management`
        },
        mazeGame: {
          github: `https://github.com/nitesh-dubey/Maze-Game`,
          demo: `https://nitesh-dubey.github.io/Maze-Game`
        },
        imageCaptioning: {
          github: `https://github.com/nitesh-dubey/Neural-Image-Captioning`
        },
        textSummarization: {
          github: `https://github.com/nitesh-dubey/Abstractive-Text-Summarization`
        },
        fitnessbook: {
          github: `https://github.com/nitesh-dubey/FitnessBook2`
        }
      },
      personal: {
        gmail: 'mailto:niteshdubey100@gmail.com',
        github: 'https://github.com/nitesh-dubey',
        linkedin: 'https://www.linkedin.com/in/niteshdubey300/'
      }
    },
    skills: [
      {
        title: 'Frontend',
        technologies: [
          { name: 'React Js', filename: 'react' },
          { name: 'Material UI', filename: 'mui' },
          { name: 'React Native', filename: 'rn' },
          { name: 'React Native Elements', filename: 'rn-elements' },
          { name: 'HTML', filename: 'html' },
          { name: 'CSS', filename: 'css' },
          { name: 'Javascript', filename: 'js' },
          { name: 'Gatsby', filename: 'gatsby' }
        ]
      },
      {
        title: 'Backend',
        technologies: [
          { name: 'Node.js', filename: 'nodejs' },
          { name: 'Express.js', filename: 'express' },
          { name: 'MongoDB', filename: 'mongodb' },
          { name: 'MySQL', filename: 'mysql' },
          { name: 'GraphQL', filename: 'graphql' },
          { name: 'Amazon Web Services', filename: 'aws' },
          { name: 'Firebase', filename: 'firebase' }
        ]
      },
      {
        title: 'Machine Learning',
        technologies: [
          { name: 'Keras', filename: 'keras' },
          { name: 'Python', filename: 'python' },
          { name: 'Scikit Learn', filename: 'scikit' }
        ]
      },
      {
        title: 'Others',
        technologies: [
          { name: 'CPP', filename: 'cpp' },
          { name: 'Android Studio', filename: 'androidstudio' },
          { name: 'Expo', filename: 'expo' },
          { name: 'Git', filename: 'git' }
        ]
      }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#f6f1ed',
        theme_color: '#f6f1ed',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: {
            include: /skills\/.*\.svg/
          }
        }
      }
    }

    // 'gatsby-plugin-offline',
  ]
};
