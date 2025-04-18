import type Iportfolio from "../interfaces/IPortfolio";
const data: Iportfolio[] = [
  {
    id: 0,
    title: "Portfolio",
    imgUrl: "/portfolio/assets/portfolio.png",
    stack: ["TypeScript", "TailwindCSS", "React", "DevOps"],
    link: "https://github.com/Znarvl/portfolio",
    text: "This portfolio!",
  },
  {
    id: 1,
    title: "Fake news classification",
    imgUrl: "/portfolio/assets/fake_news.jpeg",
    text: "During a university text mining course, I utilized Google BERT to identify instances of fake news",
    stack: ["Python", "Pandas", "BERT", "TensorFlow"],
    link: "https://github.com/Znarvl/TDDE16_project",
  },
  {
    id: 2,
    title: "University courses",
    imgUrl: "/portfolio/assets/uni_courses.png",
    stack: ["C/C++", "Python", "Java", "R", "And much more"],
    link: "https://github.com/Znarvl/University-courses",
    text: "Below are the majority of projects I have completed over my 5-years",
  },
  {
    id: 3,
    title: "Travel with beer",
    imgUrl: "/portfolio/assets/beerbottle.jpg",
    stack: ["MongoDB", "Express", "React", "Node", "Javascript"],
    link: "https://github.com/Znarvl/Travel-with-beer",
    text: "Developed a full-stack application during university coursework. I am right now working on a continuation from scratch",
  },
];
export default data;
