import { Col, Row } from 'reactstrap';
//import DisplayCard from './DisplayCard'
import { useSelector } from 'react-redux';
import AnimatedDisplayCard from './AnimatedCardDisplay';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice'

import Loading from '../../components/Loading';
import Error from '../../components/Error';


const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedCampsite(state), 
        selectFeaturedPromotion(state), 
        selectFeaturedPartner(state)
    ]);

    console.log('display items', items)

    return (
        <Row>
            {items.map((item, idx) => {
                const {featuredItem, isLoading, errMsg} = item;
                if(isLoading) {
                    return <Loading key={idx} />
                }
                if(errMsg) {
                    return <Error key={idx} errMsg={errMsg} />
                }
                return (
                    featuredItem && (
                    <Col md className='m-1' key={idx}>
                        <AnimatedDisplayCard item={featuredItem} />
                    </Col>
                    )
                )
            })}
        </Row>
    )

}


export default DisplayList; 