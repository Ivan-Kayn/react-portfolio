import React from 'react';
import {connect} from "react-redux";
import {
    Button,
    Modal,
} from "reactstrap";
import {toggleModal} from "../../actions";

const styles = {
    color: '#fff',
    textDecoration: 'none',
    textTransform: 'uppercase'
}

const ProjectsModal = (props) => {

    const {toggleModal, formModal, selectedProjectId, allProjects} = props;

    const project = allProjects.find(item => item.id === selectedProjectId);

    return (
        <>
            <Modal
                modalClassName="modal-black"
                isOpen={formModal}
                toggle={() => toggleModal()}

            >
                <div className="modal-header justify-content-center">
                    <button
                        className="close"
                        onClick={() => toggleModal()}
                    >
                        <i className="tim-icons icon-simple-remove text-white"/>
                    </button>
                    <div className="text-muted text-center ml-auto mr-auto">
                        <h4 className="mb-0">{project.title}</h4>
                    </div>
                </div>
                <div className="modal-body mt-0 pt-0">

                    <img
                        alt="..."
                        className="img-fluid rounded"
                        src={process.env.PUBLIC_URL + project.iconLink}
                        style={{}}
                    />

                    <blockquote className='mr-2 ml-2'>
                        <p className="blockquote blockquote-info">
                            This is {project.for}. {project.description}
                        </p>
                    </blockquote>

                    <div className="btn-wrapper text-center">
                        <Button color="primary"><a target='_blank' rel="noopener norefereer" style={styles} href={process.env.PUBLIC_URL + project.link}>try it</a></Button>
                    </div>
                </div>
            </Modal>
            {/* End Form Modal */}
        </>
    );

}

const mapStateToProps = (state) => {
    return {
        allProjects: state.allProjects,
        selectedProjectId: state.selectedProjectId,
        formModal: state.formModal,
    }
}

const mapDispatchToProps = {
    toggleModal: toggleModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsModal);

