import {
  EnthusiasmMeander,
  EnthusiasmMeanderSub1,
  EnthusiasmMeanderSub2,
  EnthusiasmMeanderSub3,
  EnthusiasmMeanderSub4,
  EnthusiasmMeanderSub5,
  GenerosityMeander,
  Guadalquivir,
  MeditationMeander,
  PatienceMeander,
  SkillfulActionMeander,
} from "./svgs";

export const initialNodes = [
  {
    id: "A",
    data: {
      type: "svg",
      label: "",
      content: [
        {
          type: "svg",
          svg: <Guadalquivir />,
        },
      ],
    },
    position: {x: -150, y: 0},
  },
  {
    id: "B",
    data: {
      type: "svg",
      label: "",
      content: [
        {
          type: "svg",
          svg: <PatienceMeander />,
        },
      ],
    },
    position: {x: -230, y: 210},
  },
  {
    id: "C",
    data: {
      type: "svg",
      label: "",
      content: [
        {
          type: "svg",
          svg: <GenerosityMeander />,
        },
      ],
    },
    position: {x: 125, y: 300},
  },
  {
    id: "D",
    data: {
      type: "svg",
      label: "",
      content: [
        {
          type: "svg",
          svg: <SkillfulActionMeander />,
        },
      ],
    },
    position: {x: -375, y: 410},
  },
  {
    id: "E",
    data: {
      type: "svg",
      label: "",
      content: [
        {
          type: "svg",
          svg: <EnthusiasmMeander />,
        },
      ],
    },
    position: {x: 50, y: 710},
  },
  {
    id: "F",
    data: {
      type: "svg",
      label: "",
      content: [
        {
          type: "svg",
          svg: <EnthusiasmMeanderSub1 />,
        },
      ],
    },
    position: {x: 201, y: 672},
  },
  {
    id: "G",
    data: {
      type: "svg",
      label: "",
      content: [
        {
          type: "svg",
          svg: <EnthusiasmMeanderSub2 />,
        },
      ],
    },
    position: {x: 415, y: 714},
  },
  {
    id: "H",
    data: {
      type: "svg",
      label: "",
      content: [
        {
          type: "svg",
          svg: <EnthusiasmMeanderSub3 />,
        },
      ],
    },
    position: {x: 448, y: 881},
  },
  {
    id: "I",
    data: {
      type: "svg",
      label: "",
      content: [
        {
          type: "svg",
          svg: <EnthusiasmMeanderSub4 />,
        },
      ],
    },
    position: {x: 302, y: 1018},
  },
  {
    id: "J",
    data: {
      type: "svg",
      label: "",
      content: [
        {
          type: "svg",
          svg: <EnthusiasmMeanderSub5 />,
        },
      ],
    },
    position: {x: 22, y: 890},
  },
  {
    id: "K",
    data: {
      type: "svg",
      label: "",
      content: [
        {
          type: "svg",
          svg: <MeditationMeander />,
        },
      ],
    },
    position: {x: -440, y: 800},
  },
  {
    id: "1",
    data: {
      type: "patience",
      label: "PATIENCE",
      content: null,
    },
    position: {x: -110, y: 208},
  },
  {
    id: "1a",
    data: {
      type: "patience",
      label: "Thinking oceanically about more-than-ocean",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/390" title="" />',
        },
      ],
    },
    position: {x: -235, y: 198},
  },
  {
    id: "2",
    data: {
      type: "generosity",
      label: "GENEROSITY",
      content: null,
    },
    position: {x: 100, y: 365},
  },
  {
    id: "2a",
    data: {
      type: "generosity",
      label: "What is a river?",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/350" title="" />',
        },
      ],
    },
    position: {x: 160, y: 287},
  },
  {
    id: "2b",
    data: {
      type: "generosity",
      label: "Anatomy of a river",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/349" title="" />',
        },
      ],
    },
    position: {x: 260, y: 300},
  },
  {
    id: "2c",
    data: {
      type: "generosity",
      label: "River services",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/378" title="" />',
        },
      ],
    },
    position: {x: 340, y: 363},
  },
  {
    id: "2d",
    data: {
      type: "generosity",
      label: "Riverspeak",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/379" title="" />',
        },
      ],
    },
    position: {x: 230, y: 395},
  },
  {
    id: "2e",
    data: {
      type: "generosity",
      label: "Flowing bibliography",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/10000" title="" />',
        },
      ],
    },
    position: {x: 410, y: 508},
  },
  {
    id: "2f",
    data: {
      type: "generosity",
      label: "A river's right to flow",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/380" title="" />',
        },
      ],
    },
    position: {x: 268, y: 560},
  },
  {
    id: "2g",
    data: {
      type: "generosity",
      label: "Guadalquivir (2022–2024)",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/381" title="" />',
        },
      ],
    },
    position: {x: 195, y: 475},
  },
  {
    id: "3",
    data: {
      type: "action",
      label: "SKILLFUL ACTION",
      content: null,
    },
    position: {x: -117, y: 487},
  },
  {
    id: "3a",
    data: {
      type: "action",
      label: "Isabel Lewis",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/368" title="" />',
        },
      ],
    },
    position: {x: -245, y: 387},
  },
  {
    id: "3b",
    data: {
      type: "action",
      label: "Eduardo Navarro",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/344" title="" />',
        },
      ],
    },
    position: {x: -395, y: 430},
  },
  {
    id: "3c",
    data: {
      type: "action",
      label: "Lafawndah",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/369" title="" />',
        },
      ],
    },
    position: {x: -320, y: 575},
  },
  {
    id: "4",
    data: {
      type: "enthusiasm",
      label: "ENTHUSIASM",
      content: null,
    },
    position: {x: 25, y: 715},
  },
  {
    id: "4a",
    data: {
      type: "enthusiasm",
      label: "The Journying Stream",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/382" title="" />',
        },
      ],
    },
    position: {x: 245, y: 705},
  },
  {
    id: "4a1",
    data: {
      type: "enthusiasm",
      label: "Eduardo Navarro",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/344" title="" />',
        },
      ],
    },
    position: {x: 193, y: 685},
  },
  {
    id: "4a2",
    data: {
      type: "enthusiasm",
      label: "Isabel Lewis",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/368" title="" />',
        },
      ],
    },
    position: {x: 318, y: 665},
  },
  {
    id: "4a3",
    data: {
      type: "enthusiasm",
      label: "Lafawndah",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/369" title="" />',
        },
      ],
    },
    position: {x: 342, y: 685},
  },
  {
    id: "4b",
    data: {
      type: "enthusiasm",
      label: "An Ocean Without Shore",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/383" title="" />',
        },
      ],
    },
    position: {x: 405, y: 755},
  },
  {
    id: "4b1",
    data: {
      type: "enthusiasm",
      label: "Trailer",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/3355" title="" />',
        },
      ],
    },
    position: {x: 485, y: 705},
  },
  {
    id: "4b2",
    data: {
      type: "enthusiasm",
      label: "Curatorial text",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/10000" title="" />',
        },
      ],
    },
    position: {x: 555, y: 735},
  },
  {
    id: "4b3",
    data: {
      type: "enthusiasm",
      label: "Contributors",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/384" title="" />',
        },
      ],
    },
    position: {x: 563, y: 795},
  },
  {
    id: "4c",
    data: {
      type: "enthusiasm",
      label: "Third Margin Deepest Spring",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/385" title="" />',
        },
      ],
    },
    position: {x: 490, y: 872},
  },
  {
    id: "4c1",
    data: {
      type: "enthusiasm",
      label: "Trailer",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/10000" title="" />',
        },
      ],
    },
    position: {x: 590, y: 902},
  },
  {
    id: "4c2",
    data: {
      type: "enthusiasm",
      label: "Curatorial text",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/10000" title="" />',
        },
      ],
    },
    position: {x: 565, y: 992},
  },
  {
    id: "4c3",
    data: {
      type: "enthusiasm",
      label: "Contributors",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/389" title="" />',
        },
      ],
    },
    position: {x: 440, y: 962},
  },
  {
    id: "4d",
    data: {
      type: "enthusiasm",
      label: "River Walks trailer",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/386" title="" />',
        },
      ],
    },
    position: {x: 347, y: 1005},
  },
  {
    id: "4d1",
    data: {
      type: "enthusiasm",
      label: "Elizabeth Gallón Droste",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/10000" title="" />',
        },
      ],
    },
    position: {x: 447, y: 1060},
  },
  {
    id: "4d2",
    data: {
      type: "enthusiasm",
      label: "Francisco Gamero",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/392" title="" />',
        },
      ],
    },
    position: {x: 367, y: 1105},
  },
  {
    id: "4d3",
    data: {
      type: "enthusiasm",
      label: "Cristina Aguilar Porro",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/10000" title="" />',
        },
      ],
    },
    position: {x: 292, y: 1054},
  },
  {
    id: "4e",
    data: {
      type: "enthusiasm",
      label: "Communal meals",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/387" title="" />',
        },
      ],
    },
    position: {x: 247, y: 835},
  },
  {
    id: "4f",
    data: {
      type: "enthusiasm",
      label: "Talks",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/388" title="" />',
        },
      ],
    },
    position: {x: 68, y: 875},
  },
  {
    id: "4f1",
    data: {
      type: "enthusiasm",
      label: "Francisco Godoy Vega",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/10000" title="" />',
        },
      ],
    },
    position: {x: 160, y: 915},
  },
  {
    id: "4f2",
    data: {
      type: "enthusiasm",
      label: "Garcia López Anguita",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/10000" title="" />',
        },
      ],
    },
    position: {x: 107, y: 955},
  },
  {
    id: "4f3",
    data: {
      type: "enthusiasm",
      label: "Juan López Intzín",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/10000" title="" />',
        },
      ],
    },
    position: {x: 19, y: 993},
  },
  {
    id: "5",
    data: {
      type: "meditation",
      label: "MEDITATION",
      content: null,
    },
    position: {x: -170, y: 790},
  },
  {
    id: "5a",
    data: {
      type: "meditation",
      label: "Ocean Breath",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/10000" title="" />',
        },
      ],
    },
    position: {x: -400, y: 790},
  },
  {
    id: "5b",
    data: {
      type: "meditation",
      label: "Eduardo Navarro Riverbed meditation",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/344" title="" />',
        },
      ],
    },
    position: {x: -445, y: 857},
  },
  {
    id: "5c",
    data: {
      type: "meditation",
      label: "Sally Fernaux Barleycorn",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/377" title="" />',
        },
      ],
    },
    position: {x: -357, y: 947},
  },
];
