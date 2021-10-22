Vue.component('input-number2',{
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
    data:function(){
        return {
            currentValue:this.value
        }
    },
    methods:{
        updateValue:function(val){
            if(val>this.max) val=this.max;
            if(val<this.min) val=this.min;
            this.currentValue=val;
        },
        reduce:function(){
            if(this.currentValue-1<this.min) return;
            this.currentValue-=1;
        },
        plus:function(){
            if(this.currentValue+1>this.max) return;
            this.currentValue+=1;
        },
        handleChange:function(event){
            var val=event.target.value.trim();
            var max=this.max;
            var min=this.min;
            if(isValueNumber(val)){
                val=Number(val);
                this.currentValue=val;
                if(val>max) this.currentValue=max;
                if(val<min) this.currentValue=min;
            }else{
                event.target.value=this.currentValue;
            }
        }
    },
    watch:{
        currentValue:function(val){
            this.$emit('input',val);
            this.$emit('on-change',val);
        },
        value:function(val){
            this.currentValue=val;
        }
    },
    mounted:function(){
        this.updateValue(this.value);
    },
    template:'\
    <div id="container">\
        <input type="text" :value="currentValue" @change="handleChange">\
        <button @click="reduce" :disabled="currentValue<min">-</button>\
        <button @click="plus" :disabled="currentValue>max">+</button>\
    </div>\
    '
})

function  isValueNumber(value){
        return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value+'');
    }