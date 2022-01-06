<template>
  <div class="home">
    <ul v-for="memo in newest" v-bind:key="memo.id">
      <li>{{ memo.body }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'home',
  computed: {
    newest: function() {
      return this.$store.state.memos.slice().reverse();
    }
  }
}
</script>
