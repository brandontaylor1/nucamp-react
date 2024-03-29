import { Col } from 'reactstrap';

const Error = ({ errMsg }) => {
    return (
        <Col>
            <h1>{errMsg}</h1>
        </Col>
    )
}

export default Error; 