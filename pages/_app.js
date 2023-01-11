import '../styles/globals.css'
import '../styles/bootstrap-grid.css'
import '../styles/style.scss'

// redux store 
import { Provider } from "react-redux";
import { wrapper, store } from "../store/store"

// component
import Dialog from '../hoc/Popup/Dialog';
import Loader from '../hoc/Loader/Loader';




function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Loader />
    <Dialog />
    <Component {...pageProps} />

  </Provider>
}

export default wrapper.withRedux(MyApp)
