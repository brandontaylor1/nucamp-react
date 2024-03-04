import React from 'react'
import { CAMPSITES }  from '../../app/shared/CAMPSITES.js'
import CampsiteCard from './CampsiteCard.js'
import {Col, Row} from 'reactstrap'

const CampsitesList = () => {
  return (
      <Row className='ms-auto'>
        {CAMPSITES.map((campsite) => (
            <Col md="5" className='m-4' key={campsite.id}>
                <CampsiteCard campsite={campsite}/>
            </Col>
        ))}
      </Row>
  )
}

export default CampsitesList
