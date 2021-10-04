var app = new Vue({
    el: '#app',
    data: {
        tds: [
            {
                name: 'iPhone7',
                price: 6188,
                buyNum:1
            },
            {
                name: 'iPad Pro',
                price: 5888,
                buyNum:2
            },
            {
                name: 'MacBook Pro',
                price: 21488,
                buyNum:1
            }
        ]
    },
    computed: {
        totalPrice: function () {
            var totalPrice = 0; 
            var thisTds = this.tds;
            for (let td of thisTds) {
                totalPrice += td.price * td.buyNum;
            }
            return totalPrice.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
    methods: {
        add: function (index) {
            this.tds[index].buyNum++;
        },
        reduce: function (index) {
            var num = this.tds[index].buyNum;
            num--;
            if (num < 0) {
                num = 0;
            }
            this.tds[index].buyNum = num;
        },
        remove: function (index) {
            this.tds.splice(index, 1);
        }
    }
})
