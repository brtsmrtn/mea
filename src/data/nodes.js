import {Cloud} from "@/components/Cloud";
import {Guadalquivir} from "./svgs";

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
    position: {x: 0, y: 700},
  },
  {
    id: "D",
    data: {
      type: "cloud",
      label: "",
      content: [
        {
          type: "cloud",
          cloud: <Cloud n={10} vw={2} vh={1} vmin1={20} vmin2={2} />,
        },
      ],
    },
    position: {x: -1220, y: -215},
  },
  {
    id: "V",
    data: {
      type: "cloud",
      label: "",
      content: [
        {
          type: "cloud",
          cloud: <Cloud n={100} vw={5} vh={5} vmin1={20} vmin2={2} />,
          translate: {x: -1800},
        },
      ],
    },
    position: {x: -540, y: 700},
  },
  {
    id: "W",
    data: {
      type: "cloud",
      label: "",
      content: [
        {
          type: "cloud",
          cloud: <Cloud n={100} vw={25} vh={10} vmin1={20} vmin2={18} />,
        },
      ],
    },
    position: {x: 150, y: 650},
  },
  {
    id: "X",
    data: {
      type: "cloud",
      label: "",
      content: [
        {
          type: "cloud",
          cloud: <Cloud n={100} vw={5} vh={10} vmin1={20} vmin2={5} />,
        },
      ],
    },
    position: {x: 200, y: 150},
  },
  {
    id: "Y",
    data: {
      type: "cloud",
      label: "",
      content: [
        {
          type: "cloud",
          cloud: <Cloud n={100} vw={5} vh={5} vmin1={10} vmin2={5} />,
        },
      ],
    },
    position: {x: -250, y: -50},
  },
  {
    id: "Z",
    data: {
      type: "cloud",
      label: "",
      content: [
        {
          type: "cloud",
          cloud: <Cloud n={100} vw={4} vh={2} vmin1={10} vmin2={7} />,
        },
      ],
    },
    position: {x: -320, y: 315},
  },
  {
    id: "1",
    data: {
      type: "patience",
      label: "PATIENCE",
      content: null,
    },
    position: {x: -114, y: 202},
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
    position: {x: -185, y: 198},
  },
  {
    id: "2",
    data: {
      type: "generosity",
      label: "GENEROSITY",
      content: null,
    },
    position: {x: 102, y: 360},
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
    position: {x: 250, y: 300},
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
    position: {x: 325, y: 355},
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
    position: {x: 230, y: 378},
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
    position: {x: 380, y: 488},
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
    position: {x: 263, y: 525},
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
    position: {x: 180, y: 445},
  },
  {
    id: "3",
    data: {
      type: "action",
      label: "SKILLFUL ACTION",
      content: null,
    },
    position: {x: -118, y: 477},
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
    position: {x: -215, y: 394},
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
    position: {x: -332, y: 430},
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
    position: {x: -275, y: 545},
  },
  {
    id: "4",
    data: {
      type: "enthusiasm",
      label: "ENTHUSIASM",
      content: null,
    },
    position: {x: 25, y: 705},
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
    position: {x: 305, y: 673},
  },
  {
    id: "4a1",
    data: {
      type: "enthusiasm",
      label: "Isabel Lewis",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/344" title="" />',
        },
      ],
    },
    position: {x: 394, y: 616},
  },
  {
    id: "4a2",
    data: {
      type: "enthusiasm",
      label: "Lafawndah",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/368" title="" />',
        },
      ],
    },
    position: {x: 448, y: 645},
  },
  {
    id: "4a3",
    data: {
      type: "enthusiasm",
      label: "Eduardo Navarro",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/369" title="" />',
        },
      ],
    },
    position: {x: 422, y: 685},
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
    position: {x: 180, y: 785},
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
    position: {x: 295, y: 745},
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
    position: {x: 315, y: 782},
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
    position: {x: 295, y: 825},
  },
  {
    id: "4c",
    data: {
      type: "enthusiasm",
      label: "River Walks trailer",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/385" title="" />',
        },
      ],
    },
    position: {x: 510, y: 842},
  },
  {
    id: "4c1",
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
    position: {x: 634, y: 812},
  },
  {
    id: "4c2",
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
    position: {x: 665, y: 867},
  },
  {
    id: "4c3",
    data: {
      type: "enthusiasm",
      label: "Francisco Gamero",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/389" title="" />',
        },
      ],
    },
    position: {x: 620, y: 902},
  },
  {
    id: "4d",
    data: {
      type: "enthusiasm",
      label: "Talks",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/386" title="" />',
        },
      ],
    },
    position: {x: 368, y: 1025},
  },
  {
    id: "4d1",
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
    position: {x: 417, y: 1073},
  },
  {
    id: "4d2",
    data: {
      type: "enthusiasm",
      label: "Garcia López Anguita",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/392" title="" />',
        },
      ],
    },
    position: {x: 358, y: 1115},
  },
  {
    id: "4d3",
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
    position: {x: 280, y: 1134},
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
    position: {x: 450, y: 908},
  },
  {
    id: "4f",
    data: {
      type: "enthusiasm",
      label: "Third Margin Deepest Spring",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/388" title="" />',
        },
      ],
    },
    position: {x: 60, y: 845},
  },
  {
    id: "4f1",
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
    position: {x: 100, y: 1009},
  },
  {
    id: "4f2",
    data: {
      type: "enthusiasm",
      label: "Contributors",
      content: [
        {
          type: "embed",
          link: '<iframe src="https://ocean-archive.org/embed/10000" title="" />',
        },
      ],
    },
    position: {x: 32, y: 945},
  },
  {
    id: "4f3",
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
    position: {x: 139, y: 972},
  },
  {
    id: "5",
    data: {
      type: "meditation",
      label: "MEDITATION",
      content: null,
    },
    position: {x: -175, y: 780},
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
    position: {x: -397, y: 780},
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
    position: {x: -445, y: 847},
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
    position: {x: -357, y: 937},
  },
];
