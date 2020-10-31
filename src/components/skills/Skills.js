import React from "react";
import {connect} from "react-redux";
import { Progress } from "reactstrap";

class Skills extends React.Component {
    render() {

        const {skill} = this.props.skills[this.props.language];

        return (
            <>
                <h1 className='text-center mt-4'>{`${skill}`}</h1>

                <div className="progress-container progress-info">
                    <span className="progress-badge">html 5</span>
                    <Progress max="100" value="80" barClassName="progress-bar-info">
                        <span className="progress-value" >80%</span>
                    </Progress>
                </div>
                <div className="progress-container progress-info">
                    <span className="progress-badge">css 3</span>
                    <Progress max="100" value="75" barClassName="progress-bar-info">
                        <span className="progress-value">75%</span>
                    </Progress>
                </div>
                <div className="progress-container progress-info">
                    <span className="progress-badge">javascript</span>
                    <Progress max="100" value="60" barClassName="progress-bar-info">
                        <span className="progress-value">60%</span>
                    </Progress>
                </div>
                <div className="progress-container progress-info">
                    <span className="progress-badge">Less - Scss - Sass</span>
                    <Progress max="100" value="70" barClassName="progress-bar-info">
                        <span className="progress-value">70%</span>
                    </Progress>
                </div>
                <div className="progress-container progress-info">
                    <span className="progress-badge">Webpack</span>
                    <Progress max="100" value="55" barClassName="progress-bar-info">
                        <span className="progress-value">55%</span>
                    </Progress>
                </div>
                <div className="progress-container progress-info">
                    <span className="progress-badge">React - Redux</span>
                    <Progress max="100" value="60" barClassName="progress-bar-info">
                        <span className="progress-value">60%</span>
                    </Progress>
                </div>
                <div className="progress-container progress-info">
                    <span className="progress-badge">Webstorm IDE - VS Code </span>
                    <Progress max="100" value="80" barClassName="progress-bar-info">
                        <span className="progress-value">80%</span>
                    </Progress>
                </div>


            </>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.language,
        skills: state.skills,
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);