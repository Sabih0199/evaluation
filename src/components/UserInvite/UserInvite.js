import { Fragment } from "react";

import { UserCard } from "../UserCard"
import { Button } from "../Button"
import { TextInput } from "../TextInput"

import "./UserInvite.scss";

import user1 from "../../../src/assets/images/user-2.png"
import user2 from "../../../src/assets/images/user-3.png"
import user3 from "../../../src/assets/images/user-4.png"
import user4 from "../../../src/assets/images/user-5.png"
import addIcon from "../../../src/assets/images/plus-icon-circle.png"

const UserInvite = (props) => {
    const { className = "" } = props
    return (
        <div className={`ev-user-invite d-flex flex-column justify-content-between ${className}`}>
            <div className="ev-user-invite-top-panel">
                <div className="ev-user-search-holder">
                    <TextInput type="search" placeholder="User Search" name="usersearcj" className="ev-user-search" />
                </div>
                <UserCard name="Steve Banks" email="steve@meliometrics.com" picture={user1} active />
                <UserCard name="Hazel Sahlgren" email="hazel@example.com" picture={user3} />
                <UserCard name="Mason Grayson" email="grayson@example.com" picture={user2} unRead={true} />
                <UserCard name="Cooper Jameson" email="jameson@example.com" picture={user4} />
            </div>
            <Button title={
                <Fragment>
                    <img src={addIcon} className="img-fluid me-2" alt="Add Icon" />
                    Invite user
                </Fragment>
            } className="d-block radius-0 ev-user-invite-btn" />
        </div>
    );
};

export default UserInvite;