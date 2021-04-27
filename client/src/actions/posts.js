import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE } from '../constants/actionTypes';
//Actions Creators
export const getPosts = () => async(dispatch)=> {
    try {
        const {data} = await api.fetchPosts();

        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
   
}

export const createPost =(post)=> async(dispatch) =>{
    try {
        const {data} = await api.createPost(post);               //making an API Request to our backend server for post api requests
        
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}


export const updatePost = (id, post)=> async(dispatch)=>{
    try {
        const {data} = await api.updatePost(id, post);
        dispatch({type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}


export const deletePost =(id)=>async(dispatch)=>{
    try {
        await api.deletePost(id);
        dispatch({type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error);
    }
}