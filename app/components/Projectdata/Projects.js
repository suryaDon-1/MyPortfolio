const projects = [
  {
    number: "01",
    title: "Daily Task Tracker",
    subtitle: "Where I started turning ideas into applications.",
    description:
      "A task management application built to create, organize, and track daily work while strengthening my foundation in full-stack development.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "/tracker.png",
    type: "Foundation",
    link: "https://tracker-frontend-roan.vercel.app/",
  },

  {
    number: "02",
    title: "Compliance Analysis",
    subtitle: "Where I started working with AI and real-world data.",
    description:
      "An AI-powered compliance platform that analyzes company policies against product standards using semantic search, embeddings, and LLM-based evaluation to generate verdicts and recommendations.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Qdrant",
      "Hugging Face",
      "Groq / Llama 3",
    ],
    image: "/complince.png",
    type: "AI + Analysis",
    link: "https://compliance-analysis-view.vercel.app/login",
  },

  {
    number: "03",
    title: "ShopX",
    subtitle: "Where I started thinking like a full-stack developer.",
    description:
      "A complete MERN e-commerce platform with authentication, product discovery, cart and order management, Razorpay payments, Cloudinary media, and separate user and admin workflows.",
    tech: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
      "JWT",
      "Google OAuth",
      "Razorpay",
      "Cloudinary",
    ],
    image: "/shopx.png",
    type: "Full Stack",
    featured: true,
    link: "https://shop-xview-y4in.vercel.app",
  },

  {
    number: "04",
    title: "AI Interview",
    subtitle: "Where full-stack development meets LLMs.",
    description:
      "An AI-powered interview preparation platform that generates personalized questions based on technology, interests, and difficulty, then evaluates responses and provides scores, strengths, and improvement areas.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST APIs",
      "Groq API",
    ],
      image: "/AiInterview.png",
    type: "AI Platform",
    link: "https://ai-question-view.vercel.app/",
  },
];
export default projects
