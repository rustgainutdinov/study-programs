import Vuex from 'vuex'
import Auth from '@/store/auth'
import Directions from '@/store/directions'
import personalData from '@/store/personal_data'

export default () => new Vuex.Store({
  modules: {
    Auth,
    Directions,
    personalData
  }
});
