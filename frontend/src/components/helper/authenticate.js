import { setLocalStorage, getLocalStorage } from './localStorage';
import { setCookie, getCookie } from "./cookie"

export const cookieStorageSet = (cookie, data) => {
    setCookie('token', cookie)
    setLocalStorage('user', data)
}

export const cookieStorageCheck = (cookie, data, redirect) => {
    if(getCookie(cookie) && getLocalStorage(data)) {
   
        window.location =redirect
    } 
}

export const isAuthenticated = (cookie, data) => {

    if(getCookie(cookie) && getLocalStorage(data)) {
   
        return true
    } 
}


export const notAuthenticated = (cookie, data, redirect) => {

    if(!getCookie(cookie) && !getLocalStorage(data)) {
   
         window.location =redirect
    } 
}