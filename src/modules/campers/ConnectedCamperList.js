import { toggleSortOrder, changeSortBy } from './module'
import CamperList from '../../components/CamperList'
import { connect } from 'react-redux'

// takes in redux state and returns props ("view Model")
const mapStateToProps = state => ({
  sortBy: state.camperSorter.sortBy,
  asc: state.camperSorter.asc,
  campers: state.camperSorter.campers,
})

export default connect(mapStateToProps, {
  changeSortBy,
})(CamperList)
