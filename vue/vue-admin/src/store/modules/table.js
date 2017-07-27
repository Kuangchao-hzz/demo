const table = {
    state: {
        passportInfo: {
            type: false,
            passportNo: ''
        },
        serialNumber: {
            type: false,
            id: ''
        },
        unqualified: {
            type: false,
            visaId: '',
            name: ''
        },
        qualified: {
            type: false,
            id: '',
            name: ''
        },
        addVisaInfo: {
            type: false,
            city: ''
        },
        backTracking: {
            type: false,
            id: ''
        },
        backTrackingEditVisa: {
            type: false,
            id: ''
        },
    },
    mutations: {
        SET_POSSPORTINFO ($store, $params) {
            $store.passportInfo.type = $params.type
            $store.passportInfo.passportNo = $params.passportNo
        },
        SET_SERIALNUMBER ($store, $params) {
            $store.serialNumber.type = $params.type
            $store.serialNumber.id = $params.id
        },
        SET_HANDLERUNQUALIFIED ($store, $params) {
            $store.unqualified.type = $params.type
            $store.unqualified.visaId = $params.visaId
            $store.unqualified.name = $params.name
        },
        SET_QUALIFIED ($store, $params) {
            $store.qualified.type = $params.type
            $store.qualified.id = $params.id
            $store.qualified.name = $params.name
        },
        SET_HANDLERSELECTCITY ($store, $params) {
            $store.addVisaInfo.type = $params.type
            $store.addVisaInfo.city = $params.city
        },
        SET_BACKTRACKING ($store, $params) {
            $store.backTracking.type = $params.type
            $store.backTracking.id = $params.id
        },
        SET_BACKTRACKINGEDITVISA ($store, $params) {
            $store.backTrackingEditVisa.type = $params.type
            $store.backTrackingEditVisa.id = $params.id
        }
    },
    actions: {
        // 护照信息弹窗状态
        handlerPassportInfo ( {commit}, $params ) {
            commit('SET_POSSPORTINFO', $params);
        },
        // 操作记录弹窗状态
        handlerSerialNumber ( {commit}, $params ) {
            commit('SET_SERIALNUMBER', $params);
        },
        // 不合格弹窗状态
        handlerUnqualified ( {commit}, $params ) {
            commit('SET_HANDLERUNQUALIFIED', $params);
        },
        // 合格弹窗状态
        handlerQualified ( {commit}, $params ) {
            commit('SET_QUALIFIED', $params);
        },
        // 选择国家弹窗状态
        handlerSelectCity ( {commit}, $params ) {
            commit('SET_HANDLERSELECTCITY', $params);
        },
        // 补录弹窗状态
        handlerBackTracking ( {commit}, $params ) {
            commit('SET_BACKTRACKING', $params);
        },
        // 补录 -> 编辑护照 -> 状态
        handlerBackTrackingEditVisa ( {commit}, $params ) {
            commit('SET_BACKTRACKINGEDITVISA', $params);
        },
    }
}

export default table