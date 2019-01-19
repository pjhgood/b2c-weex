import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'
axios.interceptors.request.use(function (config) {
  let mytoken = localStorage.getItem('mytoken') || ''
  if (mytoken) {
    config.headers['Authorization'] = mytoken
  }
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export const postLogin = obj => {
  return axios.post('/login', obj)
    .then(res => res)
}

export const getUserList = obj => axios.get('/users', { params: obj }).then(res => res.data)

export const addUser = obj => axios.post('/users', obj).then(res => res.data)

export const delUser = id => axios.delete(`/users/${id}`).then(res => res.data)

export const editUser = obj => axios.put(`/users/${obj.id}`, {email: obj.email, mobile: obj.mobile}).then(res => res.data)

export const changeState = (id, type) => axios.put(`users/${id}/state/${type}`).then(res => res.data)

export const getGrantList = obj => axios.get('roles', { params: obj }).then(res => res.data)

export const putGrant = (id, rid) => axios.put(`users/${id}/role`, {rid: rid}).then(res => res.data)

export const getRight = type => axios.get(`rights/${type}`).then(res => res.data)

export const delRoleRights = (rightId, roleId) => axios.delete(`roles/${roleId}/rights/${rightId}`).then(res => res.data)

export const editRight = (id, roleName, roleDesc) => axios.put(`roles/${id}`, { roleName, roleDesc }).then(res => res.data)

export const delRole = id => axios.delete(`roles/${id}`).then(res => res.data)

export const addRole = (roleName, roleDesc) => axios.post(`roles`, { roleName, roleDesc }).then(res => res.data)

// 获取商品列表
export const getList = (query, pagenum, pagesize) => axios.get('goods', {params: query, pagenum, pagesize}).then(res => res.data)

// 编辑商品信息
export const editGoods = (id, obj) => axios.put(`goods/${id}`, obj).then(res => res.data)

// 获取用户权限
export const getUserRights = (roleId, rids) => axios.post(`roles/${roleId}/rights`, rids).then(res => res.data)

// 获取左侧权限菜单
export const getmune = obj => axios.get('menus', {params: obj}).then(res => res.data)

// 获取商品分类
export const getCategories = (type, pagenum, pagesize) => axios.get('/categories', {params: {type: type, pagenum: pagenum, pagesize: pagesize}}).then(res => res.data)

// 提交级联选择器数据
export const addCate = obj => axios.post('categories', obj).then(res => res.data)

// 获取订单数据
export const getOrders = (query, pagenum, pagesize) => axios.get('orders', { params: query, pagenum, pagesize }).then(res => res.data)
