/**
 * Created by Administrator on 2017/5/22.
 */
;(function () {
  var Dialog = function (config) {
    var _this_ = this;
    // 加载配置
    this.config = {
      width:'auto',
      height:'auto',
      type: 'loading',
      delay: null,
      maskOpacity: null,
      messages:null,
      buttons: null
    };

    // 判断config是否为空, 则加载默认config参数
    if(config && $.isPlainObject(config)){
      $.extend(this.config, config)
    }else {
      this.isConfig = true
    }

    this.body = $('body');
    this.mask = $('<div class="g-dialog-container">');
    this.win = $('<div class="dialog-window">');
    this.winHeader = $('<div class="dialog-header"></div>');
    this.winContent = $('<div class="dialog-content"></div>');
    this.winFooter = $('<div class="dialog-footer"></div>');

    this.create();

  };

  // 添加 Dialog 类
  Dialog.prototype = {
    // 创建dialog框
    create: function () {
      var _this_ = this,
        config = this.config,
        body = this.body,
        mask = this.mask,
        win = this.win,
        winHeader = this.winHeader,
        winContent = this.winContent,
        winFooter = this.winFooter;

      if(this.isConfig){
        win.append(winHeader.addClass(config.type))
      }else {
        win.append(winHeader.addClass(config.type));
        win.append(winContent.html(config.messages))
      }

      if(config.buttons){
        $.each(config.buttons, function (i,n) {

          var callback = n.callback?n.callback : null;
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
  };
  window.Dialog = Dialog
})();