Vue.component('pane',{
    template:
    '<div :name="paneName" >\
        {{paneContext}}\
    </div>',
    props:['paneName','paneContext']
})