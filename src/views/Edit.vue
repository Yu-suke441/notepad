<template>
    <div class="editor">
        <Header>Edit memo</Header>
        <textarea name="memo" v-model="memoBody"></textarea>
        <button @click="save">保存</button>
    </div>
</template>

<style>
    textarea {
        width: 100%;
        height: 10em;
    }
    button {
        border: 1px solid #333;
        background-color: #333;
        color: #fff;
        padding: 10px 20px;
        margin-top: 10px;
    }
</style>


<script>
import Header from "@/components/Header.vue"
export default({
    name: 'edit',
    components: {
        Header
    },
    data: function() {
        return {
            memoBody: ''
        }
    },
    mounted: function(){
        let id = this.$route.params["id"];
        let memo = this.$store.state.memos.slice().find(memo => memo.id == id);
        this.memoBody = memo.body
    },
    methods: {
        save: function() {
            this.$store.commit("update", {
                id: this.$route.params["id"],
                body: this.memoBody 
            });
            this.$router.push('/')
        }
    }
})
</script>
