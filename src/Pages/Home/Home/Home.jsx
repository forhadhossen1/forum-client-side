import Footer from "../../../Component/Footer/Footer";
import Announcement from "../Announcement";
import Banner from "../Banner";
import Forum from "../Forum";
import Navbar from "../Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Announcement></Announcement>
            <Forum></Forum>
            <Footer></Footer>
        </div>
    );
};

export default Home;