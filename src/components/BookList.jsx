import { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'

import Book from './Book'
import SelectFilter from './SelectFilter'

const BookList = () => {
    const { filteredBooks } = useContext(BooksContext)

    return (
        <div>
            <h2>Lista de Libros</h2>
            <div className='row mb-4 '>
                <SelectFilter />
            </div>
            <div className='row'>
                <p className='text-start'>
                    libros disponibles: <span>{filteredBooks.length}</span>
                </p>
            </div>
            <div className='row'>
                {filteredBooks.length === 0
                    ? 'Sin libros...'
                    : filteredBooks.map(bookObj => (
                          <Book
                              key={bookObj.book.ISBN}
                              books={bookObj.book}
                          />
                      ))}
            </div>
        </div>
    )
}

export default BookList
