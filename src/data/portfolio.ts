import Iportfolio from '../interfaces/IPortfolio'
const data: Iportfolio[] = [
    {
        title: 'Portfolio',
        imgUrl: '/portfolio/assets/portfolio.png',
        stack: ['TypeScript', 'TailwindCSS', 'React'],
        link: 'https://github.com/Znarvl/portfolio'
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
        link: 'https://github.com/Znarvl/TDDE16_project'
    },
        {
        title: 'Travel with beer',
        imgUrl: '/portfolio/assets/uni_courses.png',
        stack: ['JS/TS', 'Python', 'Vue', 'Djangi'],
        link: 'https://github.com/Znarvl/TDDE16_project',
        text: 'fadsdasfa'
    }
]
export default data