module.exports = {
    id: 1,
    name: 'John Doe',
    age: 83,
    descendants: [
      {
        id: 2,
        name: 'Lisa',
        age: 55,
        parentId: 1,
        descendants: [
          {
            id: 4,
            name: 'Jake',
            age: 30,
            parentId: 2,
            descendants: [
              {
                name: 'Tina',
                age: 3,
                parentId: 4,
                descendants: []
              }
            ]
          },
          {
            id: 5,
            name: 'Brian',
            age: 25,
            parentId: 2,
            descendants: []
          }
        ]
      },
      {
        id: 3,
        name: 'Tom',
        age: 52,
        parentId: 1,
        descendants: [
          {
            id: 6,
            name: 'Tim',
            age: 28,
            parentId: 3,
            descendants: [
              {
                id: 8,
                name: 'Catrina',
                age: 5,
                parentId: 6,
                descendants: []
              }
            ]
          },
          {
            id: 7,
            name: 'Mery',
            age: 2,
            parentId: 3,
            descendants: []
          }
        ]
      }
    ]
  }