export default {
    methods: {
        error() {
            this.$message.error('Error!')
        },
        window() {
            this.$alert('这是一段内容', '标题名称', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: `action: ${action}`
                    })
                }
            })
        }
    }
}