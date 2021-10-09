import hButton from './button/button.vue'
import hInput from './input/input.vue'

const components = [hButton,hInput]
export default{
    install:(app,options)=>{
        components.forEach((item)=>{
            app.component(item.name,item)
        }) 
    }
}