/**
 * [listMixin description]
 * @type {Object}
 * 定义列表的混合对象
 */
export const listMixin = {
  data() {
    return {
      total: 1,   //总页数
      pageSize: 10,  //每页显示条数
      page: 1,  //当前页数
      filters: {},
      exParams: {},
      searchItems:[],
      list: [],
      listLoading: false,
      getData: null,
      delFun: null
    }
  },
  mounted() {
    // this.fetchData()
    console.log('测试')
  },
  methods: {
  //   fetchData(page) {
  //     if (page) this.page = page
  //     let listQuery = {
  //       ...this.exParams,
  //       ...this.filters,
  //       pageNum: this.page,
  //       pageSize: this.pageSize
  //     }
  //     this.listLoading = true
  //     this.getData(listQuery).then(res => {
  //       this.list = this.handleData(res.obj.list)
  //       this.total = res.obj.total
  //       this.pageSize = res.obj.pageSize
  //       this.listLoading = false
  //     })
  //   },
  //   delData(id) {
  //     this.$confirm('此操作将删除该文件, 是否继续?', '提示', {
  //       confirmButtonText: '确定',
  //       cancelButtonText: '取消',
  //       type: 'warning'
  //     }).then(() => {
  //       this.delFun({ id }).then(res => {
  //         this.$message({
  //           type: 'success',
  //           message: '删除成功!'
  //         });
  //         this.fetchData()
  //       })
  //     })
  //   },
  //   handleData(data) {
  //     for (let i = 0; i < data.length; i++) {
  //       let item = data[i]
  //       HANDLE_DATE_LIST.forEach(key => {
  //         if (item[key]) item[key] = parseDate(item[key])
  //       })
  //       HANDLE_DATETIME_LIST.forEach(key => {
  //         if (item[key]) item[key] = parseTime(item[key])
  //       })
  //     }
  //     return this.handleDataExtend(data)
  //   },
    handleDataExtend(data) {
      return data
    }
  }
}