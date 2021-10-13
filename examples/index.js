import HButton from './button/button.vue'
import HInput from './input/input.vue'
import HTable from './table/table.vue'

const components = [HButton,HInput,HTable]
export default{
    install:(app,options)=>{
        components.forEach((item)=>{
            app.component(item.name,item)
        }) 
    }
}