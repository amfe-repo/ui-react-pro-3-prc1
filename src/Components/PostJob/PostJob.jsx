import Navbar from '../Navbar/Navbar';

const PostJob = (props) => {
    return (
        <div className="container-fluid p-0">
            <Navbar></Navbar>
            <div className="container container-info-job">
                <div className="fw-bold fs-3">[Nombre POST]</div>
                <div className="fs-4">[Ubicacion]</div>

                <hr/>
                <span className="fs-5">[Position]</span> - <span className="fs-5">[Schedule]</span>
                <hr/>

                <p className="fs-5">[Decription]</p>

                <span className="fs-6"><em>How to apply?</em></span>

                <p className="fs-6">Send your resume to <span className="fw-bold">[email]</span> at <span className="fw-bold">[URL]</span></p>
            </div>
        </div>
    )
}

export default PostJob;
