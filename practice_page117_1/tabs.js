Vue.component('tabs',{
    template:
    '<div id="container">666\
       <div v-for="{pane,index} in navList">\
          <pane :paneName="pane.paneName" :paneContext="pane.paneContext"></pane>\
       </div>\
    </div>',
    data:function(){
        return {
            navList:[
                {
                    paneName:'标签一',
                    paneContext:'内容一'
                },
                {
                    paneName:'标签二',
                    paneContext:'内容二'
                },
                {
                    paneName:'标签三',
                    paneContext:'内容三'
                }
            ]
        }
    }
})