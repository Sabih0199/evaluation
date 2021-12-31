import { Collapse } from "reactstrap";

import "./AccordionTab.scss";

import arrowThick from "../../assets/images/arrow-thick.png"

const AccordionTab = (props) => {
    const {
        isOpen,
        title,
        content,
        onClick = () => { },
        className = "",
        counter
    } = props;
    return (
        <div className={`ev-accordion-tab ${className} ${isOpen ? "active" : ""}`}>
            <div
                className="ev-accordion-tab-header d-flex align-items-center"
                onClick={onClick}
            >
                <div className="ev-accordion-counter fw-bold text-white d-flex align-items-center justify-content-center">
                    {counter}
                </div>
                <div className="ev-accordion-tab-title fw-bold">
                    {title}
                </div>
                {isOpen ?
                    ""
                    : <img src={arrowThick} className="img-fluid ms-auto" />}
            </div>
            <Collapse isOpen={isOpen}>
                <div className="ev-accordion-tab-content">{content}</div>
            </Collapse>
        </div>
    );
};
export default AccordionTab;