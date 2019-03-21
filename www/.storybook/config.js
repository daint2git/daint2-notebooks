import { configure } from '@storybook/react'

import 'components/utils/app.scss'
import './styles.scss'

const requests = require.context('../components/', true, /stories\.js$/)
configure(requests.keys().forEach(requests), module)
