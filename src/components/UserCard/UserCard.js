import { Avatar } from "../Avatar"

import "./UserCard.scss";

import envelop from "../../../src/assets/images/envelop.png"

const UserCard = (props) => {
    const { className = "", picture, name, email, unRead = false, active = "" } = props
    return (
        <div className={`ev-user-card d-flex align-items-center ${className} ${active && "active"}`}>
            <div className="ev-user-img">
                <Avatar url={picture} className="evw-48 evh-48" />
            </div>
            <div className="ev-user-details">
                <div className="ev-user-name fw-bold">{name}</div>
                <div className="ev-user-email">{email}</div>
            </div>
            {unRead && (
                <img src={envelop} className="img-fluid envelop-icon ms-auto" alt="envelop" />
            )}
        </div>
    );
};

export default UserCard;