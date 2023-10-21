import { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'

import Book from './Book'
import SelectFilter from './SelectFilter'

const BookList = () => {
    const { filteredBooks } = useContext(BooksContext)

    return (
        <>
            <h2>Lista de Libros</h2>
            <div className='row mb-4'>
                <SelectFilter />
            </div>
            <div className='row'>
                {filteredBooks.length === 0
                    ? 'Cargando libros...'
                    : filteredBooks.map(bookObj => (
                          <Book
                              key={bookObj.book.ISBN}
                              books={bookObj.book}
                          />
                      ))}
            </div>
        </>
    )
}

export default BookList
