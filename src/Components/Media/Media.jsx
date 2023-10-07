import Reports from './Reports/ReportContainer.jsx'
import Newsletter from './Newletter/Newsletter.jsx'  
import './Media.css'

export default function Media() {
    document.title = "GYWS - Media";

    return (
        <>
            <div className="media_container">
                <Reports />
                <Newsletter />
            </div>
        </>
    )
}