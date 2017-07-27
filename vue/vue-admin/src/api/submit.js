import instance from './index'

export default {
    // 添加、编辑用户护照信息
    edit_addFormData ($params) {
        return instance.post('/submit.php/shVisa/updateVisa', $params)
    },
    // 护照合格
    edit_qualifiedData ($params) {
        return instance.post('/submit.php/shVisa/agree', $params)
    }
}