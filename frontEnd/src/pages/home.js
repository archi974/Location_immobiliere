import Layout from '../components/layout';
import './scss/home.css';

export default function Home() {
    return (
        <Layout>
            <div className="banner">
                <h1>Chez vous, partout et ailleurs</h1>
                <img className="bannerImg" src="https://cdn.discordapp.com/attachments/1081227920770596865/1116739204068691968/IMG_1.jpg" alt="bannière"></img>
            </div>
        </Layout>
    )
}