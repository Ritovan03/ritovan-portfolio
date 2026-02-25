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
  threejs,
  firebase,
  kotlin,
  android,
  gdg_logo,
  epoch_logo,
  crispr,
  terrapulse,
  mintbolt,
  sparkchain,
  enest_logo,
  maitri,
  gcp_proj,
  gcp,
  redis,
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
    name: "gcp",
    icon: gcp,
  },
  {
    name: "redis",
    icon: redis,
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
    title: "SDE Intern",
    company_name: "ENest",
    icon: enest_logo,
    iconBg: "#383E56",
    date: "June 2025 - Present",
    points: [
      "Led design, development, and production deployment of the mobile app, serving 100+ active users on the Play Store.",
      "Integrated Razorpay Payment Gateway with real-time webhook handling for seamless course enrollment transactions.",
      "Built scalable RESTful APIs using Node.js and Express with JWT authentication, validation middleware, and error handling.",
      "Optimized MVVM architecture in Flutter with efficient state management and local caching, improving API efficiency by 30%.",
    ],
  },
  {
    title: "Native App Developer",
    company_name: "Epoch",
    icon: epoch_logo,
    iconBg: "#383E56",
    date: "August 2024 - April 2025",
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
    date: "Sepetember 2024 - April 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const blogPosts = [
  {
    title: "Building Modern Web Applications with React and Three.js",
    slug: "building-modern-web-applications-react-threejs",
    excerpt:
      "Explore the intersection of 3D graphics and web development as we dive into creating immersive experiences using React and Three.js.",
    content: `# Building Modern Web Applications with React and Three.js

In recent years, the combination of **React** and **Three.js** has opened up new possibilities in web development, enabling developers to build highly interactive and visually appealing web applications. React's component-based architecture provides a flexible way to manage UI, while Three.js allows for rendering 3D graphics directly in the browser, making it ideal for immersive applications, from gaming to e-commerce.

## Integration Benefits & Advantages

One of the main benefits of using Three.js with React is the ease of integrating complex animations and 3D models into a familiar React codebase. Libraries like **react-three-fiber** simplify this integration by providing a declarative way to handle 3D scenes within React components, allowing developers to leverage React's state management and lifecycle methods while working with 3D objects.

### Key Features:
- **Component-Based Architecture** - Familiar React patterns for 3D development
- **State Management Integration** - Seamless data flow between UI and 3D elements  
- **Declarative Scene Handling** - Describe what you want, not how to build it
- **Lifecycle Method Compatibility** - Use React hooks and lifecycle methods

## Performance Optimization Strategies
  
  A key challenge, however, lies in optimizing performance. 3D rendering can be resource-intensive, and creating smooth, real-time interactions requires careful attention to rendering techniques and frame rate optimization.

### Critical Techniques:
1. **Selective Rendering** - Only update necessary parts of a scene
2. **Level of Detail (LOD)** - Use lower-polygon models for distant objects
3. **Frustum Culling** - Don't render objects outside camera view
4. **Texture Optimization** - Compress and cache textures efficiently
5. **Frame Rate Management** - Maintain consistent 60fps across devices

Techniques like selective rendering, where only the necessary parts of a scene are updated, and the use of lower-polygon models can help in achieving a seamless experience for users across devices.

## Enhanced User Interaction Possibilities
  
  Building applications with React and Three.js also requires consideration of user interaction. Adding 3D elements opens the door for new ways to engage users:

- **Custom Animations** - Physics-based transitions and smooth movements
- **Dynamic Lighting** - Real-time lighting systems responding to user actions  
- **Interactive Objects** - 3D elements that respond to mouse, touch, and keyboard inputs
- **Immersive Experiences** - VR/AR-ready applications with WebXR support
- **Physics Integration** - Realistic object interactions using physics engines

This approach not only enhances the user experience but also makes web applications stand out in a crowded digital landscape.

## Real-World Applications & Industry Impact

The potential applications of React and Three.js are vast and continue to expand across industries: As more tools emerge to support 3D web development, the line between web apps and native applications continues to blur. With the combined power of React and Three.js, developers are well-equipped to build the next generation of engaging, immersive web experiences that were once only possible in native applications.

> *"The web is evolving from a document-based medium to an experiential platform where users don't just read content—they interact with and inhabit digital spaces."*`,
    author: "Ritovan Dasgupta",
    date: "Oct 30, 2024",
    readTime: "5 min read",
    category: "Web Development",
    image: webdev,
    tags: ["React", "Three.js", "WebGL"],
  },
  {
    title: "The Future of Mobile Development with Kotlin",
    slug: "future-of-mobile-development-kotlin",
    excerpt:
      "Discover how Kotlin is revolutionizing Android development and why it's becoming the preferred choice for modern mobile applications.",
    content: `# The Evolution of Android Development with Kotlin

**Kotlin** has rapidly become the go-to language for Android development, celebrated for its conciseness, safety, and modern syntax. Developed by JetBrains, Kotlin was introduced as an official language for Android by Google in 2017, and since then, it has continued to gain popularity among developers due to its seamless integration with the Android ecosystem and its support for functional programming concepts.

## Core Strengths of Kotlin

One of Kotlin's key strengths is its ability to reduce boilerplate code, making applications easier to read and maintain. Features like **null safety** help prevent common bugs, such as null pointer exceptions, improving app stability.

### Key Features:
- **Null Safety** - Compile-time null checking prevents NPEs
- **Concise Syntax** - Write more with significantly less code than Java
- **100% Java Interoperability** - Seamless integration with existing Java code
- **Modern Language Features** - Lambdas, extension functions, coroutines, and more

Additionally, Kotlin's compatibility with Java allows developers to gradually migrate Java codebases or even use both languages within the same project, making the transition to Kotlin much more accessible.

## Kotlin Multiplatform Revolution

Kotlin Multiplatform takes development efficiency to the next level by enabling code reuse across multiple platforms:

### Supported Platforms:
1. **Android Applications** - Native Android development with full platform access
2. **iOS Applications** - Share business logic while maintaining native UI
3. **Web Development** - Kotlin/JS for modern frontend applications
4. **Backend Services** - Kotlin/JVM for robust server-side development
5. **Desktop Applications** - Kotlin/Native for cross-platform desktop apps

This capability is particularly appealing to businesses and developers who want to create cross-platform applications without compromising performance or native functionality.

## Asynchronous Programming with Coroutines

The future of mobile development with Kotlin looks promising, as Google and JetBrains continue to enhance the language with powerful features. **Coroutines** enable developers to handle asynchronous tasks more efficiently:

\`\`\`kotlin
// Simple coroutine example for network calls
suspend fun fetchUserData(): UserData {
    return withContext(Dispatchers.IO) {
        val response = userApiService.getUser()
        processUserData(response)
    }
}

// Usage in a ViewModel
class UserViewModel : ViewModel() {
    fun loadUser() {
        viewModelScope.launch {
            try {
                val userData = fetchUserData()
                _userState.value = userData
            } catch (e: Exception) {
                handleError(e)
            }
        }
    }
}
\`\`\`

This is crucial for modern mobile apps that require real-time data updates and responsive user interfaces.

## The Android Ecosystem Advantage

As Kotlin's ecosystem expands and more libraries and tools emerge, it's likely to become an even more integral part of Android development:

### Modern Android Development Stack:
- **Jetpack Compose** - Declarative UI toolkit built for Kotlin
- **Android KTX** - Kotlin extensions that make Android APIs more concise
- **Room Database** - Type-safe database access with coroutine support
- **WorkManager** - Background task scheduling with Kotlin-first APIs
- **Navigation Component** - Type-safe navigation with Kotlin DSL

## Future Outlook

For developers and companies alike, investing in Kotlin skills and adopting the language in projects promises long-term benefits, positioning Kotlin as the language of choice for modern, robust, and high-performing Android applications.

> *"Kotlin isn't just a programming language; it's a paradigm shift towards more efficient, safer, and enjoyable development that scales from mobile to enterprise applications."*

The future belongs to developers who embrace Kotlin's modern approach to software development.`,
    author: "Ritovan Dasgupta",
    date: "Oct 25, 2024",
    readTime: "7 min read",
    category: "Mobile Development",
    image: appdev,
    tags: ["Kotlin", "Android", "Mobile"],
  },
  {
    title: "CRISPR - Revolutionizing Genetics for Good",
    slug: "crispr-revolutionizing-genetics-for-good",
    excerpt:
      "Explore how CRISPR technology is reshaping genetic research and addressing global challenges in healthcare, agriculture, and beyond.",
    content: `# CRISPR - Revolutionizing Genetics for Good

**CRISPR**, short for "Clustered Regularly Interspaced Short Palindromic Repeats," is a revolutionary genetic editing tool that enables scientists to precisely alter DNA. Its discovery marked a new era in genetic engineering, allowing unprecedented control over gene manipulation. Initially observed as a natural defense mechanism in bacteria, CRISPR has now become a foundational technology for genome editing across various fields.

## How CRISPR Works

CRISPR functions like a molecular pair of scissors, capable of cutting DNA at specific locations. The system consists of two main components:

### Core Components:
- **Guide RNA (gRNA)** - Directs the system to the target DNA sequence
- **Cas Proteins** - Act as molecular scissors to cut the DNA
- **Repair Mechanisms** - Cellular machinery that fixes the cut, allowing for precise edits

This precision allows scientists to add, remove, or alter specific DNA sequences with remarkable accuracy.

## Healthcare Revolution

In healthcare, CRISPR opens unprecedented doors to treating genetic disorders at their root cause:

### Medical Applications:
- **Genetic Disorders** - Potential cures for cystic fibrosis, sickle cell anemia, Huntington's disease
- **Cancer Treatment** - Engineering immune cells to better fight tumors (CAR-T therapy)
- **Infectious Diseases** - Developing resistance to HIV, hepatitis B
- **Organ Transplants** - Creating compatible organs to reduce rejection
- **Regenerative Medicine** - Repairing damaged tissues and organs

Researchers are currently exploring how to deliver these edits safely and effectively, ensuring they target only the intended genes while leaving the rest of the genome intact.

## Agricultural Innovation

Agriculture stands to benefit immensely from CRISPR technology, offering sustainable solutions to global food challenges:

### Crop Enhancement:
1. **Disease Resistance** - Crops immune to bacterial, viral, and fungal infections
2. **Climate Adaptability** - Plants that thrive in drought, flood, or extreme temperatures
3. **Nutritional Enhancement** - Biofortified crops with higher vitamin and mineral content
4. **Reduced Chemical Dependency** - Pest-resistant crops requiring fewer pesticides
5. **Extended Shelf Life** - Produce that stays fresh longer, reducing food waste

By editing genes within plants, scientists can create strains that require fewer pesticides, need less water, and yield more nutritious produce. This sustainable approach could be key in addressing food insecurity and promoting environmental conservation.

## Ethical Considerations & Challenges

Yet, as promising as CRISPR is, it also raises significant ethical questions that must be carefully addressed:

### Key Concerns:
- **Human Germline Editing** - Changes that could be passed to future generations
- **Designer Babies** - Potential for genetic enhancement beyond medical necessity
- **Genetic Inequality** - Access disparities creating genetic "haves" and "have-nots"
- **Unintended Consequences** - Off-target effects and long-term implications
- **Regulatory Frameworks** - Need for international governance and oversight

The technology's power to alter life's fundamental code requires careful consideration to avoid unintended consequences and ensure it benefits humanity as a whole.

## Global Impact & Applications

### Current Research Areas:
- **Conservation Biology** - Protecting endangered species and ecosystems
- **Industrial Biotechnology** - Producing biofuels and sustainable materials
- **Drug Development** - Creating better disease models for testing
- **Personalized Medicine** - Tailored treatments based on individual genetics

## The Road Ahead

CRISPR's journey from scientific curiosity to a transformative tool showcases the power of innovation in tackling global challenges. As research advances and regulatory frameworks evolve, CRISPR could unlock solutions to some of the most pressing issues facing our world.

### Future Possibilities:
- **Base Editing** - Making single-letter DNA changes without cutting
- **Prime Editing** - Even more precise editing with fewer errors
- **Epigenetic Editing** - Controlling gene expression without changing DNA
- **In Vivo Delivery** - Direct treatment in living organisms

> *"CRISPR represents more than just a scientific breakthrough—it's a paradigm shift that puts the power to heal, feed, and protect our world directly into our hands. The question isn't what we can do, but what we should do."*

This embodies a "Tech for Good" approach with profound implications for creating a healthier, more sustainable future for all humanity.`,
    author: "Ritovan Dasgupta",
    date: "Oct 25, 2024",
    readTime: "15 min read",
    category: "Tech for Good",
    image: crispr,

    tags: ["Biology", "Eugenics"],
  },
  {
    title: "Impact of War on Technology Advancement",
    slug: "impact-of-war-on-technology-advancement",
    excerpt:
      "An exploration of how war has driven technological innovation, shaping the modern world in unexpected ways.",
    content: `# The Impact of War on Technology Advancement

War has often been a catalyst for rapid technological advancement, with conflicts throughout history driving nations to innovate in ways that profoundly influence both military and civilian life. From the development of radar and jet engines during World War II to the internet's origin as a military project, war has frequently led to breakthroughs that continue to shape society long after the conflicts end.

## The War-Innovation Paradox

The relationship between war and technology is complex and multifaceted. On one hand, the urgent need for defense and survival propels massive investments in research and development, leading to innovations that might not emerge in peacetime.

### Historical Examples:
- **World War II** - Computers (code-breaking), radar, jet engines, antibiotics
- **Cold War Era** - Internet (ARPANET), GPS, satellites, microprocessors
- **Modern Conflicts** - Drones, cybersecurity, advanced materials, AI systems

### The Innovation Drivers:
1. **Unlimited Funding** - Governments invest heavily without typical ROI constraints
2. **Urgency Factor** - Compressed development timelines accelerate innovation
3. **Cross-Disciplinary Collaboration** - Scientists and engineers work together intensively
4. **Risk Tolerance** - Acceptance of experimental approaches and failure

For instance, the invention of the computer was accelerated during World War II as nations sought ways to break enemy codes. Similarly, nuclear power, which now serves as a significant source of global energy, originated from efforts to create powerful weapons.

## Dual-Use Technology: Military to Civilian

Yet, the consequences of war-driven advancements are mixed. Many technologies initially developed for military purposes have found transformative civilian applications:

### Communication & Navigation:
- **Internet** - ARPANET → Global communication network
- **GPS** - Military navigation → Ubiquitous location services
- **Satellite Technology** - Reconnaissance → Weather, communications, entertainment
- **Mobile Communications** - Military radios → Cellular networks

### Computing & Electronics:
- **Computers** - Code-breaking → Personal computers, smartphones
- **Microprocessors** - Missile guidance → Modern digital devices
- **Touchscreen Technology** - Military interfaces → Consumer electronics

### Materials & Manufacturing:
- **Composite Materials** - Aircraft → Automotive, consumer goods
- **Advanced Alloys** - Military hardware → Medical implants, aerospace
- **Miniaturization** - Military electronics → Portable consumer devices

Technologies initially intended for military use often find beneficial applications; for example, GPS was originally a military navigation tool and now underpins countless civilian applications. However, these advancements can also escalate future conflicts, as countries strive to match or surpass each other's technological capabilities.

## Medical Advances Born from Conflict

In the medical field, war has likewise driven unprecedented progress in medical science and healthcare:

### Surgical Innovations:
- **Trauma Surgery** - Battlefield medicine → Emergency room protocols
- **Prosthetics** - Amputee rehabilitation → Advanced biomechanical devices
- **Plastic Surgery** - Treating war injuries → Reconstructive and cosmetic medicine
- **Blood Banking** - Battlefield transfusions → Modern blood donation systems

### Mental Health Breakthroughs:
- **PTSD Research** - Shell shock studies → Modern trauma psychology
- **Rehabilitation Methods** - Veteran care → Physical and occupational therapy
- **Pharmaceutical Development** - Pain management → Modern analgesics and anesthetics

Many modern surgical techniques, trauma care practices, and rehabilitation methods were developed to treat soldiers injured in battle. Innovations in prosthetics and mental health treatments, such as those for PTSD, emerged in response to the demands of wartime medicine and continue to improve lives today.

## The Ethical Technology Dilemma

While war accelerates innovation, it also raises profound ethical questions about the relationship between conflict and technological progress:

### The Paradox:
- Technologies that save lives often originate from tools designed to take them
- Medical advances emerge from studying the effects of weapons
- Communication tools that connect humanity began as military command systems

### Modern Concerns:
- **Autonomous Weapons** - AI systems making life-and-death decisions
- **Cyber Warfare** - Digital attacks on civilian infrastructure
- **Surveillance Technology** - Privacy versus security in democratic societies
- **Space Militarization** - Weaponization of space-based systems

## Innovation Without Conflict

The critical question for our future is: *Can we maintain the pace of innovation without the catalyst of war?*

### Alternative Innovation Drivers:
- **Climate Change** - Renewable energy, carbon capture, sustainable technology
- **Space Exploration** - Commercial space race, Mars colonization, asteroid mining
- **Global Health Challenges** - Pandemic preparedness, aging populations, rare diseases
- **Digital Transformation** - AI, quantum computing, virtual reality

## The Path Forward

War's influence on technology serves as a powerful reminder of humanity's capacity for innovation in times of crisis. However, it also challenges us to consider how we can harness that same innovative spirit for peaceful purposes.

### Strategic Approaches:
1. **Grand Challenges** - Moon shots for humanity's biggest problems
2. **International Collaboration** - Pooling resources for common goals
3. **Public-Private Partnerships** - Combining government funding with private innovation
4. **Open Source Development** - Collaborative, transparent innovation models

As we move forward, examining the impact of war on technology can help us find ways to foster innovation that benefits society without the devastating cost of conflict. The goal is to create a future where human ingenuity is driven by hope and collaboration rather than fear and competition.

> *"The same human creativity that has given us the tools of war can give us the tools of peace. The choice of how we direct our innovative capacity will determine whether technology becomes humanity's greatest blessing or its final curse."*

By understanding this relationship, we can work toward channeling our innovative potential into solving humanity's greatest challenges—creating a more peaceful, prosperous, and sustainable world for all.`,
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
    name: "TerraPulse",
    description:
      "Mobile App which allows user to identify & learn about animals & plants using gen AI. Along with that comes with a marketplace for environment conscious buyers.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "gemini",
        color: "pink-text-gradient",
      },
    ],
    image: terrapulse,
    source_code_link: "https://github.com/Ritovan03/TerraPulse",
  },
  {
    name: "MintBolt",
    description:
      "A chatbot which allows employees to submit and manage invoices,bills,etc and generate relevant insights & analytics on them and perform queries on them.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
    ],
    image: mintbolt,
    source_code_link: "https://github.com/Ritovan03/MintBolt",
  },
  {
    name: "Smart Campus",
    description:
      "SmartCampus is a real-time, full-stack campus monitoring platform built with React, Firebase/Firestore, Node.js, and GCP Functions for tracking energy, water, weather, and building infrastructure with KPI dashboards, automated data ingestion, and role-based access control.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "gemini",
        color: "pink-text-gradient",
      },
    ],
    image: terrapulse,
    source_code_link: "https://github.com/Ritovan03/TerraPulse",
  },
  {
    name: "GCP RAG Engine",
    description:
      "A practical, serverless Retrieval-Augmented Generation (RAG) engine on Google Cloud Platform. This project uses Google Cloud Functions to retrieve context from documents in Cloud Storage and a Vertex AI LLM to generate answers.",
    tags: [
      {
        name: "GCP Vertex AI",
        color: "blue-text-gradient",
      },
      {
        name: "GCP Cloud Run",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: gcp_proj,
    source_code_link: "https://github.com/Ritovan03/gcp-rag-engine",
  },
  {
    name: "Maitri",
    description:
      "Maitri is a privacy-preserving, multimodal AI-powered web application designed for the AI for Early Mental Health Detection.It acts as a personal mental wellness companion, empowering users to understand, track, and improve their emotional well-being through analysis of text, audio, and video cues.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vision Transformer",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
    ],
    image: maitri,
    source_code_link: "https://github.com/Ritovan03/Maitri",
  },
  {
    name: "Luna",
    description:
      "Mobile App which allows user to identify & learn about animals & plants using gen AI. Along with that comes with a marketplace for environment conscious buyers.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "gemini",
        color: "pink-text-gradient",
      },
    ],
    image: terrapulse,
    source_code_link: "https://github.com/Ritovan03/TerraPulse",
  },
];

export { services, technologies, experiences, blogPosts, projects };
