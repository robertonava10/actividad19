const app = Vue.createApp({})

    app.component('foco',{
        props: ['cuarto'],
        data: () => {
            return{
                status: 0
            }
        },
        template:`
        <img :src="status ? 'focoOn.png' : 'focoOff.png'" @click = "status = !status">
        <p>{{cuarto}}</p>
        `
    })


const vm = app.mount('#app')
