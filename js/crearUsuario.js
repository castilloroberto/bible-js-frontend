import { d } from "./constantes.js";

export function crearUsuario() {
    const $form = d.getElementById('form-crear-usuario')
    d.addEventListener('click',({target})=>{

        if (target.matches('nav h4')) {
            $form.hidden = !$form.hidden
        }
    })
}