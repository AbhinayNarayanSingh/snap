import '../styles/globals.css'
import '../styles/bootstrap-grid.css'
import '../styles/style.scss'

// redux store 
import { Provider } from "react-redux";
import { wrapper, store } from "../store/store"

// component
import Dialog from '../hoc/Popup/Dialog';
import Loader from '../hoc/Loader/Loader';
import Toast from '../hoc/Toast/Toast';




function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Loader />
    <Toast/>
    <Dialog />
    <Component {...pageProps} />

  </Provider>
}

export default wrapper.withRedux(MyApp)
