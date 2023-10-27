/* eslint-disable react/prop-types */
import { useState, useEffect, createContext, useCallback } from 'react'

export const BooksContext = createContext()

export const BooksContextProvider = ({ children }) => {
    const [library, setLibrary] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    const [selectedReadingList, setSelectedReadingList] = useState([])
    const [selectedFilter, setSelectedFilter] = useState('Todos')

    const fetchLibrary = useCallback(url => {
        const storedLibrary = localStorage.getItem('library')

        if (storedLibrary) {
            setLibrary(JSON.parse(storedLibrary))
            setFilteredBooks(JSON.parse(storedLibrary))
        } else {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    const libraryData = Object.values(data.library)
                    setLibrary(libraryData)
                    localStorage.setItem('library', JSON.stringify(libraryData))
                })
                .catch(error => console.log('Error al cargar JSON', error))
        }
    }, [])

    useEffect(() => {
        fetchLibrary('../../books.json')
    }, [fetchLibrary])

    const updateReadingList = (readingList, bookList) => {
        let readingListStr = readingList.map(book => JSON.stringify(book))
        let updatedLists = bookList.filter(bookObj => !readingListStr.includes(JSON.stringify(bookObj.book)))

        return updatedLists
    }

    const selectedBookHandler = clickedBook => {
        const newBook = clickedBook

        if (!selectedReadingList.includes(newBook)) {
            setSelectedReadingList(oldSelectedBooks => [...oldSelectedBooks, newBook])
        }
    }

    const filterBooks = useCallback(
        genre => {
            const updatedLists = updateReadingList(selectedReadingList, library)

            if (genre !== 'Todos') {
                setFilteredBooks(updatedLists.filter(books => books.book.genre === genre))
            } else {
                setFilteredBooks(updatedLists)
            }
        },
        [selectedReadingList, library]
    )

    const changeFilter = genre => {
        setSelectedFilter(genre)
    }

    useEffect(() => {
        filterBooks(selectedFilter)
    }, [selectedFilter, filterBooks])

    return (
        <BooksContext.Provider
            value={{
                filteredBooks,
                selectedReadingList,
                selectedBookHandler,
                filterBooks,
                changeFilter,
            }}>
            {children}
        </BooksContext.Provider>
    )
}
