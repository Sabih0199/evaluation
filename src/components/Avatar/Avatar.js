import "./Avatar.scss";

const Avatar = (props) => {
    const { className = "evw-20 evh-20", url, alt = "" } = props;
    return (
        <div className="ev-avatar">
            <img src={url} className={`objfit-cover rounded-circle img-fluid ${className}`} alt={alt} />
        </div>
    );
};
export default Avatar;