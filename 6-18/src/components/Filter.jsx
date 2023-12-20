import { filterChange } from '../reducers/filterReducer'
import { useDispatch, useSelector } from 'react-redux'

const Filter = () => {
    const dispatch = useDispatch()
    const currentValue = useSelector(state => state.filter.filterValue)
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter <input value={currentValue} onChange={(e) => dispatch(filterChange(e.target.value))}/>
      </div>
    )
  }
  
  export default Filter