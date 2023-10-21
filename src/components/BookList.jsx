import { useContext, useState } from 'react'
import { BooksContext } from '../context/BooksContext'

import Book from './Book'

const BookList = () => {
    const [filter, setFilter] = useState('Todos')
    const { selectedBookHandler, library } = useContext(BooksContext)

    const genders = ['Todos', 'Fantasía', 'Terror', 'Ciencia ficción', 'Zombies']

    const books = library

    const filterBooks = (genre, books) => {
        // genre === 'Todos'
        //     ? setFilteredBooks(books)
        //     : books.filter(bookObj => setFilteredBooks(bookObj.book.genre === genre))
    }

    return (
        <>
            <h2>Lista de Libros</h2>
            <div className='col-md-3'>
                <select
                    name='gender'
                    id='gender'
                    onChange={() => () => setFilteredBooks}>
                    {genders.map((gender, index) => (
                        <option
                            key={index}
                            value={gender}>
                            {gender}
                        </option>
                    ))}
                </select>
            </div>
            <div className='row'>
                {filteredBooks.map(bookObj => (
                    <Book
                        key={bookObj.book.ISBN}
                        books={bookObj.book}
                        onSelectedBookHandler={selectedBookHandler}
                    />
                ))}
            </div>
        </>
    )
}
export default BookList
