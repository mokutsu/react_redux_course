import axios from 'axios'
export const FETCH_POSTS = 'fetch_posts'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=fakeapikeythatisuniqueassdfq23432432'
export function fetchPosts() {

  const requests = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: requests
  };
}
