import { ClipLoader } from 'react-spinners';
import './Spinner.css'; // Import spinner styles

const Spinner = () => (
    <div className="spinner-container">
        <ClipLoader color="#3498db" size={60} />
    </div>
);

export default Spinner;
