import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuth: false,
    cart: []
  },
  getters: {
    getCart(state) {
      return state.cart
    },
  },
  mutations: {
    addToCart(state,product) {
      state.cart.push(product)
    },
  },
  actions: {
  },
  modules: {
  }
})
