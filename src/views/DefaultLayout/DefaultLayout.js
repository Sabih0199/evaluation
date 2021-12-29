import "./DefaultLayout.scss";

import { TopNavbar } from "../../components/TopNavbar";

const DefaultLayout = () => {
    return (
        <main id="sv-main" className="ev-default-layout">
            <TopNavbar />
            <div className="ev-content-wrapper">
            </div>
        </main>
    )
};

export default DefaultLayout;