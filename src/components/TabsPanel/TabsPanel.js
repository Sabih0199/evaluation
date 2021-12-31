import { useState } from "react";

import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from "reactstrap"

import { UserInvite } from "../UserInvite"

import "./TabsPanel.scss";

const TabsPanel = (props) => {
    const [tabMain, setTabMain] = useState('1');
    const [tabInner, setTabInner] = useState('1');
    const { className = "" } = props
    return (
        <div className={`ev-tabspanel ${className}`}>
            <Nav tabs>
                <NavItem>
                    <NavLink className={tabMain === '1' ? 'active' : ''} onClick={() => setTabMain('1')}>
                        Basic information
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={tabMain === '2' ? 'active' : ''} onClick={() => setTabMain('2')}>
                        Users
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={tabMain === '3' ? 'active' : ''} onClick={() => setTabMain('3')}>
                        Notes
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={tabMain}>
                <TabPane tabId="1">Tab 1 Content</TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col lg={4} className="mt-4" >
                            <UserInvite />
                        </Col>
                        <Col lg={8} className="mt-4">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink className={tabInner === '1' ? 'active' : ''} onClick={() => setTabInner('1')}>
                                        User details
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={tabInner === '2' ? 'active' : ''} onClick={() => setTabInner('2')}>
                                        Roles
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={tabInner === '3' ? 'active' : ''} onClick={() => setTabInner('3')}>
                                        Other association
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={tabInner}>
                                <TabPane tabId="1">User details Content</TabPane>
                                <TabPane tabId="2">
                                    User Drag &amp; Drop
                                </TabPane>
                                <TabPane tabId="3">Roles Content</TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">Tab 3 Content</TabPane>
            </TabContent>
        </div>
    );
};

export default TabsPanel;