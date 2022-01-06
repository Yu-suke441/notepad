import { createStore } from 'vuex'

export default createStore({
  state: {
    memos: [
      {id: 1,body: 'メモサンプルです'}
    ]
  },
  mutations: {
    save(state, memo) {
      // 新しいIDを割り振る
      var max = state.memos[state.memos.length - 1].id
      memo.id = max + 1
      state.memos.push(memo);
    }
  },
  actions: {
  },
  modules: {
  }
})
