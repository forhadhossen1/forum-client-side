import Footer from "../../../Component/Footer/Footer";
import useAnnouncements from "../../../Hooks/useAnnouncements";
import Announcement from "../Announcement";
import Banner from "../Banner";
import Forum from "../Forum";

const Home = () => {
    const [announcement] = useAnnouncements();
    return (
        <div>
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