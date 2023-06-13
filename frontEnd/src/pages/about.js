import Layout from '../components/layout';
import Banner from '../components/banner';

export default function APropos() {
    const imgAPropos = "https://cdn.discordapp.com/attachments/1081227920770596865/1117804366695501924/gustavo-alves-YOXSC4zRcxw-unsplash_1.png";
    const altAPropos = "bannière verte colline avec vue sur montagne";

    return (
        <Layout>
            <Banner imgSrc={imgAPropos} imgAlt={altAPropos} />
        </Layout>
    )
}