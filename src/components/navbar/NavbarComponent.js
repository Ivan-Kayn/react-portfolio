import React from "react";
import {Link} from "react-router-dom";
// reactstrap components
import {
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";
import {connect} from 'react-redux';
import HireModal from "../hireModal/HireModal";
import {toggleHireModal} from "../../actions";
import SelectMenu from "../selectMenu/SelectMenu";


class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseOpen: false,
            color: "navbar-transparent",
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.changeColor);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.changeColor);
    }

    changeColor = () => {
        if (
            document.documentElement.scrollTop > 99 ||
            document.body.scrollTop > 99
        ) {
            this.setState({
                color: "bg-info"
            });
        } else if (
            document.documentElement.scrollTop < 100 ||
            document.body.scrollTop < 100
        ) {
            this.setState({
                color: "navbar-transparent"
            });
        }
    };


    toggleCollapse = () => {
        document.documentElement.classList.toggle("nav-open");
        this.setState({
            collapseOpen: !this.state.collapseOpen
        });
    };
    onCollapseExiting = () => {
        this.setState({
            collapseOut: "collapsing-out"
        });
    };
    onCollapseExited = () => {
        this.setState({
            collapseOut: ""
        });
    };

    render() {

        const {home, works, hire} = this.props.navbarData[this.props.language];
        const {vk, insta, linkedIn, gitHub} = this.props.socials;

        return (
            <>
                <Navbar
                    className={"fixed-top " + this.state.color}
                    color-on-scroll="100"
                    expand="lg"
                >
                    <Container>
                        <div className="navbar-translate">
                            <NavbarBrand
                                to="/"
                                tag={Link}
                                id="navbar-brand"
                            >
                                <span>IK</span>
                            </NavbarBrand>
                            <UncontrolledTooltip placement="bottom" target="navbar-brand">
                                My Portfolio
                            </UncontrolledTooltip>
                            <button
                                aria-expanded={this.state.collapseOpen}
                                className="navbar-toggler navbar-toggler"
                                onClick={this.toggleCollapse}
                            >
                                <span className="navbar-toggler-bar bar1"/>
                                <span className="navbar-toggler-bar bar2"/>
                                <span className="navbar-toggler-bar bar3"/>
                            </button>
                        </div>
                        <Collapse
                            className={"justify-content-end " + this.state.collapseOut}
                            navbar
                            isOpen={this.state.collapseOpen}
                            onExiting={this.onCollapseExiting}
                            onExited={this.onCollapseExited}
                        >
                            <div className="navbar-collapse-header">
                                <Row>
                                    <Col className="collapse-brand" xs="6">
                                        <span>
                                            IK
                                        </span>
                                    </Col>
                                    <Col className="collapse-close text-right" xs="6">
                                        <button
                                            aria-expanded={this.state.collapseOpen}
                                            className="navbar-toggler"
                                            onClick={this.toggleCollapse}
                                        >
                                            <i className="tim-icons icon-simple-remove"/>
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                            <Nav navbar>
                                <NavItem className="p-0">
                                    <NavLink
                                        data-placement="bottom"
                                        href={linkedIn}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        title="Contact me"
                                    >
                                        <i className="fab fa-linkedin"/>
                                        <p className="d-lg-none d-xl-none">LinkedIn</p>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="p-0">
                                    <NavLink
                                        data-placement="bottom"
                                        href={vk}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        title="Contact me"
                                    >
                                        <i className="fab fa-vk"/>
                                        <p className="d-lg-none d-xl-none">VK</p>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="p-0">
                                    <NavLink
                                        data-placement="bottom"
                                        href={gitHub}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        title="Check code"
                                    >
                                        <i className="fab fa-github"/>
                                        <p className="d-lg-none d-xl-none">GitHub</p>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="p-0">
                                    <NavLink
                                        data-placement="bottom"
                                        href={insta}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        title="Follow me"
                                    >
                                        <i className="fab fa-instagram"/>
                                        <p className="d-lg-none d-xl-none">Instagram</p>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <SelectMenu/>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/"}>
                                        <i className="tim-icons icon-single-02"/>
                                        {`${home}`}
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/works"}>
                                        <i className="tim-icons icon-app"/>
                                        {`${works}`}
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#pablo" onClick={e => {
                                        e.preventDefault()
                                        this.props.toggleHireModal()
                                        this.toggleCollapse()
                                    }}>
                                        <i className="tim-icons icon-email-85"/>
                                        {`${hire}`}
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <HireModal/>

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.language,
        navbarData: state.navbarData,
        socials: state.socials,
    }
}

const mapDispatchToProps = {
    toggleHireModal: toggleHireModal,

}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
