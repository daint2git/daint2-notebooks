const contentPage = [
  {
    header: 'Array.from',
    definition:
      'method creates a new, shallow-copied Array instance from an array-like or iterable object.',
    contents: [
      {
        text: '',
        input: `
    Array.from('foo')
Array.from([1, 2, 3], x => x + x)
Array.from({ length: 10 }, (v, k) => k).map(k => k)
`,
        output: `
    ["f", "o", "o"]
[2, 4, 6]
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    `,
      },
    ],
  },
  {
    header: 'Array.of',
    definition: `method creates a new Array instance with a variable number of arguments, regardless of
      number or type of the arguments.`,
    contents: [
      {
        text: '',
        input: `
    Array.of(7)
    Array.of(1, 2, 3)
     `,
        output: `
    [7]
    [1, 2, 3]
    `,
      },
    ],
  },
  {
    header: 'Array.keys',
    definition: `method returns a new Array Iterator object that contains the keys for each index in the array.`,
    contents: [
      {
        text: '',
        input: `
    const array = ['a', 'b', 'c']
    const iterator = array.keys()

    for (let key of iterator) {
      console.log(key)
    }
     `,
        output: `
0
1
2
    `,
      },
    ],
  },
  {
    header: 'Array.values',
    definition: `method returns a new Array Iterator object that contains the values for each index in the array.`,
    contents: [
      {
        text: '',
        input: `
    const array = ['a', 'b', 'c']
    const iterator = array.values()

    for (let value of iterator) {
      console.log(value)
    }
     `,
        output: `
"a"
"b"
"c"
    `,
      },
    ],
  },
  {
    header: 'Array.entries',
    definition: `method returns a new Array Iterator object that contains the key/value pairs for each index in the array.`,
    contents: [
      {
        text: '',
        input: `
    const array = ['a', 'b', 'c']
    const iterator = array.entries()

    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
     `,
        output: `
    { value: Array [0, "a"], done: false }
    { value: Array [1, "b"], done: false }
    { value: Array [2, "c"], done: false }
    { value: undefined, done: true }
    `,
      },
    ],
  },
  {
    header: 'Array.find',
    definition: `method returns the value of the <strong>first element</strong> in the array that satisfies the provided testing function. Otherwise undefined is returned.`,
    contents: [
      {
        text: '',
        input: `
    const array = ['a', 'b', 'c']
    const iterator = array.entries()

    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
     `,
        output: `
    { value: Array [0, "a"], done: false }
    { value: Array [1, "b"], done: false }
    { value: Array [2, "c"], done: false }
    { value: undefined, done: true }
    `,
      },
    ],
  },
]

export default contentPage
