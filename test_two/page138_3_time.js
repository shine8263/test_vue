Vue.directive('time', {
    bind: function (el, binding) {
        el.innerHTML = binding.value;
        el._timeout_ = setInterval(function () {
            el.innerHTML = (new Date()).getTime();
        },1000)
    },
    unbind: function (el) {
        clearInterval(el._timeout_);
        delete el._timeout_;
    }
})