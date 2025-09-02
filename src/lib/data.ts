import { AboutType, ArtboardType, BioType, FaqType, ProjectType, SkillType, SocialType, TestimonialType } from "@/types/types"
import { AntDesign, Bootstrap, ChatGPT, ContentCreator, Css3, DaisyUi, Facebook, FrontendDevelopment, Github, Html5, Invision, Javascript, Jira, Json, Keynote, Linkedin, MongoDB, Mui, Netlify, Nextjs, Nodejs, Npm, ProductManagement, QADebugging, React, Sass, ShadcnUi, TailwindCss, TechnicalWriting, Trello, Typescript, UXDesignResearch, Youtube, Zendesk } from "@/components/Icons"

export const about: AboutType[] = [
 { title: "Product Managment", subtitle: "Worked 7 years as a product manager in an agile environment", Icon: ProductManagement },
 { title: "Frontend Development", subtitle: "Self-taught frontend developer that's never finished learning", Icon: FrontendDevelopment },
 { title: "UX/UI Design & Research", subtitle: "What started out as a hobby soon became a passion", Icon: UXDesignResearch },
 { title: "Content Creator", subtitle: "Created, scripted, and recorded various product and project tutorials", Icon: ContentCreator },
 { title: "QA and Debugging", subtitle: "Thoroughly tested and documented bugs and areas of improvement", Icon: QADebugging },
 { title: "Technical Writing", subtitle: "Authored a 170+ page user manual from scratch", Icon: TechnicalWriting }
]

export const desktopArtboards: ArtboardType[] = [
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-1.webp", alt: "Live video conferencing", width: 1024, height: 600 },
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-2.webp", alt: "YouTube clone", width: 1024, height: 600 },
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-3.webp", alt: "Multimedia show builder", width: 1024, height: 600 },
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-4.webp", alt: "Live video conferencing with chat", width: 1024, height: 600 },
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-5.webp", alt: "Video editor", width: 1024, height: 600 },
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-6.webp", alt: "Zendesk home page", width: 1024, height: 600 },
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-7.webp", alt: "Multimedia show builder with slides", width: 1024, height: 600 },
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-8.webp", alt: "Admin dashboard user management", width: 1024, height: 600 },
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-9.webp", alt: "Live video conferencing with slides", width: 1024, height: 600 }
]

export const mobileArtboards: ArtboardType[] = [
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-11.webp", alt: "Simple form", width: 338, height: 600 },
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-12.webp", alt: "YouTube clone", width: 338, height: 600 },
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-13.webp", alt: "Live video conferencing with slides", width: 338, height: 600 },
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-14.webp", alt: "Live video conferencing", width: 338, height: 600 },
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-15.webp", alt: "User management", width: 338, height: 600 },
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-16.webp", alt: "User profile", width: 338, height: 600 },
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-17.webp", alt: "Real estate property cards", width: 338, height: 600 },
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-18.webp", alt: "Real estate listing details", width: 338, height: 600 },
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-19.webp", alt: "Real estate property filters", width: 338, height: 600 },
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-20.webp", alt: "Real estate property filters", width: 338, height: 600 },
 { image: "https://d2mx7vld70uuck.cloudfront.net/artboard-21.webp", alt: "Real estate property filters", width: 338, height: 600 }
]

export const bio: BioType[] = [
 { text: "I graduated from Texas A&M University in 2015 with a degree in political science and a minor in business administration. As a student, I maintained a 3.5 GPA and served as communications executive vice president and eventually chief of staff for the Student Government Association, where I managed a sixteen member exective cabinet." },
 { text: "Before graduating, I interned with a company called GovWhiz, where I discovered a passion for UX/UI design. I was brought on full time by a company called Arena Edge, where I started as a channel manager and was promoted to product manager." },
 { text: "As product manager, I worked closely with company leadership and a team of overseas developers to identify both customer needs and business needs in an agile environment, authored a 170+ page user manual, designed low-fidelity prototypes, created various product tutorials, conducted extensive QA and thorough documentation of the platform." },
 { text: "To supplement my knowledge of product management, I began learning the fundamentals of frontend web development. I am constantly learning and constantly improving and I am currently a product manager for Silver Bow Technology Group." }
]

export const faqs: FaqType[] = [
 {
  value: "faq-1",
  question: "Tell me about yourself.",
  response: "I graduated from Texas A&M University in 2015 with a degree in political science and a minor in business administration. As a student, I served as communications executive vice president and eventually chief of staff for the student government association. I interned with a company called Gov Whiz during my last semester and discovered a passion for UX/UI. Upon graduating, I was brought on full time by a partner company called Arena Edge, where I was a product manager for several years. During this time, I began learning the fundamentals of frontend development as a hobby. I am currently a product manager for Silver Bow Technology Group."
 },
 {
  value: "faq-2",
  question: "What is your greatest strength?",
  response: "Empathy and understanding where people come from. I'm a strong user advocate and believe that if a customer is unable to use a certain technology, it's not because the user is incompentent but rather because the technology hasn't been made easy enough for them to use."
 },
 {
  value: "faq-3",
  question: "What is your greatest weakness?",
  response: "I sometimes have a hard time understanding abstract concepts. I am, however, good at recognizing patterns so to compensate, I apply what I know about patterns to a given concept and the concept becomes less abstract."
 },
 {
  value: "faq-4",
  question: "Why should I hire you?",
  response: "I'm a utility player that can gracefully wear several different hats, I'm personable, and I work well with other people. I have a broad range of experience, a positive attitude, and an eagerness to learn and be utilized."
 },
 {
  value: "faq-5",
  question: "Tell me about a time you were successful on a team.",
  response: "I was a campaign manager for a student body president election and our campaign won with over 60% of the vote."
 },
 {
  value: "faq-6",
  question: "What do you like to do outside of work?",
  response: "I enjoy creating mini React and NextJS applications as side projects, playing dominoes, politics, spending time with friends and family, and taking my dog to the park."
 },
 {
  value: "faq-7",
  question: "Describe your most challenging project.",
  response: "I had to create a user guide from scratch that included detailed descriptions of each feature of the platform, step-by-step instructions on how to use each feature, table of contents, tech specs, glossary, and supporting graphics/imagery of the platform. It ended up being 170+ pages long."
 },
 {
  value: "faq-8",
  question: "How did you go from politics to tech?",
  response: "I thought I wanted to be a lawyer but discovered a passion for UI/UX while I was interning with a startup company during my last semester of school. I was hired as a channel manager for a partner company and eventually promoted to product manager, where I had the opportunity to work with our remote developers on a daily basis. I began learning frontend develoment as a way to supplement my knowledge of how web technologies work and more effectively communicate with our developers."
 }
]

export const projects: ProjectType[] = [
 { title: "Music App", href: "https://music-player-pi-self.vercel.app/", image: "https://d2mx7vld70uuck.cloudfront.net/project-1.webp" },
 { title: "Calculator App", href: "https://calculator-seven-lyart.vercel.app/", image: "https://d2mx7vld70uuck.cloudfront.net/project-2.webp" },
 { title: "Notes App", href: "https://noteworthy-kohl.vercel.app/", image: "https://d2mx7vld70uuck.cloudfront.net/project-3.webp" },
 { title: "Contacts List", href: "https://contacts-rust-kappa.vercel.app/", image: "https://d2mx7vld70uuck.cloudfront.net/project-4.webp" },
 { title: "Video Player", href: "https://jeffclaybrook.github.io/custom-video-player", image: "https://d2mx7vld70uuck.cloudfront.net/project-5.webp" },
 { title: "Task App", href: "https://todo-app-omega-ashy-57.vercel.app/", image: "https://d2mx7vld70uuck.cloudfront.net/project-6.webp" },
 { title: "Writing Sample", href: "https://d2mx7vld70uuck.cloudfront.net/AE+User+Guide.pdf", image: "https://d2mx7vld70uuck.cloudfront.net/project-7.webp" },
 { title: "YouTube Clone", href: "https://mediasphere.vercel.app/", image: "https://d2mx7vld70uuck.cloudfront.net/project-8.webp" },
 { title: "Food Truck Menu", href: "https://lil-baghdad.vercel.app/", image: "https://d2mx7vld70uuck.cloudfront.net/project-9.webp" }
]

export const skills: SkillType[] = [
 { title: "Ant Design", Icon: AntDesign },
 { title: "Boostrap", Icon: Bootstrap },
 { title: "ChatGPT", Icon: ChatGPT },
 { title: "CSS3", Icon: Css3 },
 { title: "DaisyUI", Icon: DaisyUi },
 { title: "HTML5", Icon: Html5 },
 { title: "Invision", Icon: Invision },
 { title: "JavaScript", Icon: Javascript },
 { title: "Jira", Icon: Jira },
 { title: "JSON", Icon: Json },
 { title: "Keynote", Icon: Keynote },
 { title: "MongoDB", Icon: MongoDB },
 { title: "MUI", Icon: Mui },
 { title: "Netlify", Icon: Netlify },
 { title: "NextJS", Icon: Nextjs },
 { title: "NodeJS", Icon: Nodejs },
 { title: "NPM", Icon: Npm },
 { title: "React", Icon: React },
 { title: "Sass", Icon: Sass },
 { title: "Shadcn UI", Icon: ShadcnUi },
 { title: "TailwindCSS", Icon: TailwindCss },
 { title: "Trello", Icon: Trello },
 { title: "Typescript", Icon: Typescript },
 { title: "Zendesk", Icon: Zendesk }
]

export const socials: SocialType[] = [
 { label: "LinkedIn", href: "https://linkedin.com/in/jeff-claybrook", Icon: Linkedin },
 { label: "GitHub", href: "https://github.com/jeffclaybrook", Icon: Github },
 { label: "Facebook", href: "https://www.facebook.com/jeff.claybrook.16", Icon: Facebook },
 { label: "YouTube", href: "https://youtube.com/@jeffreyclaybrook", Icon: Youtube }
]

export const testimonials: TestimonialType[] = [
 {
  name: "Randy Combs",
  title: "President, Arena Edge",
  quote: "It was amazing how quickly he learned new technologies and processes that were critical to us. Jeff was incredibly valuable to us and I highly recommend him for whatever position he sets his sights on.",
  image: "https://d2mx7vld70uuck.cloudfront.net/hero-1.webp"
 },
 {
  name: "Brian Skulski",
  title: "Vice President & Co-Founder, Value Waste Services",
  quote: "In a world where I believe people can be your greatest joy or your biggest thorn, I can say with conviction that Jeff is a wonderful breath of fresh air to work alongside.",
  image: "https://d2mx7vld70uuck.cloudfront.net/hero-2.webp"
 },
 {
  name: "Kathryn Laster",
  title: "Digital Learning Consultant",
  quote: "Jeff is the epitome of spirit, enthusiasm, and energy. He is the type of person who has never met a stranger, and his friendliness impacts all who comes in contact with him.",
  image: "https://d2mx7vld70uuck.cloudfront.net/hero-3.webp"
 },
 {
  name: "Karen Clardy",
  title: "Former President, RISD Board of Trustees",
  quote: "Jeff goes out of his way to make sure no one is left out of an activity. His sense of integrity is beyond reproach. I can always count on Jeff to do the right thing.",
  image: "https://d2mx7vld70uuck.cloudfront.net/hero-4.webp"
 },
 {
  name: "AJ Alsodani",
  title: "Owner & Founder, Lil Baghdad",
  quote: "Jeff Claybrook showed excellence in his work ethic and it was a pleasure and honor to work with an individual of his virtue and character.",
  image: "https://d2mx7vld70uuck.cloudfront.net/hero-1.webp"
 },
 {
  name: "Gwen Green",
  title: "Former Instructor",
  quote: "Jeff Claybrook jumps into every encounter, experience, task, etc. with feet, legs, arms, and heart. In other words he is non-stop! He is always respectful, courteous, and a gentleman.",
  image: "https://d2mx7vld70uuck.cloudfront.net/hero-2.webp"
 }
]