import Footer from "../../../Component/Footer/Footer";
import useAnnouncements from "../../../Hooks/useAnnouncements";
import Announcement from "../Announcement";
import Banner from "../Banner";
import Forum from "../Forum";
import Navbar from "../Navbar";

const Home = () => {
    const [announcement] = useAnnouncements();
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            {
                announcement.length > 0 ? (<Announcement></Announcement>)
                    : ("")
            }

            <Forum></Forum>
            <Footer></Footer>
        </div>
    );
};

export default Home;