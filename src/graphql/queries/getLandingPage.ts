const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }

  fragment aboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        alternativeText
        url
      }
    }
  }

  fragment tech on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          alternativeText
          url
        }
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...aboutProject
      ...tech
    }
  }
`

export default GET_LANDING_PAGE
