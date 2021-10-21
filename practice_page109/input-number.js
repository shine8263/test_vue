Vue.component('input-number',{
    props:{
        value:{
            type:Number,
            default:2
        },
        max:{
            type:Number,
            default:Infinity
        },
        min:{
            type:Number,
            default:-Infinity
        }
    },
    template:'\
    <div id="container">\
        <input type="number" v-model="value">\
        <button @click="reduce()">-</button>\
        <button @click="plus()">+</button>\
        \
    </div>\
    ',
    methods:{
        reduce:function(){
            if(this.number-1>=this.min){
                this.number--;
            }
            console.log('this.number:',this.number);
        },
        plus:function(){
            if(this.number+1<=this.max){
                this.number++;
            }
            console.log('this.number:',this.number);
        }
    }
})