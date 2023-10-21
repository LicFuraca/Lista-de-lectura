import { BooksContextProvider } from './context/BooksContext'

import ReadingList from './components/ReadingList'
import BookList from './components/BookList'

function App() {
    return (
        <BooksContextProvider>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <BookList />
                    </div>
                    <div className='col-md-4'>
                        <ReadingList />
                    </div>
                </div>
            </div>
        </BooksContextProvider>
    )
}

export default App
