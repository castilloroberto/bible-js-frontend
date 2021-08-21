import { d } from "./constantes.js";


export function search() {
    let datos = []
    d.addEventListener('keyup',({target}) => {
            
            
        if (target.matches('[name="search"]')) {
            console.log(target.value);
            if (target.value.includes(" ")) {
                
                datos = target.value.trim().split(' ')

                console.log('Espacio');
                
                console.log(datos);
            }
        }
    })
    console.log(datos);
} 
