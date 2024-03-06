import React from 'react'
import CampsiteCard from './CampsiteCard.js'
import {Col, Row} from 'reactstrap'
import { selectAllCampsites } from './campsitesSlice.js'

const CampsitesList = ({ setCampsiteId }) => {

  const campsites = selectAllCampsites();

  return (
      <Row className='ms-auto'>
        {campsites.map((campsite) => (
            <Col 
            md="5" 
            className='m-4' 
            key={campsite.id}
            onClick={() => setCampsiteId(campsite.id)}
            >
                <CampsiteCard campsite={campsite}/>
            </Col>
        ))}
      </Row>
  )
}

export default CampsitesList
