import { configure, addParameters } from '@storybook/react'

import 'components/utils/app.scss'
import './styles.scss'
import '../static/css/prism.css'

addParameters({
  backgrounds: [
    { name: 'white', value: '#FFF' },
    { name: 'blue', value: '#EFF7FF', default: true },
    { name: 'black', value: '#000' },
  ],
})

const requests = require.context('../components/', true, /stories\.js$/)
configure(requests.keys().forEach(requests), module)
