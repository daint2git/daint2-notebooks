const DISPLAY = {
  definition: ``,
  options: [
    {
      value: 'flex',
      children: 'flex',
    },
    {
      value: 'inline-flex',
      children: 'inline-flex',
    },
  ],
}

const DIRECTION = {
  definition: `The <code>flex-direction</code> property specifies the direction of the flexible items.`,
  options: [
    {
      value: 'row',
      children: 'row (default)',
    },
    {
      value: 'row-reverse',
      children: 'row-reverse',
    },

    {
      value: 'column',
      children: 'column',
    },

    {
      value: 'column-reverse',
      children: 'column-reverse',
    },
    {
      value: 'initial',
      children: 'initial',
    },
    {
      value: 'inherit',
      children: 'inherit',
    },
  ],
  note: `If the element is not a flexible item, the <code>flex-direction</code> property has no effect.`,
}

const WRAP = {
  definition: `The <code>flex-wrap</code> property specifies whether the flexible items should wrap or not.`,
  options: [
    {
      value: 'nowrap',
      children: 'nowrap (default)',
    },
    {
      value: 'wrap',
      children: 'wrap',
    },
    {
      value: 'wrap-reverse',
      children: 'wrap-reverse',
    },
    {
      value: 'initial',
      children: 'initial',
    },
    {
      value: 'inherit',
      children: 'inherit',
    },
  ],
  note: `If the elements are not flexible items, the <code>flex-wrap</code> property has no effect.`,
}

const JUSTIFY_CONTENT = {
  definition: `The <code>justify-content</code> property aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally).`,
  options: [
    {
      value: 'flex-start',
      children: 'flex-start (default)',
    },
    {
      value: 'flex-end',
      children: 'flex-end',
    },
    {
      value: 'center',
      children: 'center',
    },
    {
      value: 'space-between',
      children: 'space-between',
    },
    {
      value: 'space-around',
      children: 'space-around',
    },
    {
      value: 'initial',
      children: 'initial',
    },
    {
      value: 'inherit',
      children: 'inherit',
    },
  ],
  tip: `Use the <code>align-items</code> property to align the items vertically.`,
}

const ALIGN_ITEMS = {
  definition: `The <code>align-items</code> property specifies the default alignment for items inside the flexible container.`,
  options: [
    {
      value: 'stretch',
      children: 'stretch (default)',
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
      value: 'center',
      children: 'center',
    },
    {
      value: 'baseline',
      children: 'baseline',
    },
    {
      value: 'initial',
      children: 'initial',
    },
    {
      value: 'inherit',
      children: 'inherit',
    },
  ],
  tip: `Use the <code>align-self</code> property of each item to override the <code>align-items</code> property.`,
}

const ALIGN_CONTENT = {
  definition: `The <code>align-content</code> property modifies the behavior of the flex-wrap property. It is similar to align-items, but instead of aligning flex items, it aligns flex lines.`,
  options: [
    {
      value: 'stretch',
      children: 'stretch (default)',
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
      value: 'center',
      children: 'center',
    },
    {
      value: 'baseline',
      children: 'baseline',
    },
    {
      value: 'initial',
      children: 'initial',
    },
    {
      value: 'inherit',
      children: 'inherit',
    },
  ],
  note: `There must be multiple lines of items for this property to have any effect!`,
  tip: `Use the <code>justify-content</code> property to align the items on the main-axis (horizontally).`,
}

export { DISPLAY, DIRECTION, WRAP, JUSTIFY_CONTENT, ALIGN_ITEMS, ALIGN_CONTENT }
