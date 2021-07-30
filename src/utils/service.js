
const setAppLanguage =value =>{
    localStorage.setItem('appLanguage',value);
};

const getAppLanguage = ()=>{
    return localStorage.getItem('appLanguage');
};

const setValueToLocalStorage = (key, value)=>{
    localStorage.setItem(key,JSON.stringify(value));
}

const getValueFromLocalStorage = key =>{
    if(localStorage.getItem(key) !=='undefined')
       return JSON.parse(localStorage.getItem(key));
    return null;
}

const LocalStorage = {
    setAppLanguage,
    getAppLanguage,
    setData: setValueToLocalStorage,
    getData: getValueFromLocalStorage
}
export default localStorage;