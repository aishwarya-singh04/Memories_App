import axios from 'axios';              //to make api calls

const url ='http://localhost:5000/posts';       //it simply returns all the posts in the database

export const fetchPosts =()=>axios.get(url);

//all actions in the back-end are going to be done using  redux

export const createPost = (newPost) => axios.post(url, newPost);
