/* eslint-disable react/prop-types */
import { useState, useEffect, createContext, useCallback } from 'react'

export const BooksContext = createContext()

export const BooksContextProvider = ({ children }) => {
    const [library, setLibrary] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    const [selectedReadingList, setSelectedReadingList] = useState([])
    const [selectedFilter, setSelectedFilter] = useState('Todos')

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

    const updateReadingList = (readingList, library) => {
        let readingListStr = readingList.map(book => JSON.stringify(book))
        let updatedLibrary = library.filter(bookObj => !readingListStr.includes(JSON.stringify(bookObj.book)))

        return updatedLibrary
    }

    const selectedBookHandler = book => {
        const newBook = book

        if (!selectedReadingList.includes(newBook)) {
            setSelectedReadingList(oldSelectedBooks => [...oldSelectedBooks, newBook])
        }
    }

    const filterBooks = useCallback(
        genre => {
            const updatedLibrary = updateReadingList(selectedReadingList, library)

            if (genre !== 'Todos') {
                setFilteredBooks(updatedLibrary.filter(books => books.book.genre === genre))
            } else {
                setFilteredBooks(updatedLibrary)
            }
        },
        [selectedReadingList, library]
    )

    const changeFilter = genre => {
        setSelectedFilter(genre)
    }

    useEffect(() => {
        filterBooks(selectedFilter)
    }, [selectedFilter, selectedReadingList, filterBooks])

    return (
        <BooksContext.Provider
            value={{ filteredBooks, selectedReadingList, selectedBookHandler, filterBooks, changeFilter }}>
            {children}
        </BooksContext.Provider>
    )
}
