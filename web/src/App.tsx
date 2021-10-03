import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { CssBaseline } from '@mui/material'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import { Provider } from 'react-redux'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { store } from './redux/store'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <RedwoodApolloProvider>
        <CssBaseline />
        <Provider store={store}>
          <Routes />
        </Provider>
      </RedwoodApolloProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
