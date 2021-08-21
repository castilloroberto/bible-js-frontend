import { d } from "./constantes.js";
import { crearUsuario } from "./crearUsuario.js";
import { displayBooks } from "./displayBooks.js";
import { search } from "./search.js";




d.addEventListener('DOMContentLoaded',()=>{
    
    crearUsuario()
    displayBooks()
    search()
    d.addEventListener('submit', e => {
        
        if (e.target.matches('#form-search')) {
            e.preventDefault()
            console.log('submit form');
            
        }
    })
    
})