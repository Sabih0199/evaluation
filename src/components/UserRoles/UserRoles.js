import { Fragment, useState } from "react";

import { Button } from "../Button";
import { AccordionTab } from "../AccordionTab";

import "./UserRoles.scss";

import arrow from "../../../src/assets/images/arrow.png"
import info from "../../../src/assets/images/info-icon.png"

const UserRoles = (props) => {

    const [toggleAccordion, setToggleAccordion] = useState(false);

    const { className = "", } = props
    return (
        <div className={`ev-user-roles d-flex flex-column justify-content-between ${className}`}>
            <div className="d-flex justify-content-between ev-user-roles-top-panel">
                <div className="ev-user-roles-wrap">
                    <div className="ev-user-roles-header fw-bold text-center">
                        Available Roles
                    </div>
                    <AccordionTab
                        title="Static Data (MM only)"
                        content={
                            <Fragment>
                                <div className="mb-2">
                                    <img src={info} className="img-fluid ev-arrow-left" alt="" />
                                    View Data
                                </div>
                                <div className="mb-2">
                                    <img src={info} className="img-fluid ev-arrow-left" alt="" />
                                    Manage Data
                                </div>
                                <div className="mb-2">
                                    <img src={info} className="img-fluid ev-arrow-left" alt="" />
                                    View Data
                                </div>
                                <div>
                                    <img src={info} className="img-fluid ev-arrow-left" alt="" />
                                    Manage Data
                                </div>
                            </Fragment>
                        }
                        counter="4"
                        isOpen={true}
                    />
                    <AccordionTab
                        title="Organisations (MM only)"
                        counter="2"
                        onClick={() => {
                            setToggleAccordion(!toggleAccordion)
                        }}
                        isOpen={toggleAccordion}
                        content={
                            <Fragment>
                                <div className="mb-2">
                                    <img src={info} className="img-fluid ev-arrow-left" alt="" />
                                    View Data
                                </div>
                                <div className="mb-2">
                                    <img src={info} className="img-fluid ev-arrow-left" alt="" />
                                    Manage Data
                                </div>
                                <div className="mb-2">
                                    <img src={info} className="img-fluid ev-arrow-left" alt="" />
                                    View Data
                                </div>
                                <div>
                                    <img src={info} className="img-fluid ev-arrow-left" alt="" />
                                    Manage Data
                                </div>
                            </Fragment>
                        }
                    />
                    <AccordionTab
                        title="Users"
                        counter="3"
                    />
                    <AccordionTab
                        title="Question Creation (MM only)"
                        counter="2"
                    />
                    <AccordionTab
                        title="Question Creation"
                        counter="2"
                    />
                </div>
                <div className="align-self-center d-flex flex-column">
                    <Button title={
                        <Fragment>
                            Assign <img src={arrow} className="img-fluid" />
                        </Fragment>
                    }
                        size="sm"
                    />
                    <Button title={
                        <Fragment>
                            <img src={arrow} className="img-fluid ev-arrow-left" /> Rescind
                        </Fragment>
                    }
                        size="sm"
                        disabled={true}
                        className="mt-3"
                    />
                </div>
                <div className="ev-user-roles-wrap">
                    <div className="ev-user-roles-header bg-clr-inverse fw-bold text-center">
                        Available Roles
                    </div>
                    <AccordionTab
                        title="Static Data (MM only)"
                        content={
                            <Fragment>
                                <div className="mb-2">
                                    <img src={info} className="img-fluid ev-arrow-left" alt="" />
                                    View Data
                                </div>
                                <div className="mb-2">
                                    <img src={info} className="img-fluid ev-arrow-left" alt="" />
                                    Manage Data
                                </div>
                            </Fragment>
                        }
                        counter="4"
                        isOpen={true}
                    />
                    <AccordionTab
                        title="Organisations (MM only)"
                        counter="2"
                    />
                    <AccordionTab
                        title="Users"
                        counter="3"
                    />
                    <AccordionTab
                        title="Question Creation (MM only)"
                        counter="2"
                    />
                    <AccordionTab
                        title="Question Creation"
                        counter="2"
                    />
                </div>
            </div>
            <div className="ev-user-roles-actions d-flex align-items-center justify-content-end">
                <Button title="Cancel"
                    size="md"
                    secondary={true}
                />
                <Button title="Update"
                    size="md"
                />
            </div>
        </div >
    );
};

export default UserRoles;