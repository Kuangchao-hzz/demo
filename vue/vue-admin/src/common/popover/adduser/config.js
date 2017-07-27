
/*
* ========================== 不同城市新增护照信息配置 =================================
* sourceId:       {array} 根据用户来源验证是否验证 '用户昵称' && '订单号'
* required:       {array} 必填项
* mainField:      {Boolean} 是否显示主申请人
* outDistrict:    {Boolean} 国家为泰国时显示外领区
* */

export default {
    julong: {
        japan: {
            name: '日本',
            sourceId: ['1', '2', '3'],
            required: {
                nickName: true,
                orderIds: true,
                mobile: true,
                emails: true
            },
            mainField: true,
            outDistrict: false,
            layout: true,
            visaType: true,
            urgent: 'default'
        },
        thailand: {
            name: '泰国',
            sourceId: ['1', '2', '3'],
            required: {
                nickName: true,
                orderIds: true,
                mobile: true,
                emails: false
            },
            mainField: false,
            outDistrict: true,
            layout: true,
            visaType: false,
            urgent: 'radio'
        },
        philippines: {
            name: '菲律宾',
            sourceId: ['1', '2', '3'],
            required: {
                nickName: true,
                orderIds: true,
                mobile: true,
                emails: false
            },
            mainField: false,
            outDistrict: false,
            layout: false,
            visaType: false,
            urgent: 'select'
        },
        other: {
            name: '其它',
            sourceId: ['1', '2', '3'],
            required: {
                nickName: true,
                orderIds: true,
                mobile: true,
                emails: false
            },
            mainField: true,
            outDistrict: false,
            layout: true,
            visaType: true,
            urgent: 'default'
        },
    },
    zhongqiao: {
        japan: {
            name: '日本',
            sourceId: ['1', '2', '3'],
            required: {
                nickName: true,
                orderIds: true,
                mobile: true,
                emails: true
            },
            mainField: true,
            outDistrict: false,
            layout: true
        },
        thailand: {
            name: '泰国',
            sourceId: ['1', '2', '3'],
            required: {
                nickName: true,
                orderIds: true,
                mobile: true,
                emails: false
            },
            mainField: false,
            outDistrict: true,
            layout: true
        },
        philippines: {
            name: '菲律宾',
            sourceId: ['1', '2', '3'],
            required: {
                nickName: true,
                orderIds: true,
                mobile: true,
                emails: false
            },
            mainField: false,
            outDistrict: false,
            layout: false
        },
        other: {
            name: '其它',
            sourceId: ['1', '2', '3'],
            required: {
                nickName: true,
                orderIds: true,
                mobile: true,
                emails: false
            },
            mainField: true,
            outDistrict: false,
            layout: true
        },
    },
    zz: {
        japan: {
            name: '日本',
            sourceId: ['1'],
            required: {
                nickName: true,
                orderIds: true,
                mobile: true,
                emails: true
            },
            mainField: true,
            outDistrict: false,
            layout: true
        },
        thailand: {
            name: '泰国',
            sourceId: ['1', '2', '3'],
            required: {
                nickName: true,
                orderIds: true,
                mobile: true,
                emails: false
            },
            mainField: false,
            outDistrict: true,
            layout: true
        },
        philippines: {
            name: '菲律宾',
            sourceId: ['1', '2', '3'],
            required: {
                nickName: true,
                orderIds: true,
                mobile: true,
                emails: false
            },
            mainField: false,
            outDistrict: false,
            layout: false
        },
        other: {
            name: '其它',
            sourceId: ['1', '2', '3'],
            required: {
                nickName: true,
                orderIds: true,
                mobile: true,
                emails: false
            },
            mainField: true,
            outDistrict: false,
            layout: true
        },
    },
}