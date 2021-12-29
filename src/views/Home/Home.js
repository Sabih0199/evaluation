import { Container, Row, Col } from "reactstrap";

import "./Home.scss";

// import { TodoItem } from "../../components/TodoItem";

// import PlusIcon from "../../components/SvgIcon/PlusIcon";

const Home = () => {
    return (
        <div className="evl-home">
            <Container>
                <Row>
                    <Col xs={12}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;