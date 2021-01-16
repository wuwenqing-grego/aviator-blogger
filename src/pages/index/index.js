import blog from '../../api/blog'

export default {
    data() {
        return {
            blogs: [],
            page: 1,
            total: 0,
        }
    },

    created() {
        this.page = parseInt(this.$route.query.page) || 1
        blog.getIndexBlogs( {page: this.page}).then(res => {
            this.blogs = res.data
            this.total = res.total
            this.page = res.page
        })
    },

    methods: {
        onPageChange(newPage) {
            console.log(newPage)
            blog.getIndexBlogs({ page: newPage }).then(res => {
                this.blogs = res.data
                this.total = res.total
                this.page = res.page
                this.$router.push({ path: '/', query: { page: newPage }})
            })
        }
    }
}