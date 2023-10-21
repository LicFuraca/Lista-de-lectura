import { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'

const SelectFilter = () => {
    const { changeFilter } = useContext(BooksContext)
    const genders = ['Todos', 'Fantasía', 'Terror', 'Ciencia ficción', 'Zombies']

    const handleFilterChange = event => {
        changeFilter(event.target.value)
    }

    return (
        <div className='col-md-4'>
            <select
                name='gender'
                id='gender'
                onChange={handleFilterChange}>
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
