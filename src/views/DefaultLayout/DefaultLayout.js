import "./DefaultLayout.scss";

import { TopNavbar } from "../../components/TopNavbar";
import { Home } from "../Home";

const DefaultLayout = () => {
    return (
        <main id="ev-main" className="ev-default-layout">
            <TopNavbar />
            <div className="ev-content-wrapper">
                <Home />
            </div>
        </main>
    )
};

export default DefaultLayout;