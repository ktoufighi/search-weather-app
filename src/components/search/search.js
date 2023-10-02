import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoApiOptions } from '../../api'

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null)

  const loadOptions = async (inputQuery) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputQuery}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        /* fixed the error: [react-select-async-paginate] response of "loadOptions" should be an object with "options" prop, which contains array of options. */
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }
          }),
        }
      })
      .catch((err) => console.log(err))
  }

  const handleSearch = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }
  return (
    <AsyncPaginate
      placeholder='Search by city'
      debounceTimeout={600}
      value={search}
      onChange={handleSearch}
      loadOptions={loadOptions}
    />
  )
}

export default Search
