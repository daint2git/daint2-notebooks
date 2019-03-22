import { configure, addParameters } from '@storybook/react'

import 'components/utils/app.scss'
import './styles.scss'

addParameters({
  backgrounds: [
    { name: 'white', value: '#FFF', default: true },
    { name: 'blue', value: '#EFF7FF' },
    { name: 'black', value: '#000' },
  ],
})

const requests = require.context('../components/', true, /stories\.js$/)
configure(requests.keys().forEach(requests), module)
