import React, { useMemo } from 'react'
import _ from 'lodash'
import Table from 'src/components/Table'
import { deleteCourse } from 'src/services/courses'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilTrash } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'

const CourseList = ({
  courseData = [],
  GetCoursesData,
  page,
  count,
  pageArray,
  totalPages,
  handlePageChange,
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  setPageSize,
}) => {
  const navigate = useNavigate()

  const destroyCourse = async (id) => {
    const response = await deleteCourse(id)
    window.alert('course deleted successfully')
    GetCoursesData()
  }

  const handleOnPaginationChange = (event = {})
  const updateCourse = async (id) => {
    navigate(`/courses/${id}/edit`)
  }
  //tables
  const tableColumns = [
    {
      Header: 'Course Code',
      accessor: 'courseCode',
    },
    {
      Header: 'Course Title',
      accessor: 'courseTitle',
    },
    {
      Header: 'Credit Hours',
      accessor: 'creditHours',
    },
    // {
    //   Header: "Course Type",
    //   accessor: 'courseType',
    // },
    {
      Header: 'Department ',
      accessor: 'Department.name',
    },
    {
      Header: 'Program',
      accessor: 'Program.name',
    },
    {
      Header: 'Actions',
      accessor: 'actions',
      Cell: (props) => {
        const row = props.row.original
        return (
          <div className="flex justify-start text-lg">
            <span className="cursor-pointer p-2 hover:text-blue-500">
              <CIcon icon={cilPencil} size="l" onClick={() => updateCourse(row.id)} />
            </span>
            <span className="cursor-pointer p-2 hover:text-red-500">
              <CIcon icon={cilTrash} size="l" onClick={() => destroyCourse(row.id)} />
            </span>
          </div>
        )
      },
    },
  ]
  const columnHeaders = _.map(tableColumns, 'Header')
  const cols = useMemo(() => tableColumns, columnHeaders)
  return (
    <Table
      columns={cols}
      data={courseData}
      page={page}
      count={count}
      pageArray={pageArray}
      totalPages={totalPages}
      handlePageChange={handlePageChange}
    />
  )
}
export default CourseList
