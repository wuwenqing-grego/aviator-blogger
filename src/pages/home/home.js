import blog from '../../api/blog'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            blogs: [],
            page: 1,
            total: 0
        }
    },

    computed: {
        ...mapGetters([
            'user'
        ])
    },

    created() {
        this.page = parseInt(this.$route.query.page) || 1
        blog.getBlogsByUserId(this.user.id, { page: this.page }).then(res => {
            this.blogs = res.data
            this.page = res.page
            this.total = res.total
        })
    },

    methods: {
        onPageChange(newPage) {
            console.log(newPage)
            blog.getBlogsByUserId(this.user.id, { page: newPage }).then(res => {
                this.blogs = res.data
                this.page = res.page
                this.total = res.total
                this.$router.push({ path: "/home", query: { page: newPage }})
            })
        },

        splitDate(str) {
            let dateObj = typeof str === 'object' ? str : new Date(str)
            return {
                date: dateObj.getDate(),
                month: dateObj.getMonth() + 1,
                year: dateObj.getFullYear()
            }
        },

        async onDelete(blogId) {
            console.log(blogId)
            try {
                await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                  })
                await blog.deleteBlog(blogId)
                this.$message({
                      type: 'success',
                      message: '删除成功!'
                    })
                this.blogs = this.blogs.filter(blog => blog.id !== blogId)
            } catch (err) {
                console.log(err)
            }
        }
    }
}