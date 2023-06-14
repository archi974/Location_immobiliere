import Layout from '../components/layout';
import Collapse from '../components/collapse';

export default function About() {
    const imgAPropos = "https://cdn.discordapp.com/attachments/1081227920770596865/1117804366695501924/gustavo-alves-YOXSC4zRcxw-unsplash_1.png";
    const altAPropos = "bannière verte colline avec vue sur montagne";

    return (
        <Layout>
            <div className="about">
                <img src={imgAPropos} alt={altAPropos} />
                <div className="collapse">
                    <Collapse title="Fiabilité">
                        <p>Les annonces sur Kasa sont réputées pour leur fiabilité absolue. Les photos des logements sont fidèles à la réalité, et toutes les informations sont vérifiées régulièrement par nos équipes afin de garantir leur exactitude.</p>
                    </Collapse>
                    <Collapse title="Respect">
                        <p>Chez Kasa, la bienveillance est primordiale. Toute forme de discrimination ou de perturbation du voisinage entraînera l'exclusion de notre plateforme.</p>
                    </Collapse>
                    <Collapse title="Service">
                        <p>Notre équipe est là pour vous offrir une expérience parfaite. N'hésitez pas à nous contacter pour toute question.</p>
                    </Collapse>
                    <Collapse title="Sécurité">
                        <p>La sécurité est notre priorité chez Kasa. Chaque logement respecte nos critères de sécurité, et les notes laissées par les utilisateurs nous aident à vérifier leur conformité. Nous proposons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </Collapse>
                </div>
            </div>
        </Layout>
    )
}