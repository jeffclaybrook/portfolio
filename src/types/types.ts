import { ElementType } from "react"

export type AboutType = {
 title: string
 subtitle: string
 Icon: ElementType
}

export type ArtboardType = {
 image: string
 alt: string
 width: number
 height: number
}

export type BioType = {
 text: string
}

export type FaqType = {
 value: string
 question: string
 response: string
}

export type ProjectType = {
 title: string
 href: string
 image: string
}

export type SkillType = {
 title: string
 Icon: ElementType
}

export type SocialType = {
 label: string
 href: string
 Icon: ElementType
}

export type TestimonialType = {
 name: string
 title: string
 quote: string
 image: string
}