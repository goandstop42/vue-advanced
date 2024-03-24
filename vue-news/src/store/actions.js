import {
  fetchNewsList,
  fetchJobsList,
  fetchAsk,
  fetchUser,
  fetchItem
} from "../api/index";

export default {
  FETCH_NEWS_LIST(context) {
    return fetchNewsList()
      .then(({ data }) => {
        context.commit("SET_NEWS", data);
      })
      .catch(error => {
        console.error("Error fetching news:", error);
        throw error; // Throw error to be caught in the component
      });
  },
  FETCH_JOBS_LIST({ commit }) {
    return fetchJobsList()
      .then(({ data }) => {
        commit("SET_JOBS", data);
      })
      .catch(error => {
        console.error("Error fetching jobs:", error);
        throw error;
      });
  },
  FETCH_ASK({ commit }) {
    return fetchAsk()
      .then(({ data }) => {
        commit("SET_ASK", data);
      })
      .catch(error => {
        console.error("Error fetching ask:", error);
        throw error;
      });
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
  }
};