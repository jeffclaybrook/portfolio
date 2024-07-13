import { Image } from "react-grid-gallery"
import Facebook from "@/components/icons/Facebook"
import Github from "@/components/icons/Github"
import Linkedin from "@/components/icons/Linkedin"
import Youtube from "@/components/icons/Youtube"
import ProductManagement from "@/components/icons/ProductManagement"
import FrontendDevelopment from "@/components/icons/FrontendDevelopment"
import UXDesignResearch from "@/components/icons/UXDesignResearch"
import ContentCreator from "@/components/icons/ContentCreator"
import QADebugging from "@/components/icons/QADebugging"
import TechnicalWriting from "@/components/icons/TechnicalWriting"
import Bootstrap from "@/components/icons/Bootstrap"
import ChatGPT from "@/components/icons/ChatGPT"
import Css3 from "@/components/icons/Css3"
import Html5 from "@/components/icons/Html5"
import Invision from "@/components/icons/Invision"
import Javascript from "@/components/icons/Javascript"
import Jira from "@/components/icons/Jira"
import Json from "@/components/icons/Json"
import Keynote from "@/components/icons/Keynote"
import MongoDB from "@/components/icons/MongoDB"
import Mui from "@/components/icons/Mui"
import Netlify from "@/components/icons/Netlify"
import Nextjs from "@/components/icons/Nextjs"
import Nodejs from "@/components/icons/Nodejs"
import Npm from "@/components/icons/Npm"
import React from "@/components/icons/React"
import Sass from "@/components/icons/Sass"
import Trello from "@/components/icons/Trello"
import Typescript from "@/components/icons/Typescript"
import Zendesk from "@/components/icons/Zendesk"

export const socials = [
 { label: "Linkedin", href: "https://linkedin.com/in/jeff-claybrook", icon: <Linkedin /> },
 { label: "Github", href: "https://github.com/jeffclaybrook", icon: <Github /> },
 { label: "Facebook", href: "https://www.facebook.com/jeff.claybrook.16", icon: <Facebook /> },
 { label: "Youtube", href: "https://youtube.com/@jeffreyclaybrook", icon: <Youtube /> }
]

export const about = [
 { title: "Product Managment", subtitle: "Worked 7 years as a product manager in an agile environment", icon: <ProductManagement /> },
 { title: "Frontend Development", subtitle: "Self-taught frontend developer that's never finished learning", icon: <FrontendDevelopment /> },
 { title: "UX/UI Design & Research", subtitle: "What started out as a hobby soon became a passion", icon: <UXDesignResearch /> },
 { title: "Content Creator", subtitle: "Created, scripted, and recorded various product and project tutorials", icon: <ContentCreator /> },
 { title: "QA and Debugging", subtitle: "Thoroughly tested and documented bugs and areas of improvement", icon: <QADebugging /> },
 { title: "Technical Writing", subtitle: "Authored a 175+ page user manual from scratch", icon: <TechnicalWriting /> }
]

export const skills = [
 { title: "Boostrap", icon: <Bootstrap /> },
 { title: "ChatGPT", icon: <ChatGPT /> },
 { title: "CSS3", icon: <Css3 /> },
 { title: "HTML5", icon: <Html5 /> },
 { title: "Invision", icon: <Invision /> },
 { title: "JavaScript", icon: <Javascript /> },
 { title: "Jira", icon: <Jira /> },
 { title: "JSON", icon: <Json /> },
 { title: "Keynote", icon: <Keynote /> },
 { title: "MongoDB", icon: <MongoDB /> },
 { title: "MUI", icon: <Mui /> },
 { title: "Netlify", icon: <Netlify /> },
 { title: "NextJS", icon: <Nextjs /> },
 { title: "NodeJS", icon: <Nodejs /> },
 { title: "NPM", icon: <Npm /> },
 { title: "React", icon: <React /> },
 { title: "Sass", icon: <Sass /> },
 { title: "Trello", icon: <Trello /> },
 { title: "Typescript", icon: <Typescript /> },
 { title: "Zendesk", icon: <Zendesk /> }
]

export const projects = [
 { title: "Music App", href: "https://spectacular-smakager-deac89.netlify.app/", image: "/images/project-1.webp" },
 { title: "Calculator App", href: "https://jeffclaybrook.github.io/CalcPWA", image: "/images/project-2.webp" },
 { title: "Notes App", href: "https://jeffclaybrook.github.io/Notes-App", image: "/images/project-3.webp" },
 { title: "Contacts List", href: "https://crud-search-pagination-six.vercel.app/", image: "/images/project-4.webp" },
 { title: "Video Player", href: "https://jeffclaybrook.github.io/custom-video-player", image: "/images/project-5.webp" },
 { title: "Task App", href: "https://jeffclaybrook.github.io/Task-App", image: "/images/project-6.webp" },
 { title: "Writing Sample", href: "https://jeffclaybrook.s3.amazonaws.com/AE+User+Guide.pdf", image: "/images/project-7.webp" },
 { title: "Messenger App", href: "https://jeffclaybrook.github.io/Facebook-Messenger", image: "/images/project-8.webp" },
 { title: "Food Truck Menu", href: "https://lilbaghdad.com/", image: "/images/project-9.webp" },
]

export const testimonials = [
 {
  name: "Brian Skulski",
  title: "Co-Founder & Vice President, Value Waste Services",
  quote: "In a world where I believe people can be your greatest joy or your biggest thorn, I can say with conviction that Jeff is a wonderful breath of fresh air to work alongside.",
  image: "/images/hero-2.webp"
 },
 {
  name: "Kathryn Laster",
  title: "Digital Learning Consultant",
  quote: "Jeff is the epitome of spirit, enthusiasm, and energy. He is the type of person who has never met a stranger, and his friendliness impacts all who comes in contact with him.",
  image: "/images/hero-3.webp"
 },
 {
  name: "Karen Clardy",
  title: "President, RISD Board of Trustees",
  quote: "Jeff goes out of his way to make sure no one is left out of an activity. His sense of integrity is beyond reproach. I can always count on Jeff to do the right thing.",
  image: "/images/hero-4.webp"
 },
 {
  name: "AJ Alsodani",
  title: "Owner & Founder, Lil Baghdad",
  quote: "Jeff Claybrook showed excellence in his work ethic and it was a pleasure and honor to work with an individual of his virtue and character.",
  image: "/images/hero-1.webp"
 }
]

export interface CustomImage extends Image {
 original: string
}

export const artboards: CustomImage[] = [
 {
  original: "/images/artboard-1.webp",
  src: "/images/artboard-1.webp",
  width: 960,
  height: 600
 },
 {
  original: "/images/artboard-11.webp",
  src: "/images/artboard-11.webp",
  width: 292,
  height: 600
 },
 {
  original: "/images/artboard-2.webp",
  src: "/images/artboard-2.webp",
  width: 960,
  height: 600
 },
 {
  original: "/images/artboard-3.webp",
  src: "/images/artboard-3.webp",
  width: 960,
  height: 600
 },
 {
  original: "/images/artboard-12.webp",
  src: "/images/artboard-12.webp",
  width: 292,
  height: 600
 },
 {
  original: "/images/artboard-13.webp",
  src: "/images/artboard-13.webp",
  width: 299,
  height: 600
 },
 {
  original: "/images/artboard-4.webp",
  src: "/images/artboard-4.webp",
  width: 960,
  height: 600
 },
 {
  original: "/images/artboard-14.webp",
  src: "/images/artboard-14.webp",
  width: 299,
  height: 600
 },
 {
  original: "/images/artboard-5.webp",
  src: "/images/artboard-5.webp",
  width: 960,
  height: 600
 },
 {
  original: "/images/artboard-15.webp",
  src: "/images/artboard-15.webp",
  width: 292,
  height: 600
 },
 {
  original: "/images/artboard-6.webp",
  src: "/images/artboard-6.webp",
  width: 960,
  height: 600
 },
 {
  original: "/images/artboard-16.webp",
  src: "/images/artboard-16.webp",
  width: 292,
  height: 600
 },
 {
  original: "/images/artboard-7.webp",
  src: "/images/artboard-7.webp",
  width: 960,
  height: 600
 },
 {
  original: "/images/artboard-17.webp",
  src: "/images/artboard-17.webp",
  width: 338,
  height: 600
 },
 {
  original: "/images/artboard-8.webp",
  src: "/images/artboard-8.webp",
  width: 960,
  height: 600
 },
 {
  original: "/images/artboard-18.webp",
  src: "/images/artboard-18.webp",
  width: 338,
  height: 600
 },
 {
  original: "/images/artboard-9.webp",
  src: "/images/artboard-9.webp",
  width: 960,
  height: 600
 },
 {
  original: "/images/artboard-19.webp",
  src: "/images/artboard-19.webp",
  width: 338,
  height: 600
 },
 {
  original: "/images/artboard-10.webp",
  src: "/images/artboard-10.webp",
  width: 1234,
  height: 600
 },
 {
  original: "/images/artboard-20.webp",
  src: "/images/artboard-20.webp",
  width: 338,
  height: 600
 },
 {
  original: "/images/artboard-21.webp",
  src: "/images/artboard-21.webp",
  width: 338,
  height: 600
 }
]