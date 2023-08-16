import { CButton, CCard, CCardBody } from '@coreui/react'
import React from 'react'

const Export = () => {
  return (
    <div>
      <CCard>
        <div className="d-flex justify-content-between align-items-center p-3 pb-0">
          <h5 className="m-0">Export Data</h5>
          <CButton>Export</CButton>
        </div>
        <div>
          <CCardBody className="d-flex justify-content-between"></CCardBody>
        </div>
      </CCard>
    </div>
  )
}

export default Export
