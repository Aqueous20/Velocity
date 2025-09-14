import React from 'react'
import {DateSelection} from './DateSelection'
import {HoursSelection} from './HoursSelection'
import {LocationSelection} from './LocationSelection'


export const SearchMobile = () => {
  return (
    <div>
      <div className="caontainer mx-auto">
        <div>
          <LocationSelection/>
          <DateSelection/>
          <HoursSelection/>
          <div>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
    
  )
}
