export default {
    state: {
        messages: []
    },
    mutations: {
        setMessage(state, payload) {
            state.messages = payload
        }
    },
    actions: {
        setMessage({commit}, payload) {
            commit('setMessage', payload)
        }
    },
    getters: {
        getMessages(state) {
            return state.messages
        }
    },
}