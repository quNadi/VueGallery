const state={
  paintings:{}
};
const getters={
  paintings: state=> state.paintings
};
const actions={
  initStore:({commit})=>{
    axios.get('static/paintings.json').then((response)=>{
      console.log(response.data.paintings);
      commit('SET_STORE', response.data.paintings)
    });
  }
};
const mutations={
  'SET_STORE'(state, paintings){
    state.paintings=paintings;
  }
};
export default {
  state,
  getters,
  actions,
  mutations,
}
