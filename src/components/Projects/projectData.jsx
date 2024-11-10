const projectData = [
  {
    id: 1,
    title: "Shelfly - Inventory System",
    description:
      "Shelfly is a comprehensive inventory management system that streamlines the management of products, orders, and inventory levels. Built using Java full-stack technology, it integrates a Spring Boot backend with a React.js frontend, providing a secure and user-friendly platform for efficient stock tracking, role-based access control, and real-time alerts.",
    image: "/shelfly.png",
    context:
      "This project was developed to enhance inventory operations for businesses of all sizes, offering features like dynamic inventory tracking, low stock alerts, and order management. Created during my Java full-stack internship, it highlights my skills in backend and frontend development with technologies like React, Spring Boot, Hibernate, and MySQL.",
    details:
      "Shelfly's backend is powered by Spring Boot, with React.js as the frontend, and includes features such as product management, real-time inventory tracking, role-based access control, and low stock alerts. Users can manage products, track inventory levels, handle orders, and generate insightful reports. The system is designed with scalability and performance in mind, making it suitable for businesses of any scale.",
    timeframe: "July 2024 - August 2024",
    technologies: ["React.js", "Spring Boot", "Hibernate", "TypeScript", "MySQL", "Spring Security"],
    githubLink: "https://github.com/devashishsoni98/Shelfly",
  },
  {
    id: 2,
    title: "Hand Gesture - PPT",
    description:
      "This project uses hand gestures to control PowerPoint slides. A thumbs up goes to the previous slide, and a hand pointing up advances to the next slide.",
    image: "/p2.png",
    context:
      "This project was developed to control a PowerPoint presentation using hand gestures captured by a webcam. The project was built during my 3rd-year studies, focusing on integrating computer vision techniques for real-time gesture recognition to control PPT presentations dynamically.",
    details:
      "The project utilizes OpenCV for hand gesture detection and the win32com library to interact with PowerPoint. It uses the cvzone HandTrackingModule to detect and process hand gestures. The gestures are mapped to specific PowerPoint actions, such as moving to the next or previous slide based on the hand's position and finger movements. The program continuously monitors the webcam feed, detecting gestures to control the presentation.",
    timeframe: "November 2024",
    technologies: ["Python", "OpenCV", "cvzone", "win32com"],
    githubLink: "https://github.com/devashishsoni98/PPT-hand-gesture",
  },
  {
    id: 3,
    title: "MovieBazaar",
    description:
      "This is a movie website which displays a list of movies by collecting data from TMDB movie API. It also offers Firebase based Google Sign-In feature and movie search options!",
    image: "/moviebazaar.png",
    context:
      "This project was built during my First Year internship where I was learning about front end development using react js. The purpose was to build a project which uses a movie Api to display a list of movies and integrate different features such as fetching, searching and sorting data to learn new concepts of React JavaScript.",
    details:
      "This website is built using React JS and CSS. I have used multiple MUI Components to make this website. It is a movie display website which displays new trending movies on the home page by using the TMDB API. You can also search of any movie by using the search option in the navbar, it searches from the input data into the API database and display the best results.",
    timeframe: "August 2023 - September 2023",
    technologies: ["React JS", "Firebase", "HTML", "CSS"],
    githubLink: "https://github.com/devashishsoni98/moviebazaar",
    liveLink: "https://ds-movie-app.netlify.app/",
  },
  {
    id: 4,
    title: "Skyline Hotel Management",
    description:
      "This is a Hotel Management system with lots of features and functionalities.",
    image: "/skyline.png",
    context:
      "This project is being build for my second year NSP project with my teammate using HTML , CSS , JavaScript and Bootstrap. The purpose is to create a fully functioning Hotel Mangement system with multiple dynamic features like booking rooms, payment methods, admin and customer databse, manage rooms, reviews and users etc. This project will use mySql for the backend which will be integrated later on.",
    details:
      "This website is built using HTML5, CSS3 and JavaScript. It consists of multiple pages with different effects, transitions and features. ",
    timeframe: "October 2023 - Present",
    technologies: ["HTML", "CSS", "JS", "Bootstrap", "PHP", "MySql"],
    githubLink:
      "https://github.com/devashishsoni98/Web-Based-Skyline-Management-System",
    // liveLink: "https://skyline1.netlify.app/",
  },
  {
    id: 5,
    title: "Weather checking Website",
    description:
      "This is a simple and responsive weather website which shows the live weather for any city!",
    image: "/weather.png",
    context:
      "This project was built during my First Year internship where I was learning about front end development using react js. The purpose was to build a simple and responsive weather app which could be used to check weather for any city. I also wanted to try out the theme switching (light and dark theme) feature in this project. Overall, this purpose of this project was to learn how to deal with api and learn theme switching using css and js.",
    details:
      "This website is built using React Js and it collects data from the OpenWeatherMap API. It displays various information about the weather like temprature, humidity, what the area feels like and weather. It also have a toggle button which can be used to switch to a dark theme. I have also added the feature to activate search by clicking on the enter button only.",
    timeframe: "August 2023 - September 2023",
    technologies: ["React JS", "API", "HTML", "CSS"],
    githubLink: "https://github.com/devashishsoni98/weatherApp",
    liveLink: "https://ds-weather-app.netlify.app/",
  },
  {
    id: 6,
    title: "Quiz App",
    description: "A quiz app based on NextJs",
    image: "/quizquest.png",
    context:
      "This is one of the first project that I created as a part of my NextJs learning.",
    details:
      "This website is built using HTML5, CSS3 and JavaScript on NextJs. It consists of 5 different questions and it holds the score after each question and display results at last.",
    timeframe: "November 2023",
    technologies: ["Next JS", "HTML", "CSS"],
    githubLink: "https://github.com/devashishsoni98/QuizQuest",
    liveLink: "https://quiz-quest-app.netlify.app/",
  },
  {
    id: 7,
    title: "Flight Booking Website",
    description:
      "This is a simple and responsive frontend flight booking website with lots of effects and animations!",
    image: "/flight.png",
    context:
      "This project was built during my First Year internship where I was learning about front end development using react js. This project was made with the help of an online youtube tutorial by IsraTech. The purpose of this project was to learn about SASS and how it apply it for multipage website and learn new css attributes and effects.",
    details:
      "This website is built using React Js and SCSS. It consists of multiple pages with different hover effects, transitions and inputs.",
    timeframe: "August 2023",
    technologies: ["React JS", "HTML", "CSS"],
    githubLink: "https://github.com/devashishsoni98/flight-booking-website",
    liveLink: "https://ds-flight-app.netlify.app/",
  },
  {
    id: 8,
    title: "FlexStart Clone Website",
    description: "This is a clone for a bootstrap template FlexStart!",
    image: "/flexstart.png",
    context:
      "This project was built during my First Year internship using HTML , CSS , JavaScript and Bootstrap. The purpose was to build a clone and learn about how use bootstrap into a website and strengthen my knowledge of CSS and JavaScript.",
    details:
      "This website is built using HTML5, CSS3 and JavaScript. It consists of multiple pages with different hover effects, transitions and animations. ",
    timeframe: "August 2023",
    technologies: ["HTML", "CSS", "JS", "Bootstrap"],
    githubLink: "https://github.com/devashishsoni98/flexstart-clone",
    liveLink: "https://ds-flexstart-clone.netlify.app/",
  },
];

export default projectData;
