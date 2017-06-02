// 当前项目中，所有涉及到的ajax url都统一保存在一个文件里
define(['jquery'], function() {
    var Handler_API = function () {
        console.log(1111)
        this.api = {
            dayInfo: 'https://hq.tigerbrokers.com/fundamental/finance_calendar/get_day/2017-04-03',
            typeInfo: 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-03-26/2017-04-15'
        };
    }
    Handler_API.prototype = {
        get_api: function (api) {
            console.log(api)
            return $.get(this.api[api])
        }
    }

    return new Handler_API();
})
