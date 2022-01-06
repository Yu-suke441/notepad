import { createStore } from 'vuex'
import createdPersistredState from 'vuex-persistedstate'

export default createStore({
  plugins: [createdPersistredState()],
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
    },
    update(state, data) {
      let x = state.memos.find(memo => memo.id == data.id)
      x.body = data.body;
    }
  },
  actions: {
  },
  modules: {
  }
})
