;(function ($) {
    var Dialog = function (config) {

        var _this_ = this

        this.config = {
            width:'auto',
            height:'auto',
            type: 'loading',
            delay: null,
            maskOpacity: null,
            messages:null,
            buttons: null
        };

        if(config && $.isPlainObject(config)){
            $.extend(this.config,config)
        }else {
            this.isConfig = true
        }

        console.log(this.config)

        this.body = $('body')
        this.mask = $('<div class="g-dialog-container">')
        this.win = $('<div class="dialog-window">')
        this.winHeader = $('<div class="dialog-header"></div>')
        this.winContent = $('<div class="dialog-content"></div>')
        this.winFooter = $('<div class="dialog-footer"></div>')

        this.create()

    }

    Dialog.prototype = {
        create: function () {
            var _this_ = this,
                config = this.config,
                body = this.body,
                mask = this.mask,
                win = this.win,
                winHeader = this.winHeader,
                winContent = this.winContent,
                winFooter = this.winFooter



            if(this.isConfig){
                win.append(winHeader.addClass(config.type))
            }else {
                win.append(winHeader.addClass(config.type))
                win.append(winContent.html(config.messages))
            }

            if(config.buttons){
                $.each(config.buttons, function (i,n) {

                    var callback = n.callback?n.callback : null
                    var buttons = $('<button class="' + n.type + '"> ' + n.text + ' </button>')
                    win.append(winFooter.append(buttons));

                    if(callback){
                        buttons.click(function () {
                            callback();
                        })
                    }


                })
            }

            mask.append(win)
            body.append(mask)

        }
    }

    window.Dialog = Dialog

})(Zepto);
