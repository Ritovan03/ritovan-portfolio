import {
  appdev,
  webdev,
  war,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  firebase,
  kotlin,
  android,
  gdg_logo,
  epoch_logo,
  crispr
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "blog",
    title: "Blogs",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Science Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Android",
    icon: android,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "Native App Developer",
    company_name: "Epoch",
    icon: epoch_logo,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Developing and maintaining mobile applications using Kotlin and other related technologies.",
      "Collaborating with cross-functional teams including machine learning, NLP engineers to create high-quality products.",
      "Implementing and integrating machine learning models effectively within mobile apps to enhance user experience.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Application Development Core",
    company_name: "GDG IIIT SriCity",
    icon: gdg_logo,
    iconBg: "#E6DEDD",
    date: "Sepetember 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  // {
  //   title: "Oratory Lead",
  //   company_name: "Keynote",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },

];

const blogPosts = [
  {
    title: "Building Modern Web Applications with React and Three.js",
    excerpt: "Explore the intersection of 3D graphics and web development as we dive into creating immersive experiences using React and Three.js.",
    content: `In recent years, the combination of React and Three.js has opened up new possibilities in web development, enabling developers to build highly interactive and visually appealing web applications. React’s component-based architecture provides a flexible way to manage UI, while Three.js allows for rendering 3D graphics directly in the browser, making it ideal for immersive applications, from gaming to e-commerce.
  
  One of the main benefits of using Three.js with React is the ease of integrating complex animations and 3D models into a familiar React codebase. Libraries like react-three-fiber simplify this integration by providing a declarative way to handle 3D scenes within React components, allowing developers to leverage React’s state management and lifecycle methods while working with 3D objects.
  
  A key challenge, however, lies in optimizing performance. 3D rendering can be resource-intensive, and creating smooth, real-time interactions requires careful attention to rendering techniques and frame rate optimization. Techniques like selective rendering, where only the necessary parts of a scene are updated, and the use of lower-polygon models can help in achieving a seamless experience for users across devices.
  
  Building applications with React and Three.js also requires consideration of user interaction. Adding 3D elements opens the door for new ways to engage users, whether through custom animations, dynamic lighting, or interactive objects that respond to user inputs. This approach not only enhances the user experience but also makes web applications stand out in a crowded digital landscape.
  
  The potential applications of React and Three.js are vast. As more tools emerge to support 3D web development, the line between web apps and native applications continues to blur. With the combined power of React and Three.js, developers are well-equipped to build the next generation of engaging, immersive web experiences.`,
    author: "Ritovan Dasgupta",
    date: "Oct 30, 2024",
    readTime: "5 min read",
    category: "Web Development",
    image: webdev,
    tags: ["React", "Three.js", "WebGL"],
  },
  {
    title: "The Future of Mobile Development with Kotlin",
    excerpt: "Discover how Kotlin is revolutionizing Android development and why it's becoming the preferred choice for modern mobile applications.",
    content: `Kotlin has rapidly become the go-to language for Android development, celebrated for its conciseness, safety, and modern syntax. Developed by JetBrains, Kotlin was introduced as an official language for Android by Google in 2017, and since then, it has continued to gain popularity among developers due to its seamless integration with the Android ecosystem and its support for functional programming concepts.
  
  One of Kotlin’s key strengths is its ability to reduce boilerplate code, making applications easier to read and maintain. Features like null safety help prevent common bugs, such as null pointer exceptions, improving app stability. Additionally, Kotlin’s compatibility with Java allows developers to gradually migrate Java codebases or even use both languages within the same project, making the transition to Kotlin much more accessible.
  
  Kotlin Multiplatform, an experimental feature, takes things a step further by allowing code reuse across multiple platforms, including iOS, backend, and web applications. This capability is particularly appealing to businesses and developers who want to create cross-platform apps without compromising performance or native functionality.
  
  The future of mobile development with Kotlin looks promising, as Google and JetBrains continue to enhance the language with new features and tools specifically tailored for Android. With support for coroutines and async programming, Kotlin enables developers to handle asynchronous tasks more efficiently, a crucial aspect of modern mobile apps that require real-time data updates.
  
  As Kotlin’s ecosystem expands and more libraries and tools emerge, it’s likely to become an even more integral part of Android development. For developers and companies alike, investing in Kotlin skills and adopting the language in projects promises long-term benefits, positioning Kotlin as the language of choice for modern, robust, and high-performing Android applications.`,
    author: "Ritovan Dasgupta",
    date: "Oct 25, 2024",
    readTime: "7 min read",
    category: "Mobile Development",
    image: appdev,
    tags: ["Kotlin", "Android", "Mobile"],
  },  
  {
    title: "CRISPR - Revolutionizing Genetics for Good",
    excerpt: "Explore how CRISPR technology is reshaping genetic research and addressing global challenges in healthcare, agriculture, and beyond.",
    content: `CRISPR, short for "Clustered Regularly Interspaced Short Palindromic Repeats," is a revolutionary genetic editing tool that enables scientists to precisely alter DNA. Its discovery marked a new era in genetic engineering, allowing unprecedented control over gene manipulation. Initially observed as a natural defense mechanism in bacteria, CRISPR has now become a foundational technology for genome editing across various fields.
    
    In healthcare, CRISPR opens doors to treating genetic disorders at their root. Diseases like cystic fibrosis, sickle cell anemia, and certain types of cancer may one day be cured through gene editing therapies. Researchers are currently exploring how to deliver these edits safely and effectively, ensuring they target only the intended genes and leave the rest of the genome intact.
    
    Agriculture also stands to benefit immensely from CRISPR. It offers a way to enhance crop resilience against pests, diseases, and extreme weather conditions brought on by climate change. By editing genes within plants, scientists can create strains that require fewer pesticides, need less water, and yield more nutritious produce. This sustainable approach could be key in addressing food insecurity and promoting environmental conservation.
    
    Yet, as promising as CRISPR is, it also raises ethical questions. The potential to edit human embryos, for instance, brings forth discussions on "designer babies" and genetic inequality. The technology’s power to alter life’s fundamental code requires careful consideration to avoid unintended consequences and ensure it benefits humanity as a whole.
    
    CRISPR’s journey from scientific curiosity to a transformative tool showcases the power of innovation in tackling global challenges. As research advances, CRISPR could unlock solutions to some of the most pressing issues facing our world, embodying a "Tech for Good" approach with profound implications for our future.`,
    author: "Ritovan Dasgupta",
    author: "Ritovan Dasgupta",
    date: "Oct 25, 2024",
    readTime: "15 min read",
    category: "Tech for Good",
    image: crispr,

    tags: ["Biology", "Eugenics"],
  },
  {
    title: "Impact of War on Technology Advancement",
    excerpt: "An exploration of how war has driven technological innovation, shaping the modern world in unexpected ways.",
    content: `War has often been a catalyst for rapid technological advancement, with conflicts throughout history driving nations to innovate in ways that influence both military and civilian life. From the development of radar and jet engines during World War II to the internet’s origin as a military project, war has frequently led to breakthroughs that shape society long after the conflicts end.
  
  The relationship between war and technology is complex. On one hand, the urgent need for defense and survival propels massive investments in research and development, leading to innovations that might not emerge in peacetime. For instance, the invention of the computer was accelerated during World War II as nations sought ways to break enemy codes. Similarly, nuclear power, which now serves as a significant source of global energy, originated from efforts to create powerful weapons.
  
  Yet, the consequences of war-driven advancements are mixed. Technologies initially intended for military use often find beneficial applications; for example, GPS was originally a military navigation tool and now underpins countless civilian applications. However, these advancements can also escalate future conflicts, as countries strive to match or surpass each other’s technological capabilities.
  
  In the medical field, war has likewise driven progress. Many modern surgical techniques, trauma care practices, and rehabilitation methods were developed to treat soldiers injured in battle. Innovations in prosthetics and mental health treatments, such as those for PTSD, emerged in response to the demands of wartime medicine and continue to improve lives today.
  
  War's influence on technology serves as a powerful reminder of humanity’s capacity for innovation in times of crisis. However, it also raises ethical questions: how can we balance the drive for technological progress with a commitment to peace? As we move forward, examining the impact of war on technology can help us find ways to foster innovation that benefits society without the cost of conflict.`,
    author: "Ritovan Dasgupta",
    date: "Oct 25, 2024",
    readTime: "10 min read",
    category: "Analysis",
    image: war,
    tags: ["Philosophy", "History", "Science"],
  },

  // Add more blog posts as needed
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, blogPosts, projects };
