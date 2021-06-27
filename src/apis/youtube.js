import axios from 'axios';

const KEY = 'AIzaSyDOMwc4KSKgak3YQZf1zZbZW40gP8HYd5k';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       type: 'video',
       maxResults: '5',
       key: KEY
   } 
});