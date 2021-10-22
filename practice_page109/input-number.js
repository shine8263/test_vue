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
    data:function(){
        return {
            currentValue:this.value
        }
    },
    methods:{
        reduce:function(){
            if(this.currentValue-1>=this.min){
                this.currentValue--;
                this.$emit('input',this.currentValue);
            }
            console.log('this.currentValue:',this.currentValue);
        },
        plus:function(){
            if(this.currentValue+1<=this.max){
                this.currentValue++;
                this.$emit('input',this.currentValue);
            }
            console.log('this.currentValue:',this.currentValue);
        }
    }
})