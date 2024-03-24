import axios from 'axios';

const api = {
  news: 'https://api.hnpwa.com/v0/news/1.json',
  ask: 'https://api.hnpwa.com/v0/ask/1.json',
  jobs: 'https://api.hnpwa.com/v0/jobs/1.json',
  user: 'https://api.hnpwa.com/v0/user/',
  item: 'https://api.hnpwa.com/v0/item/'
};


function fetchNewsList() {
  return axios.get(api.news);
}

function fetchAsk() {
  return axios.get(api.ask);
}

function fetchJobsList() {
  return axios.get(api.jobs);
}

function fetchUser(id) {
  const url = `${api.user}${id}.json`;
  return axios.get(url);
}

function fetchItem(id) {
  const url = `${api.item}${id}.json`;
  // https://api.hnpwa.com/v0/item/39743483.json
  console.log(url)
  return axios.get(url);
}

export {
  fetchNewsList,
  fetchAsk,
  fetchJobsList,
  fetchUser,
  fetchItem
}