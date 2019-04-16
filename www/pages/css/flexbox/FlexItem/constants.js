const TITLES = ['order', 'flex-grow', 'flex-shrink', 'justify-basis', 'align-self']

const ORDER = {
  definition: ``,
  options: [
    {
      value: '0',
      children: '0 (default value)',
    },
    {
      value: '-1',
      children: '-1',
    },
    {
      value: '1',
      children: '1',
    },
  ],
}

const GROW = {
  definition: ``,
  options: [
    {
      value: '0',
      children: '0 (default value)',
    },
    {
      value: '1',
      children: '1',
    },
    {
      value: '2',
      children: '2',
    },
  ],
}

const SHRINK = {
  definition: ``,
  options: [
    {
      value: '1',
      children: '1 (default value)',
    },
    {
      value: '0',
      children: '0',
    },
    {
      value: '2',
      children: '2',
    },
  ],
}

const BASIS = {
  definition: ``,
  options: [
    {
      value: 'auto',
      children: 'auto (default value)',
    },
    {
      value: '100px',
      children: '100px',
    },
    {
      value: '50%',
      children: '50%',
    },
  ],
}

const ALIGN_SELF = {
  definition: ``,
  options: [
    {
      value: 'auto',
      children: 'auto (default value)',
    },
    {
      value: 'stretch',
      children: 'stretch',
    },
    {
      value: 'center',
      children: 'center',
    },
    {
      value: 'flex-start',
      children: 'flex-start',
    },
    {
      value: 'flex-end',
      children: 'flex-end',
    },
    {
      value: 'baseline',
      children: 'baseline',
    },
  ],
}

export { TITLES, ORDER, GROW, SHRINK, BASIS, ALIGN_SELF }
