type Project = {
  id: number;
  title: string;
  description: string;
  date: number;
  address: string;
  repository: string;
};

const DummyData = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "ACME PHOTOGRAPHY",
      description: "A simple markup website crafted with HTML and CSS",
      date: 2021,
      address: "https://gbreg19.github.io/ACME-PHOTOGRAPHY/",
      repository: "https://github.com/GBreg19/ACME-PHOTOGRAPHY",
    },
    {
      id: 2,
      title: "Form webpage",
      description: "A form-focused webpage, designed with HTML and CSS",
      date: 2021,
      address: "https://gbreg19.github.io/Form/",
      repository: "https://github.com/GBreg19/Form",
    },
    {
      id: 3,
      title: "Corporate Business Flyer Template",
      description:
        "Corporate Business Flyer Template webpage, designed using HTML and CSS",
      date: 2021,
      address: "https://gbreg19.github.io/Corporate-Business-Flyer-Template/",
      repository: "https://github.com/GBreg19/Corporate-Business-Flyer-Template",
    },
    {
      id: 4,
      title: "Huddle",
      description: "A simple markup website crafted with HTML and CSS",
      date: 2021,
      address: "https://gbreg19.github.io/Huddle/",
      repository: "https://github.com/GBreg19/Huddle",
    },
    {
      id: 5,
      title: "construct.",
      description: "A simple  markup website designed with HTML and CSS",
      date: 2021,
      address: "https://gbreg19.github.io/construct/",
      repository: "https://github.com/GBreg19/construct",
    },
    {
      id: 6,
      title: "Anveshan",
      description: "A simple  markup website designed with HTML and CSS",
      date: 2021,
      address: "https://gbreg19.github.io/Anveshan/",
      repository: "https://github.com/GBreg19/Anveshan",
    },
    {
      id: 7,
      title: "Dice game",
      description:
        "Play a Dice Game! Built using HTML, CSS, and JavaScript for an interactive gaming experience.",
      date: 2022,
      address: "https://gbreg19.github.io/Dice-game/",
      repository: "https://github.com/GBreg19/Dice-game.git",
    },
    {
      id: 8,
      title: "Guess My Number!",
      description:
        "Enjoy the 'Guess My Number' game! Powered by HTML, CSS, and JavaScript for an exciting guessing challenge.",
      date: 2022,
      address: "https://gbreg19.github.io/Guess-my-Number/",
      repository: "https://github.com/GBreg19/Guess-my-Number.git",
    },
    {
      id: 9,
      title: "HHM",
      description:
        "Discover the 'Better Call Saul' law firm - HHM website! Built with HTML, CSS, and JavaScript, showcasing legal expertise and interactive elements.",
      date: 2022,
      address: "https://gbreg19.github.io/Project/",
      repository: "https://github.com/GBreg19/Project.git",
    },
    {
      id: 10,
      title: "Food Order App",
      description:
        "Experience a simple Food Order website, crafted with HTML, CSS, and React.js ",
      date: 2023,
      address: "https://gbreg19.github.io/food-app/",
      repository: "https://github.com/GBreg19/food-app.git",
    },
    {
      id: 11,
      title: "Mint Store",
      description:
        "Welcome to Mint! Explore e-commerce website offering books, DVDs, and furniture. Powered by HTML, Tailwind CSS and React.js",
      date: 2023,
      address: "https://gbreg19.github.io/mint-store/",
      repository: "https://github.com/GBreg19/mint-store.git",
    },
  ];
  
  return projects;
};

export default DummyData;
