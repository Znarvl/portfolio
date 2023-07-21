import Iportfolio from '../interfaces/IPortfolio'
const data: Iportfolio[] = [
    {
        title: 'Portfolio',
        imgUrl: '/portfolio/assets/portfolio.png',
        stack: ['TypeScript', 'TailwindCSS', 'React'],
        link: 'https://github.com/Znarvl/portfolio',
        text: 'This portfolio!'
    },
    {
        title: 'Fake news classification',
        imgUrl: '/portfolio/assets/fake_news.jpeg',
        text: 'A university course in text mining I identified fake news using Google BERT ',
        stack: ['Python', 'Pandas', 'BERT','TensorFlow',],
        link: 'https://github.com/Znarvl/TDDE16_project'
    },
    {
        title: 'University courses',
        imgUrl: '/portfolio/assets/uni_courses.png',
        stack: ['C/C++', 'Python', 'Java','R', 'And much more'],
        link: 'https://github.com/Znarvl/TDDE16_project',
        text: 'Here are most of the projects I have completed during my 5 years!'

    },
        {
        title: 'Travel with beer',
        imgUrl: '/portfolio/assets/uni_courses.png',
        stack: ['JS/TS', 'Python', 'Vue', 'Django'],
        link: 'https://github.com/Znarvl/TDDE16_project',
        text: 'A uni project that spun out to a personal project'
    }
]
export default data