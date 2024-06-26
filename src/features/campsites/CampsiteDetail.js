import { Card, CardImg, CardText, CardBody, Col} from 'reactstrap';
import Error from '../../components/Error.js'
import Loading from '../../components/Loading.js'
let content = null; 

const CampsiteDetail = ({campsite}) => {
    const { image, name, description } = campsite
    
    return (
        <Col md='5' className='md-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default CampsiteDetail