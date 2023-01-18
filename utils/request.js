import axios from "axios";
import { API_HOST } from "../Environment";
import { close_loader, open_loader } from "../store/saga/Loader";
import { store } from "../store/store"


const url = (endpoint) => {
    return API_HOST + endpoint;
}

export const post = async (endpoint, data) => {
    store.dispatch(open_loader())
    const header = {headers: {"Content-Type": "application/json",},}
    const res = await axios.post(url(endpoint), data, header);
    store.dispatch(close_loader())
    return res
};


export const postWithToken = async (endpoint, data, token) => {
    store.dispatch(open_loader())
    const header = {
        headers: {
            "Content-Type": "application/json",
            "authorization" : token,
        },
    }
    
    const res = await axios.post(url(endpoint), data, header);
    store.dispatch(close_loader())
    return res
};