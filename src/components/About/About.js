import "./About.scss";

const About = (props) => {
    const { className = "", title, children } = props
    return (
        <div className={`ev-about ${className}`}>
            <div className="ev-about-header fw-bold text-white">{title}</div>
            <div className="ev-about-content">{children}</div>
        </div>
    );
};

export default About;