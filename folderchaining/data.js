export const data = [
  {
    name: "root",
    parentId: null,
    id: 1,
    isFolder: true,
    children: [
      {
        name: "Public",
        parentId: 1,
        id: 2,
        isFolder: true,
        children: [
          {
            name: "index",
            parentId: 2,
            id: 4,
            isFolder: false,
          },
          {
            name: "css",
            parentId: 2,
            id: 5,
            isFolder: false,
          },
          {
            name: "command",
            parentId: 2,
            id: 6,
            isFolder: false,
          },
          {
            name: "assets",
            parentId: 2,
            id: 7,
            isFolder: true,
            children: [
              {
                name: "images",
                parentId: 7,
                id: 9,
                isFolder: true,
              },
            ],
          },
        ],
      },
      {
        name: "config",
        parentId: 1,
        id: 3,
        isFolder: false,
      },
      {
        name: "main",
        parentId: 1,
        id: 8,
        isFolder: true,
        children:[
            {
                name: "route",
                parentId: 8,
                id: 10,
                isFolder: false, 
            },
            {
                name: "readme",
                parentId: 8,
                id: 11,
                isFolder: false, 
            },
            {
                name: "config",
                parentId: 8,
                id: 12,
                isFolder: false, 
            }
        ]
      },
    ],
  },
];
