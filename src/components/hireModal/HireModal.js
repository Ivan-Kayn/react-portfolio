import React from 'react';
import {connect} from 'react-redux';
import {
    Button,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Modal,
} from "reactstrap";
import classnames from "classnames";
import {onEmailFocus, toggleHireModal} from "../../actions";

const HireModal = ({hireModal, toggleHireModal, onEmailFocus, language, emailFocus, hireModalData}) => {

    const {header, label, number, email, button} = hireModalData[language];

    return (
        <>
            <Modal
                modalClassName="modal-black"
                isOpen={hireModal}
                toggle={() => toggleHireModal()}
            >
                <div className="modal-header justify-content-center">
                    <button
                        className="close"
                        onClick={() => toggleHireModal()}
                    >
                        <i className="tim-icons icon-simple-remove text-white"/>
                    </button>
                    <div className="text-muted text-center ml-auto mr-auto">
                        <h3 className="mb-0">{`${header}`}</h3>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="btn-wrapper text-center">
                        <Button
                            className="btn-neutral btn-icon"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            <i className='fab fa-github'/>
                        </Button>
                        <Button
                            className="btn-neutral btn-icon"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            <i className='fab fa-linkedin'/>
                        </Button>
                        <Button
                            className="btn-neutral btn-icon"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            <i className='fab fa-instagram'/>
                        </Button>
                        <Button
                            className="btn-neutral btn-icon"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            <i className='fab fa-vk'/>
                        </Button>
                    </div>
                    <div className="text-center text-muted mb-4 mt-3">
                        <small>{`${label}`}</small>
                        <p>{`${number}`}</p>
                        <p>{`${email}`}</p>
                    </div>
                    <Form role="form">
                        <FormGroup className="mb-3">
                            <InputGroup
                                className={classnames("input-group-alternative", {
                                    "input-group-focus": emailFocus
                                })}
                            >
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="tim-icons icon-email-85"/>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    onFocus={e => onEmailFocus()}
                                    onBlur={e => onEmailFocus()}
                                    autoComplete="off"
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup
                            >
                                <Input placeholder="Type your request" type="textarea" name="success" id="success"
                                       defaultValue=""/>
                            </InputGroup>
                        </FormGroup>

                        <div className="text-center">
                            <Button className="my-4" color="primary" type="button">
                                {`${button}`}
                            </Button>
                        </div>
                    </Form>
                </div>
            </Modal>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        hireModal: state.hireModal,
        emailFocus: state.emailFocus,
        hireModalData: state.hireModalData,
        language: state.language,
    }
}

const mapDispatchToProps = {
    toggleHireModal: toggleHireModal,
    onEmailFocus: onEmailFocus,
}

export default connect(mapStateToProps, mapDispatchToProps)(HireModal);