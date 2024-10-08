import { stringPattern } from "../constants/stringPattern";

export default function createAuthor(name, id, email,authors) {

    const normalizedNewAuthor = stringPattern(name);
    const duplicatedAuthor = authors.find(a => stringPattern(a.name) === normalizedNewAuthor);
    
    if (duplicatedAuthor) {
        alert('Autor já cadastrado');
        return false
    } else {
         authors.push({
            id,
            name,
            email
        });
        localStorage.setItem('authors', JSON.stringify(authors));
        return true
    }
}
