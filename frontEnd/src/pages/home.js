import Layout from '../components/layout';
import Banner from '../components/banner';

export default function Home() {
    const imgHome = "https://cdn.discordapp.com/attachments/1081227920770596865/1116732683737899038/IMG.png";
    const altHome = "bannière verte colline avec vue sur montagne";

    return (
        <Layout>
            <Banner imgSrc={imgHome} imgAlt={altHome}/>
        </Layout>
    )
}