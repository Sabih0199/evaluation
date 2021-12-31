import { Row, Col } from "reactstrap"

import { SearchBox } from "../SearchBox"

import { Button } from "../Button"

import "./ActionBar.scss";

const ActionBar = (props) => {
    const { className = "" } = props;
    return (
        <div className={`ev-actionbar ${className}`}>
            <Row>
                <Col lg={8}>
                    <div className="d-flex align-items-center flex-md-row flex-column">
                        <SearchBox />
                        <Button
                            title="Advance Search"
                            secondary={true}
                            size="md"
                            className="mt-md-0 mt-2"
                        />
                    </div>
                </Col>
                <Col lg={4} className="text-center text-lg-end mt-lg-0 mt-2">
                    <Button
                        title="New Organization"
                    />
                </Col>
            </Row>
        </div>
    );
};
export default ActionBar;