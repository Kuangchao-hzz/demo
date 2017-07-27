import { asyncRouterMap, includeRouterMap } from '../../router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles {array} 返回的用户权限
 * @param route {object} 路由对象
 */
function hasPermission (roles, route) {
    if (route.meta && route.meta.role) {
        return roles.some(role => route.meta.role.indexOf(role) >= 0)
    }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap {array} 需要处理的权限路由
 * @param roles {array} 返回的用户权限
 */
function filterAsyncRouter(asyncRouterMap, roles) {
    const accessedRouters = asyncRouterMap.filter(route => {
        if (hasPermission(roles, route)) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, roles)
            }
            return true
        }
        return false
    })
    return accessedRouters
}

function deepClone(source) {
    if (!source && typeof source !== 'object') {
        throw new Error('error arguments', 'shallowClone');
    }
    const targetObj = source.constructor === Array ? [] : {};
    for (const keys in source) {
        if (source.hasOwnProperty(keys)) {
            if (source[keys] && typeof source[keys] === 'object') {
                targetObj[keys] = source[keys].constructor === Array ? [] : {};
                targetObj[keys] = deepClone(source[keys]);
            } else {
                targetObj[keys] = source[keys];
            }
        }
    }
    return targetObj;
}

const permission = {
    state: {
        routers: includeRouterMap,
        addRouters: []
    },
    mutations: {
        SET_ROUTERS (state, routers) {
            state.addRouters = deepClone(routers)
            state.routers = deepClone(includeRouterMap.concat(routers))
        }
    },
    actions: {
        GenerateRoutes ({ commit }, data) {
            return new Promise(resolve => {
                const { roles } = data
                let accessedRouters
                if (roles.some((role) => role === 'admin')) {
                    accessedRouters = asyncRouterMap
                } else {
                    accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
                }
                commit('SET_ROUTERS', accessedRouters);
                resolve(accessedRouters)
            })
        },
        setCurrentPath ({ commit }, data) {

        }
    }
}
export default permission