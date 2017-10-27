import { toggleSortOrder, changeSortBy } from './module'
import CamperList from '../../components/CamperList'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  sortBy: state.camperSorter.sortBy,
})

export default connect(mapStateToProps, {
  changeSortBy,
})(CamperList)
