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
        }
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
        SET_HANDLERTABLE ($store, $params) {
            $store.unqualified.type = $params.type
            $store.unqualified.visaId = $params.visaId
            $store.unqualified.name = $params.name
        }
    },
    actions: {
        handlerPassportInfo ( {commit}, $params ) {
            commit('SET_POSSPORTINFO', $params);
        },
        handlerSerialNumber ( {commit}, $params ) {
            commit('SET_SERIALNUMBER', $params);
        },
        handlerTable ( {commit}, $params ) {
            commit('SET_HANDLERTABLE', $params);
        },
    }
}

export default table