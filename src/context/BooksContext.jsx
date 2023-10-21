/* eslint-disable react/prop-types */
import { useState, useEffect, createContext, useCallback } from 'react'

export const BooksContext = createContext()

export const BooksContextProvider = ({ children }) => {
    const [library, setLibrary] = useState([])
    const [selectedReadingList, setSelectedReadingList] = useState([])
    // const [filteredBooks, setFilteredBooks] = useState([])

    const fetchLibrary = useCallback(url => {
        fetch(url)
            .then(res => res.json())
            .then(data => setLibrary(Object.values(data.library)))
            .catch(error => console.log('Error al cargar JSON', error))
    }, [])

    useEffect(() => {
        fetchLibrary('../../books.json')
    }, [fetchLibrary])

    const selectedBookHandler = book => {
        const newBook = book.cover

        if (!selectedReadingList.includes(newBook)) {
            setSelectedReadingList(oldSelectedBooks => [...oldSelectedBooks, newBook])
        }
    }

    // const filterBooks = (genre = 'Todos', books = library) => {
    //     genre === 'Todos'
    //         ? setFilteredBooks(books)
    //         : books.filter(bookObj => setFilteredBooks(bookObj.book.genre === genre))
    // }

    return (
        <BooksContext.Provider value={{ library, selectedReadingList, selectedBookHandler }}>
            {children}
        </BooksContext.Provider>
    )
}
