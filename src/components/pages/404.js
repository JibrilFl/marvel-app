import ErrorMessage from "../errorMessage/ErrorMessage"
import { useNavigate } from "react-router-dom"

const Page404 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <ErrorMessage />
            <p style={{ 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': 24 }}>Page doesn't exist</p>
            <a style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': 24, 'marginTop': 30, 'color': '#9f0013' }} onClick={() => navigate(-1)}>Back to main page</a>
        </div>
    )
}

export default Page404;