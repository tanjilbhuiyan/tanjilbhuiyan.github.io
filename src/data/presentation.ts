type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "tanjilbhuiyan@gmail.com",
  title: "Hi, I’m Md. Tanjil Bhuiyan 👋",
  // profile: "/profile.webp",
  description:
  "Hello, I'm a *senior DevOps engineer* with over *3 years* of experience in the field. Previously, I worked extensively in *cybersecurity*. Currently, I'm focused on utilizing *Terraform* and *Golang* in my daily work. Beyond my professional life, I'm an avid traveler and motorbike enthusiast who loves exploring new places and constantly learning new things.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/BhuiyanMdTanjil",
    },
    {
      label: "Gitlab",
      link: "https://gitlab.com/mdtanjilbhuiyan",
    },
    {
      label: "Github",
      link: "https://github.com/mdtanjilbhuiyan",
    },
  ],
};

export default presentation;
