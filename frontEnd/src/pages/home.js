import Layout from '../components/layout';
import Banner from '../components/banner';
import LocationCard from '../components/locationCard'

export default function Home() {
    const imgHome = "https://cdn.discordapp.com/attachments/1081227920770596865/1116732683737899038/IMG.png";
    const altHome = "bannière verte colline avec ciel nuageux";
    const titleHome = "Chez vous, partout et ailleurs"

    return (
        <Layout>
            <Banner title={titleHome} imgSrc={imgHome} imgAlt={altHome}/>
            <LocationCard />
        </Layout>
    )
}