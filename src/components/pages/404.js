import ErrorMessage from "../errorMessage/ErrorMessage"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";

const Page404 = () => {

    return (
        <div>
            <Helmet>
                <meta name="description" content='Error 404' />
                <title>404</title>
            </Helmet>
            <ErrorMessage />
            <p style={{ 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': 24 }}>Page doesn't exist</p>
            <Link to={'/'} style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': 24, 'marginTop': 30, 'color': '#9f0013' }}>Back to main page</Link>
        </div>
    )
}

export default Page404;