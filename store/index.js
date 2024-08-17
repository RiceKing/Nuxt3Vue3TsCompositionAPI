import { createStore } from 'vuex';

const store = createStore({
    state: {
        usersList: [],
        isLoading: false,
    },
    mutations: {
        setUsersList(state, users) {
            state.usersList = users;
        },
        setLoading(state, loading) {
            state.isLoading = loading;
        },
        clearUsersList(state) {
            state.usersList = [];
        },
    },
    actions: {
        async fetchUsersList({ commit }, query) {
            commit('setLoading', true);
            try {
                const response = await $fetch('/users', {
                    baseURL: 'https://jsonplaceholder.typicode.com', 
                    query,
                });
                commit('setUsersList', response);
            } catch (error) {
                console.error('Error fetching data:', error);
                commit('clearUsersList');
            } finally {
                commit('setLoading', false);
            }
        },
    },
});

export default store;