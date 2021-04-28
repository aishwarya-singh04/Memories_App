import axios from 'axios';              //to make api calls

const url ='http://localhost:5000/posts';       //it simply returns all the posts in the database

export const fetchPosts =()=>axios.get(url);

//all actions in the back-end are going to be done using  redux

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost)=> axios.patch(`${url}/${id}`, updatedPost);

export const deletePost =(id)=>axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);



export const fetchPosts = () => API.get('/posts');
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);