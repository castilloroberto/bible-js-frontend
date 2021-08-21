export const api = 'https://www.abibliadigital.com.br/api/'
export const books = api+'books'
export const verses = api+'verses/rvr/0/1/2'
export const d = document


export function createBook({name,chapters,testament,author,abbrev}) {


    const book = d.createElement('template')
    book.innerHTML = `
    <div class="card my-2" style="width: 18rem;margin:auto;">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${author}</h6>
            <p class="card-text">Capitulos: ${chapters}</p>
            <a href="#" class="card-link">${abbrev.en}</a>
            <a href="#" class="card-link">Testamento: ${testament}</a>
        </div>
    </div>
    
    `
    return book.content


}