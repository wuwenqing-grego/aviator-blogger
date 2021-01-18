import blog from '../../api/blog'

export default {
    data() {
        return {
            title: '',
            abstract: '',
            content: '',
            atIndex: false
        }
    },

    methods: {
        onCreate() {
            blog.createBlog({ title: this.title, content: this.content, description: this.abstract, atIndex: this.atIndex })
            .then(res => {
                this.$message.success(res.msg)
                this.$router.push({ path: `/blog/${res.data.id}` })
            })
        }
    }
}