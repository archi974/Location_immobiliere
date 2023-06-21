import Layout from '../components/layout';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <Layout>
            <div className="not-found">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to={`/`}>Retourner sur la page d'accueil</Link>
            </div>
        </Layout>
    )
}