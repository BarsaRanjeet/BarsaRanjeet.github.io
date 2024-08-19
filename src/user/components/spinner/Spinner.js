import { Spinner } from 'react-bootstrap'
import './Spinner.css'

const SpinnerAnimation = () => {
    return <div className='loading'>
        <Spinner animation='border' variant='light' content='center'/>
    </div>
    
}

export default SpinnerAnimation