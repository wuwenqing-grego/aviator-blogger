import blog from '../../api/blog'

export default {
    data() {
        return {
            blogId: null,
            title: '',
            abstract: '',
            content: '',
            atIndex: false
        }
    },

    created() {
        this.blogId = this.$route.params.blogId
        blog.getDetail(this.blogId).then(res => {
            this.title = res.data.title
            this.abstract = res.data.description
            this.content = res.data.content
            this.atIndex = res.data.atIndex
        })
    },

    methods: {
        onEdit() {
            blog.updateBlog(this.blogId, { title: this.title, content: this.content, description: this.abstract, atIndex: this.atIndex })
            .then(res => {
                this.$message.success(res.msg)
                this.$router.push({ path: `/blog/${res.data.id}` })
            })
        }
    }
}