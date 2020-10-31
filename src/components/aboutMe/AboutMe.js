import React from 'react';
import './AboutMe.scss';
import {connect} from 'react-redux';

const AboutMe = ({language, aboutMeLabels, personalInfo }) => {

    const labels = aboutMeLabels[language];
    const info = personalInfo[language];

    return (
        <>
            <h1 className='text-center mt-5'> {labels.title} </h1>
            <div className="timeline">
                <h2 className="timeline__item timeline__item--year">{labels.name}</h2>

                <div className="timeline__item">
                    <h3 className="timeline__title">{`${labels.nameLabel} ${info.firstName} ${info.lastName}`} </h3>
                </div>

                <h2 className="timeline__item timeline__item--year"> {`${labels.country}`} </h2>

                <div className="timeline__item">
                    <h3 className="timeline__title">{`${info.country}`}</h3>
                </div>

                <h2 className="timeline__item timeline__item--year">{`${labels.study}`}</h2>

                <div className="timeline__item">
                    <h3 className="timeline__title">
                        {`${info.study}`}
                    </h3>
                </div>

                <h2 className="timeline__item timeline__item--year">{`${labels.work}`}</h2>

                <div className="timeline__item">
                    <h3 className="timeline__title">{`${info.work}`}</h3>
                </div>

                <h2 className="timeline__item timeline__item--year">{`${labels.hobbies}`}</h2>

                <div className="timeline__item">
                    <h3 className="timeline__title">{`${info.hobbies[0]}`}</h3>
                </div>

                <div className="timeline__item">
                    <h3 className="timeline__title">{`${info.hobbies[1]}`}</h3>
                </div>

                <div className="timeline__item">
                    <h3 className="timeline__title">{`${info.hobbies[2]}`}</h3>
                </div>

                <h2 className="timeline__item timeline__item--year">{`${labels.languages}`}</h2>

                <div className="timeline__item">
                    <h3 className="timeline__title">{`${info.languages[0]}`}</h3>
                </div>

                <div className="timeline__item">
                    <h3 className="timeline__title">{`${info.languages[1]}`}</h3>
                </div>

                <div className="timeline__item">
                    <h3 className="timeline__title">{`${info.languages[2]}`}</h3>
                </div>

            </div>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        aboutMeLabels:  state.aboutMeLabels,
        personalInfo:  state.personalInfo,
        language: state.language
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);