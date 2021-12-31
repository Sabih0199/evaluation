import { Fragment } from "react";

import { Container, Row, Col } from "reactstrap";

import { ActionBar } from "../../components/ActionBar";

import { About } from "../../components/About";

import { TabsPanel } from "../../components/TabsPanel"

import "./Home.scss";

const Home = () => {
    return (
        <div className="ev-home">
            <Container>
                <Row>
                    <Col xs={12}>
                        <ActionBar />
                        <About
                            title="About Organization"
                            children={
                                <Fragment>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <span className="clr-primary">Read More</span>
                                </Fragment>
                            }
                        />
                        <TabsPanel />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;