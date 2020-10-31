import React from 'react';
import './Works.scss';

import {toggleModal} from "../../actions";
import {connect} from 'react-redux';

const Works = ({project, toggleModal, onSelectProject}) => {

    const {title, category, year, link, iconLink} = project;

    return (
        <>
            <div className="post mb-5 mx-2">
                <div
                    className="header__post"
                    onClick={() => {
                        toggleModal();
                        onSelectProject();
                    }}
                >
                    <img
                        src={process.env.PUBLIC_URL + iconLink}
                        alt=""/>

                </div>
                <div className="body__post">
                    <div className="post__content">
                        <h1>{title}</h1>
                        <div className="container__info">
                            <div className="info__year">
                                <span>Year</span>
                                <h5 className='tags__category'>{year}</h5>
                            </div>

                            <div className="container__tags">
                                <span>category</span>
                                <div className="tags">
                                    <h4 className='tags__category'>{category}</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {
    toggleModal: toggleModal,
}


export default connect(mapStateToProps, mapDispatchToProps)(Works);