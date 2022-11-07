import MainTableHeader from './MainTableHeader/MainTableHeader'
import MainTableBody from './MainTableBody/MainTableBody'
import MainTableFooter from './MainTableFooter/MainTableFooter'
import Table from '../../../../shared/Table/Table'

export default function MainTable() {
  return (
    <>
      <Table>
        <MainTableHeader />
        <MainTableBody />
        <MainTableFooter />
      </Table>
    </>
  )
}
