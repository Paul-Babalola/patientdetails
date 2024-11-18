import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedPatient: null, // Store the selected patient details
  },
  mutations: {
    setSelectedPatient(state, patient) {
      state.selectedPatient = patient;
    },
  },
  actions: {
    selectPatient({ commit }, patient) {
      commit('setSelectedPatient', patient);
    },
  },
  getters: {
    selectedPatient: (state) => state.selectedPatient,
  },
});
