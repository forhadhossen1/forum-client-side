import Footer from "../../../Component/Footer/Footer";
import Announcement from "../Announcement";
import Banner from "../Banner";
import Navbar from "../Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Announcement></Announcement>
            <Footer></Footer>
        </div>
    );
};

export default Home;