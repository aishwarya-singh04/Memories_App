// import axios from 'axios';              //to make api calls

// const url ='http://localhost:5000/posts';       //it simply returns all the posts in the database


// //export const fetchPosts =()=>axios.get(url);

// //all actions in the back-end are going to be done using  redux

// export const createPost = (newPost) => axios.post(url, newPost);

// export const updatePost = (id, updatedPost)=> axios.patch(`${url}/${id}`, updatedPost);

// export const deletePost =(id)=>axios.delete(`${url}/${id}`);

// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);



// export const fetchPosts = () => API.get('/posts');
// export const signIn = (formData) => API.post('/user/signin', formData);
// export const signUp = (formData) => API.post('/user/signup', formData);


import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/posts' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);