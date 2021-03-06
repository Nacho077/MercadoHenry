import axios from 'axios'

const actionCreator = {
    ITEMS: "ITEMS",
    getItems: function(key, offset, finalSet){
        return dispatch => {
            const promise = axios.get(`${process.env.REACT_APP_API_URL}/api/search?q=${key}&offset=${offset}&finalSet=${finalSet}`)
            this._dispatchPromise(promise, this.ITEMS, dispatch)
        }
    },

    SETITEMS: "SETITEMS",
    setItems: function(data){
        return{
            type:this.SETITEMS,
            payload: data
        }
    },

    KEY: "KEY",
    setKey: function(key){
        return{
            type: this.KEY,
            payload: key
        }
    },

    PAGE: "PAGE",
    changePage: function(page){
        return{
            type: this.PAGE,
            payload: page
        }
    },

    CATEGORIES: "CATEGORIES",
    getCategories: function(){
        return dispatch => {
            const promise = axios.get(`${process.env.REACT_APP_API_URL}/api/categories`)
            this._dispatchPromise(promise, this.CATEGORIES, dispatch)
        }
    },

    PRODUCT: "PRODUCT",
    getProduct: function(id){
        return dispatch => {
            const promise = axios.get(`${process.env.REACT_APP_API_URL}/api/product?productId=${id}`)
            this._dispatchPromise(promise, this.PRODUCT, dispatch)
        }
    },

    CATEGORY: "CATEGORY",
    getCats: function(id, offset, finalset){
        return dispatch => {
            const promise = axios.get(`${process.env.REACT_APP_API_URL}/api/category?id=${id}&offset=${offset}&finalSet=${finalset}`)
            this._dispatchPromise(promise, this.CATEGORY, dispatch)
        }
    },

    USER: "USER",
    register: function(input){
        return dispatch => {
            const promise = axios.post(`${process.env.REACT_APP_API_URL}/user/register`,
            input)
            this._dispatchPromise(promise, this.USER, dispatch)
        }
    },
    login: function(input){
        return dispatch => {
            const promise = axios.post(`${process.env.REACT_APP_API_URL}/user/login`,
            input)
            this._dispatchPromise(promise, this.USER, dispatch)
        }
    },
    addfav: function(input){
        return dispatch => {
            const promise = axios.post(`${process.env.REACT_APP_API_URL}/user/addfav`,
            input)
            this._dispatchPromise(promise, this.USER, dispatch)
        }
    },
    removefav: function(input){
        return dispatch => {
            const promise = axios.post(`${process.env.REACT_APP_API_URL}/user/removefav`,
            input)
            this._dispatchPromise(promise, this.USER, dispatch)
        }
    },
    logout: function(){
        return{
            type: this.USER,
            payload: {}
        }
    },

    THISCAT: "THIS_CAT",
    selectCat: function(cat){
        return{
            type: this.THISCAT,
            payload: cat
        }
    },
    

    _dispatchPromise: function(promise, type, dispatch){
        return promise
        .then(({data}) => {
            dispatch({type, payload: data})
        })
        .catch(err => {
            alert(`Error! \n ${err}`)
        })
    }
}

export default actionCreator