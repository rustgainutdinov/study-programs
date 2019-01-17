import Cookie from "js-cookie";

export default {
  state: {
    userPersonalData: {
      userId: null,
      accessRight: 100
    }
  },
  mutations: {
    setUserData(state, userData) {
      state.userPersonalData = userData;
    },
    removeUserData(state) {
      state.userPersonalData = {
        userId: null,
        accessRight: 100
      };
    }
  },
  actions: {
    async nuxtServerInit(vuexContext, context) {
      await context.$axios.$get("/login", context.req.rawHeaders)
        .then(result => {
          if (result.statusCode === '023ms7fbgs54bw9y') {
            console.log(result.data);
            vuexContext.dispatch('setUserData', result.data);
          } else {
            console.log(result);
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    setUserData(vuexContext, data) {
      var userData = {
        accessRight: Number(data.access_right),
        userId: data.users_id
      };
      vuexContext.commit("setUserData", userData);
      Cookies.remove('sid');
      Cookie.set('sid', data.session_id);

    },
    initAuth(vuexContext, req) {
      console.log('initAuth');
    },
    logoutUser(vuexContext) {
      vuexContext.commit('removeUserData');
      Cookies.remove('sid');
    }
  },
  getters: {
    getUserData(state) {
      return state.userPersonalData;
    }
  }
}
