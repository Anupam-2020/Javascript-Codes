export const explorer = [
  {
    id: 1,
    name: "src",
    type: "folder",
    children: [
      {
        id: 2,
        name: "components",
        type: "folder",
        children: [
          {
            id: 3,
            name: "Header.js",
            type: "file",
          },
          {
            id: 4,
            name: "Footer.js",
            type: "file",
          },
          {
            id: 11,
            name: "Internal",
            type: "folder",
            children: [
              {
                id: 12,
                name: "Internal.js",
                type: "file",
              },
            ],
          }
        ],
      },
      {
        id: 5,
        name: "pages",
        type: "folder",
        children: [
          {
            id: 6,
            name: "Home.js",
            type: "file",
          },
          {
            id: 7,
            name: "About.js",
            type: "file",
          },
        ],
      },
      {
        id: 8,
        name: "App.js",
        type: "file",
      },
    ],
  },
  {
    id: 9,
    name: "public",
    type: "folder",
    children: [
      {
        name: "index.html",
        type: "file",
      },
    ],
  },
  {
    id: 10,
    name: "package.json",
    type: "file",
  },
];
