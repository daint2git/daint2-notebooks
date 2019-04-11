const contents = [
  {
    title: 'Array.from',
    definition:
      'method creates a new, shallow-copied Array instance from an array-like or iterable object.',
    examples: [
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
    title: 'Array.of',
    definition: `method creates a new Array instance with a variable number of arguments, regardless of
      number or type of the arguments.`,
    examples: [
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
    title: 'Array.keys',
    definition: `method returns a new Array Iterator object that contains the keys for each index in the array.`,
    examples: [
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
    title: 'Array.values',
    definition: `method returns a new Array Iterator object that contains the values for each index in the array.`,
    examples: [
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
    title: 'Array.entries',
    definition: `method returns a new Array Iterator object that contains the key/value pairs for each index in the array.`,
    examples: [
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
    title: 'Array.find',
    definition: `method returns the value of the <mark>first element</mark> in the array that satisfies the provided testing function. Otherwise undefined is returned.`,
    examples: [
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
    title: 'Array.findIndex',
    definition: `method returns the <mark>index</mark> of the <mark>first element</mark> in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test.`,
    examples: [
      {
        text: '',
        input: `
        const array = [5, 12, 8, 130, 44]

        console.log(array.findIndex(element => element > 13))
        console.log(array.findIndex(element => element > 130))
		    `,
        output: `
        3
        -1
		    `,
      },
    ],
  },
  {
    title: 'Array.fill',
    definition: `method fills all the elements of an array from a start index to an end index with a static value. The end index is not included.`,
    examples: [
      {
        text: '',
        input: `
        const array = [1, 2, 3, 4]

        // fill with 0 from position 2 until position 4
        console.log(array.fill(0, 2, 4))

        // fill with 5 from position 1
        console.log(array.fill(5, 1))

        console.log(array.fill(6))
		    `,
        output: `
        [1, 2, 0, 0]
        [1, 5, 5, 5]
        [6, 6, 6, 6]
		    `,
      },
    ],
  },
  {
    title: 'Array.copyWithin',
    definition: `method shallow copies part of an array to another location in the same array and returns it, without modifying its size.`,
    examples: [
      {
        text: '',
        input: `
        const array1 = [1, 2, 3, 4, 5]
        const array2 = [1, 2, 3, 4, 5]

        // place at position 0 the element between position 3 and 4
        console.log(array1.copyWithin(0, 3, 4))

        // place at position 1 the elements after position 3
        console.log(array2.copyWithin(1, 3))
		    `,
        output: `
        [4, 2, 3, 4, 5]
        [1, 4, 5, 4, 5]
		    `,
      },
    ],
  },
  {
    title: 'Array.every',
    definition: `method tests whether all elements in the array pass the test implemented by the provided function.`,
    examples: [
      {
        text: '',
        input: `
        const array = [1, 30, 39, 29, 10, 13]

        console.log(array.every(currentValue => {
          console.log(currentValue)
          return currentValue < 40
        }))

        console.log(array.every(currentValue => {
          console.log(currentValue)
          return currentValue > 40
        }))

        console.log([].every(currentValue => {
          console.log(currentValue)
          return currentValue > 40
        }))
        // true
		    `,
        output: `
        1
        30
        39
        29
        10
        13
        true

        1
        false

        true
		    `,
      },
    ],
  },
  {
    title: 'Array.some',
    definition: `method tests whether at least one element in the array passes the test implemented by the provided function.`,
    examples: [
      {
        text: '',
        input: `
        const array = [1, 2, 3, 4, 5]

        console.log(array.some(currentValue => {
          console.log(currentValue)
          return currentValue > 2
        }))

        console.log(array.some(currentValue => {
          console.log(currentValue)
          return currentValue > 5
        }))

        console.log([].some(currentValue => {
          console.log(currentValue)
          return currentValue > 5
        }))
		    `,
        output: `
        1
        2
        3
        true

        1
        2
        3
        4
        5
        false

        false
		    `,
      },
    ],
  },
  {
    title: 'Array.indexOf',
    definition: `method returns the first index at which a given element can be found in the array, or -1 if it is not present.`,
    examples: [
      {
        text: '',
        input: `
        const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

        console.log(beasts.indexOf('bison'))

        // start from index 2
        console.log(beasts.indexOf('bison', 2))

        console.log(beasts.indexOf('giraffe'))
		    `,
        output: `
        1

        4

        -1
		    `,
      },
    ],
  },
  {
    title: 'Array.shift',
    definition: `method removes the <mark>first</mark> element from an array and returns that removed element. This method changes the length of the array.`,
    examples: [
      {
        text: '',
        input: `
        const array = [1, 2, 3]

        console.log(array.shift())

        console.log(array)

        array.shift()

        console.log(array)
		    `,
        output: `
        1

        [2, 3]

        [3]
		    `,
      },
    ],
  },
  {
    title: 'Array.unshift',
    definition: `method adds one or more elements to the beginning of an array and returns the new length of the array.`,
    examples: [
      {
        text: '',
        input: `
        const array = [1, 2, 3]

        console.log(array.unshift(4, 5))

        console.log(array)
		    `,
        output: `
        5

        [4, 5, 1, 2, 3]
		    `,
      },
    ],
  },
  {
    title: 'Array.splice',
    definition: `method changes the contents of an array by removing or replacing existing elements and/or adding new elements.`,
    examples: [
      {
        text: '',
        input: `
        const months = ['Jan', 'March', 'April', 'June']
        months.splice(1, 0, 'Feb')
        // inserts at 1st index position
        console.log(months)

        months.splice(4, 1, 'May')
        // replaces 1 element at 4th index
        console.log(months)
		    `,
        output: `
        ['Jan', 'Feb', 'March', 'April', 'June']

        ['Jan', 'Feb', 'March', 'April', 'May']
		    `,
      },
    ],
  },
  {
    title: 'Array.slice',
    definition: `method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.`,
    examples: [
      {
        text: '',
        input: `
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

        console.log(animals.slice(2))

        console.log(animals.slice(2, 4))

        console.log(animals.slice(1, 5))
		    `,
        output: `
        ["camel", "duck", "elephant"]

        ["camel", "duck"]

        ["bison", "camel", "duck", "elephant"]
		    `,
      },
    ],
  },
  {
    title: 'Array.includes',
    definition: `method determines whether an array includes a certain element, returning true or false as appropriate.`,
    examples: [
      {
        text: '',
        input: `
        const array = [1, 2, 3]

        console.log(array.includes(2))
        console.log(array.includes(4))

        var pets = ['cat', 'dog', 'bat']

        console.log(pets.includes('cat'))
        console.log(pets.includes('at'))
		    `,
        output: `
        true
        false

        true
        false
		    `,
      },
    ],
  },
  {
    title: 'Array.reduce',
    definition: `method executes a <mark>reducer</mark> function (that you provide) on each member of the array resulting in a single output value.`,
    examples: [
      {
        text: '',
        input: `
        const array = [1, 2, 3, 4]
        const reducer = (accumulator, currentValue) => accumulator + currentValue

        // 1 + 2 + 3 + 4
        console.log(array.reduce(reducer))

        // 5 + 1 + 2 + 3 + 4
        console.log(array.reduce(reducer, 5))
		    `,
        output: `
        10

        15
		    `,
      },
    ],
  },
  {
    title: 'Array.reduceRight',
    definition: `method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.`,
    examples: [
      {
        text: '',
        input: `
        const array = [[0, 1], [2, 3], [4, 5]]
        const reducer = (accumulator, currentValue) => accumulator.concat(currentValue)

        console.log(array.reduceRight(reducer))

        console.log(array.reduceRight(reducer, [9, 10]))
		    `,
        output: `
        [4, 5, 2, 3, 0, 1]

        [9, 10, 4, 5, 2, 3, 0, 1]
		    `,
      },
    ],
  },
]

export default contents
