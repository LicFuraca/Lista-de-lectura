/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'

const Book = ({ books: book }) => {
    const { selectedBookHandler } = useContext(BooksContext)

    return (
        <div
            className='card m-2 px-2 '
            style={{ maxWidth: '360px' }}>
            <div className='row g-0 align-items-center'>
                <div className='col-md-4'>
                    <img
                        src={book.cover}
                        className='card-img rounded-start'
                        style={{ maxWidth: '120px' }}
                        alt={book.title}
                        onClick={() => selectedBookHandler(book)}
                    />
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{book.title}</h5>
                        <p className='card-text'>{book.synopsis}</p>
                        <p className='card-text'>
                            <small className='text-body-secondary'>{book.year}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Book
