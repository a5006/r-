
(function () {
  var DelGroupFn = function (paramsObj) {
    this.obj = {
      count: 19
    }
    if (paramsObj) {
      this.obj = $.extend(obj, paramsObj)
    }
    this.step = 0;
    this.handleDel()
  }
  DelGroupFn.prototype = {
    constructor: 'DelGroupFn',
    handleCheck: function () {
      var list = $("tbody.list").find("tr").eq(this.step)
      console.log(this.step)
      if (!list) {
        return false
      } else {
        // 如果是管理员则跳过
        if ($(list).find(".group-manage-a").length > 0) {
          this.step++
          return true
        }
      }
      // 勾选
      $(list).find(".check-input").click()

      this.step++
      if (this.step % this.obj.count === 0 && this.step > 0) {
        this.step = 0
        $(".del-member").click()
        setTimeout(function () {
          // 点击确定
          $(".btn-submit").click()
        }, 500);
      }
      return true
    },
    handleDel: function () {
      var _self = this
      var timer = setInterval(function () {
        var continute = _self.handleCheck()
        if (!continute) {
          clearInterval(timer)
          return
        }
      }, 1000)
    }
  }
  $.prototype.delFn = function () {
    return new DelGroupFn()
  }
})(jQuery)
