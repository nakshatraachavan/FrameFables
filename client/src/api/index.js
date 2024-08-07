import axios from 'axios';

const API =axios.create({baseURL:'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      const token = JSON.parse(localStorage.getItem('profile')).token;
      console.log('Token:', token); // Add this line for debugging
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  });

export const fetchPosts=()=>API.get('posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);