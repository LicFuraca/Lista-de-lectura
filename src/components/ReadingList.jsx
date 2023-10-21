import { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'

/* eslint-disable react/prop-types */
const ReadingList = () => {
    const { selectedReadingList } = useContext(BooksContext)

    return (
        <>
            <h2 className='mb-4'>Lista de lectura</h2>
            <div className='card'>
                <div className='card-body mx-auto'>
                    {selectedReadingList.length === 0
                        ? 'sin libros en la lista...'
                        : selectedReadingList.map(book => (
                              <img
                                  key={book}
                                  src={book}
                                  className='card-img m-1'
                                  style={{ maxWidth: '99px' }}
                              />
                          ))}
                </div>
            </div>
        </>
    )
}
export default ReadingList
