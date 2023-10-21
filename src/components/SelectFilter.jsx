import { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'

const SelectFilter = () => {
    const { filterBooks } = useContext(BooksContext)
    const genders = ['Todos', 'Fantasía', 'Terror', 'Ciencia ficción', 'Zombies']

    return (
        <div className='col-md-3'>
            <select
                name='gender'
                id='gender'
                onChange={() => filterBooks(event.target.value)}>
                {genders.map((gender, index) => (
                    <option
                        key={index}
                        value={gender}>
                        {gender}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default SelectFilter
