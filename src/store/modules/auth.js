import auth from '../../api/auth'

const state = {
    user: null,
    isLogin: false,
}

const getters = {
    user: state => state.user,
    isLogin: state => state.isLogin
}

const mutations = {
    setUser(state, payload) {
        state.user = payload.user
    },
    setLogin(state, payload) {
        state.isLogin = payload.isLogin
    }
}

const actions = {
    async login({commit}, {username, password}) {
        const res = await auth.login({ username, password })
        commit('setUser', { user: res.data })
        commit('setLogin', { isLogin: true })
    },

    async register({commit}, {username, password}) {
        const res = await auth.register({username, password})
        commit('setUser', {user: res.data})
        commit('setLogin', {isLogin: true})

        return res.data
    },

    async logout({ commit }) {
        await auth.logout()
        commit('setUser', {user: null})
        commit('setLogin', {isLogin: false})
    },

    async checkLogin({ commit, state }) {
        if (state.isLogin) {return true}

        try {
            const res = await auth.getInfo()
            commit('setLogin', { isLogin: true})
            commit('setUser', { user: res.data })
            return true
        } catch (err) {
            console.log(err)
            return false
        }
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}