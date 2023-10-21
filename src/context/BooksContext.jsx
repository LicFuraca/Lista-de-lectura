/* eslint-disable react/prop-types */
import { useState, useEffect, createContext, useCallback } from 'react'

export const BooksContext = createContext()

export const BooksContextProvider = ({ children }) => {
    const [library, setLibrary] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    const [selectedReadingList, setSelectedReadingList] = useState([])

    const fetchLibrary = useCallback(url => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const library = Object.values(data.library)
                setLibrary(library)
                setFilteredBooks(library)
            })
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

    const filterBooks = genre => {
        if (genre !== 'Todos') {
            const newFilteredBooks = library.filter(books => books.book.genre === genre)

            if (newFilteredBooks.length > 0) setFilteredBooks(newFilteredBooks)
        } else {
            setFilteredBooks(library)
        }
    }

    return (
        <BooksContext.Provider value={{ filteredBooks, selectedReadingList, selectedBookHandler, filterBooks }}>
            {children}
        </BooksContext.Provider>
    )
}
