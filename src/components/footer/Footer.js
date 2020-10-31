import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
// reactstrap components
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

const Footer = ({socials, footerLinks, language}) => {

    const links = footerLinks[language];
    const {vk, insta, gitHub, linkedIn} = socials;

    return (
        <>
            <footer className="footer">
                <Container>
                    <Row>
                        <Col md="3">
                            <h1 className="title">IK</h1>
                        </Col>
                        <Col md="3">
                            <Nav>
                                <NavItem>
                                    <NavLink to="/" tag={Link}>
                                        {`${links.home}`}
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/landing-page" tag={Link}>
                                        {`${links.works}`}
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col md="3">
                            <Nav>
                                <NavItem>
                                    <NavLink href="">
                                        {`${links.contact}`}
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="">
                                        {`${links.about}`}
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col md="3">
                            <h3 className="title">{`${links.follow} :`}</h3>
                            <div className="btn-wrapper profile">
                                <Button
                                    className="btn-icon btn-neutral btn-round btn-simple"
                                    color="default"
                                    href={linkedIn}
                                    id="linkedin"
                                    target="_blank"
                                >
                                    <i className="fab fa-linkedin"/>
                                </Button>
                                <UncontrolledTooltip delay={0} target="linkedin">
                                    {`${links.follow}`}
                                </UncontrolledTooltip>
                                <Button
                                    className="btn-icon btn-neutral btn-round btn-simple"
                                    color="default"
                                    href={insta}
                                    id="inst"
                                    target="_blank"
                                >
                                    <i className="fab fa-instagram"/>
                                </Button>
                                <UncontrolledTooltip delay={0} target="inst">
                                    {`${links.follow}`}
                                </UncontrolledTooltip>
                                <Button
                                    className="btn-icon btn-neutral btn-round btn-simple"
                                    color="default"
                                    href={vk}
                                    id="vk"
                                    target="_blank"
                                >
                                    <i className="fab fa-vk"/>
                                </Button>
                                <UncontrolledTooltip delay={0} target="vk">
                                    {`${links.follow}`}
                                </UncontrolledTooltip>
                                <Button
                                    className="btn-icon btn-neutral btn-round btn-simple"
                                    color="default"
                                    href={gitHub}
                                    id="github"
                                    target="_blank"
                                >
                                    <i className="fab fa-github"/>
                                </Button>
                                <UncontrolledTooltip delay={0} target="github">
                                    {`${links.follow}`}
                                </UncontrolledTooltip>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <Container>
                <Row className='justify-content-center pt-3 pb-3'>
                    ©2020 Author: Ivan Kayn
                </Row>
            </Container>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        footerLinks:  state.footerLinks,
        language: state.language,
        socials: state.socials,
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
