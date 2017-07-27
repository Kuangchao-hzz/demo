import instance from './index'
const qs = require('qs')

export default {
    excel_materialData ($params) {
        return instance.post('/submit.php/shVisa/exportExcel', qs.parse($params), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
        })
    }
}
