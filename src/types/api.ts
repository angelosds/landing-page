export type AboutProjectProps = {
  description: string
  title: string
  image: ImageProps
}

export type ImageProps = {
  alternativeText: string
  url: string
}

export type ButtonProps = {
  label: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: ImageProps
}

export type TechIconProps = {
  title: string
  icon: ImageProps
}

export type TechProps = {
  title: string
  techIcons: TechIconProps[]
}

export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  sectionAboutProject: AboutProjectProps
  sectionTech: TechProps
}
