import React from 'react'
import CampsiteCard from './CampsiteCard.js'
import {Col, Row} from 'reactstrap'
import { selectAllCampsites } from './campsitesSlice.js'
import { useSelector } from 'react-redux'
import Error from '../../components/Error.js'
import Loading from '../../components/Loading.js'

const CampsitesList = () => {
  const campsites = useSelector(selectAllCampsites);
  const isLoading = useSelector((state) => state.campsites.isLoading)
  const errMsg = useSelector((state) => state.campsites.errMsg)

  console.log('campsites', campsites)

  if (isLoading) {
      return (
        <Row>
          <Loading />

        </Row>
      )
  }

  if(errMsg) {
    return (
      <Row>
        <Error errMsg={errMsg} />
      </Row>
    )
  }


  return (
      <Row className='ms-auto'>
        {campsites.map((campsite) => (
            <Col 
            md="5" 
            className='m-4' 
            key={campsite.id}
            >
                <CampsiteCard campsite={campsite}/>
            </Col>
        ))}
      </Row>
  )
}

export default CampsitesList
