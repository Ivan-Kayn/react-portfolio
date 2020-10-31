import React from "react";
import classnames from "classnames";
import AboutMe from "../aboutMe/AboutMe";
import {connect} from 'react-redux';
import {
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane
} from "reactstrap";
import Skills from "../skills/Skills";
import Goal from "../goal/Goal";

class HomeContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            withIcons: 1
        };
    }
    toggleTabs = (e, stateName, index) => {
        e.preventDefault();
        this.setState({
            [stateName]: index
        });
    };
    render() {

        const tab = this.props.tabs[this.props.language];
        const {about, skills, goal} = tab;

        return (
            <>
                <Nav
                    className="nav-pills-primary nav-pills-icons justify-content-center"
                    pills
                    role="tablist"
                    style={{paddingTop:'150px'}}

                >
                    {/* color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" */}
                    <NavItem>
                        <NavLink
                            className={classnames({
                                active: this.state.withIcons === 1
                            })}
                            onClick={e => this.toggleTabs(e, "withIcons", 1)}
                            href="#pablo"
                        >
                            <i className="tim-icons icon-single-02 d-none d-md-block" />
                            {`${about}`}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({
                                active: this.state.withIcons === 2
                            })}
                            onClick={e => this.toggleTabs(e, "withIcons", 2)}
                            href="#pablo"
                        >
                            <i className="tim-icons icon-html5 d-none d-md-block" />
                            {`${skills}`}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({
                                active: this.state.withIcons === 3
                            })}
                            onClick={e => this.toggleTabs(e, "withIcons", 3)}
                            href="#pablo"
                        >
                            <i className="tim-icons icon-spaceship d-none d-md-block" />
                            {`${goal}`}
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent className="tab-space" activeTab={"withIcons" + this.state.withIcons}>
                    <TabPane tabId="withIcons1">
                        <AboutMe/>
                    </TabPane>
                    <TabPane tabId="withIcons2">
                        <Skills/>
                    </TabPane>
                    <TabPane tabId="withIcons3">
                        <Goal/>
                    </TabPane>
                </TabContent>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tabs: state.tabs,
        language: state.language,
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContent);