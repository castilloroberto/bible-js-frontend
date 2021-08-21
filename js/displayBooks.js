import { books, createBook, d } from "./constantes.js";

export async function displayBooks() {
    const $container = d.querySelector('.container')
    const fragment = d.createDocumentFragment()
    let arrayRes = []
    try {
        
        let res = await fetch(books)
        arrayRes = await res.json()
        console.log(res);
    
        
    } catch (error) {
        console.error('error: ',error);
        arrayRes = []
    }
    arrayRes.forEach( e => {
    
    
        fragment.append(createBook(e))
        
    })
    $container.append(fragment)
}