export const siteConfig = {
  name: "React Moives",
  description: "An open source react moives website build with react js.",
  mainNav: [
    {
      title: "Tvseries",
      href: "/tvseries",
    },
    {
      title: "Movies",
      href: "/allmovies",
    },
  ],
  mainFooter: [
    {
      title: "Terms Of Use",
      href: "/",
    },
    {
      title: "Privacy Policy",
      href: "/",
    },
    {
      title: "About",
      href: "/",
    },
    {
      title: "Blog",
      href: "/",
    },
    {
      title: "FAQ",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/MAD_ZENHOM",
    github: "https://github.com/M-ZENHOM",
  },
  copyrights: {
    desc: " © 2023 React Moives. All Rights Reserved. Developed by",
    name: "Mahmoud M Zenhom",
    href: "https://mahmoud-zenhom.cf/",
  },
};

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
