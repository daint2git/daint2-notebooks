const contents = [
  {
    title: 'For Loop Shorthand',
    definition: ``,
    examples: [
      {
        text: '',
        input: `
        // Longhand
        for (let i = 0; i < allImgs.length; i++)

        // Shorthand
        for (let index of allImgs)
		    `,
        output: '',
      },
    ],
  },
  {
    title: 'Mandatory Parameter Shorthand',
    definition: ``,
    examples: [
      {
        text: '',
        input: `
        // Longhand
        function foo(bar) {
          if(bar === undefined) {
            throw new Error('Missing parameter!');
          }
          return bar;
        }

        // Shorthand
        mandatory = () => {
          throw new Error('Missing parameter!');
        }

        foo = (bar = mandatory()) => bar;
		    `,
        output: '',
      },
    ],
  },
  {
    title: `Remove falsy`,
    definition: ``,
    examples: [
      {
        text: '',
        input: `
        // falsy (false, null, undefined, 0, NaN, '')
        const a = [1, 'b', [], {}, false, null, undefined, 0, NaN, '']
        const b = a.filter(Boolean)
		    `,
        output: `
        [1, "b", [], {}]
		    `,
      },
    ],
  },
  {
    title: 'Difference Two Array',
    definition: ``,
    examples: [
      {
        text: '',
        input: `
        const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const arr2 = [2, 3, 6, 9]

        const difference1 = (arr1, arr2) => arr1.filter(i => !arr2.includes(i))
        const difference2 = (arr1, arr2) => arr1.filter(i1 => !arr2.some(i2 => i2 === i1))
        const difference3 = (arr1, arr2) => arr1.filter(i => arr2.indexOf(i) === -1)
		    `,
        output: '',
      },
    ],
  },
  {
    title: 'Remove duplicates',
    definition: ``,
    examples: [
      {
        text: '',
        input: `
        const arr = [
          { id: 1, name: 'Nguyen Van A' },
          { id: 2, name: 'Nguyen Van A' },
          { id: 3, name: 'Nguyen Van B' },
          { id: 4, name: 'Nguyen Van C' },
          { id: 5, name: 'Nguyen Van A' },
        ]

        const names = arr.map(({ name }) => name)

        const namesUnique = names.filter((n, index) => names.indexOf(n) >= index)
		    `,
        output: '',
      },
    ],
  },
  {
    title: 'operator !!',
    definition: ``,
    examples: [
      {
        text: '',
        input: `
        console.log(!!'abc')
        console.log(!!15)
        console.log(!!0)
        console.log(!!true)
        console.log(!!false)
        console.log(!!null)
        console.log(!!'')
        console.log(!!undefined)
        console.log(!!NaN)
        console.log(!!(function a() {}))
        console.log(!!{})
		    `,
        output: `
        true
        true
        false
        true
        false
        false
        false
        false
        false
        true
        true
		    `,
      },
    ],
  },
]

export default contents
