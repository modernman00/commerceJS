export const setSession = (key, value) => sessionStorage.setItem(key, JSON.stringify(value))

export const getSession = key => sessionStorage.getItem(key)


export const removeSession = key => sessionStorage.removeItem(key)


export const clearAllSession = () => sessionStorage.clear()
