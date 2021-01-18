import blog from '../../api/blog'

export default {
    data() {
        return {
            blogs: [],
            user: {},
            page: 1,
            total: 0
        }
    },

    created() {
        let userId = this.$route.params.userId
        this.page = parseInt(this.$route.query.page) || 1
        blog.getBlogsByUserId(userId, { page: this.page }).then(res => {
            this.blogs = res.data
            this.page = res.page
            this.total = res.total
            if (res.data.length) {
                this.user = res.data[0].user
            }
        })
    },

    methods: {
        onPageChange(newPage) {
            console.log(newPage)
            blog.getBlogsByUserId(this.user.id, { page: newPage }).then(res => {
                this.blogs = res.data
                this.page = res.page
                this.total = res.total
                this.$router.push({ path: `/user/${this.user.id}`, query: { page: newPage }})
            })
        },

        splitDate(str) {
            let dateObj = typeof str === 'object' ? str : new Date(str)
            return {
                date: dateObj.getDate(),
                month: dateObj.getMonth() + 1,
                year: dateObj.getFullYear()
            }
        }
    }
}