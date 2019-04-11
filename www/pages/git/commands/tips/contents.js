const contents = [
  {
    title: 'How do I discard unstaged changes in Git ?',
    examples: [
      {
        input: `
        git clean -fd
        git checkout -- .
        `,
      },
    ],
  },
  {
    title: 'Revert to previous commit (after it was pushed on git)',
    examples: [
      {
        input: `
        // Reset the index to the desired commit
        git reset --hard <target commit>

        // Move the branch pointer back to the previous HEAD
        git reset --soft HEAD@{1}

        // Commit the changes
        git commit -m "Revert to <target commit>"
        `,
      },
    ],
  },
  {
    title: 'Require merge (after pull)',
    examples: [
      {
        text: 'Steps',
        input: `
        1. press "i"
        2. write your merge message
        3. press "esc"
        4. write ":wq"
        5. then press enter
        `,
      },
    ],
    note: `<mark>Appear:</mark> Please enter a commit message to explain why this merge is necessary, especially if it merges an updated upstream into a topic branch.`,
  },
]

export default contents
