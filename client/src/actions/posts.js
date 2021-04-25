import * as api from '../api';

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
