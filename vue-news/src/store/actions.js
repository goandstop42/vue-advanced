import {
  fetchNewsList,
  fetchJobsList,
  fetchAsk,
  fetchUser,
  fetchItem,
  fetchList
} from "../api/index";

export default {
  // promise
  // async
  async FETCH_NEWS_LIST(context) {
    const response = await fetchNewsList;
    context.commit("SET_NEWS", response.data);
    return response;
  },

  async FETCH_JOBS_LIST({ commit }) {
    const response = await fetchJobsList();
    commit("SET_JOBS", response.data);
    return response;
  },

  async FETCH_ASK({ commit }) {
    const response = await fetchAsk();
    commit("SET_ASK", response.data);
    return response;
  },
  FETCH_USER({ commit }, username) {
    return fetchUser(username)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch(error => {
        console.error("Error fetching ask:", error);
        throw error;
      });
  },
  FETCH_ITEM({ commit }, id) {
    return fetchItem(id)
      .then(({ data }) => {
        commit("SET_ITEM", data);
      })
      .catch(error => {
        console.error("Error fetching ask:", error);
        throw error;
      });
  },
  MODIFY_USER({ commit }) {
    commit("CLEAR_USER", []);
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(({ data }) => commit("SET_LIST", data))
      .catch(error => console.log(error));
  }
};