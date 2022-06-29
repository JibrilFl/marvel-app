import img from './error.png'

const ErrorMessage = () => {
    return (
        // <img src={process.env.PUBLIC_URL + '/error.gif'} />
        <img src={img} alt='Error' style={{ display: 'block', width: 250, height: 250, objectFit: 'contain', margin: '0 auto' }} />
    )
}

export default ErrorMessage;