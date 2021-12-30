import { Container, Row, Col } from "reactstrap";

import { ActionBar } from "../../components/ActionBar";

import "./Home.scss";

const Home = () => {
    return (
        <div className="ev-home">
            <Container>
                <Row>
                    <Col xs={12}>
                        <ActionBar />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;