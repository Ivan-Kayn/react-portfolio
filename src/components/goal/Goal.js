import React from 'react';
import {connect} from 'react-redux';

const Goal = ({language, goals}) => {

    const goal = goals[language];

    return (
        <>
            <h4 className='text-center mt-4'>{`${goal.firstQuestion}`}</h4>

            <blockquote className='blockquote'>
                <p className='mb-0'>
                    {`${goal.firstAnswer}`}
                </p>
            </blockquote>

            <h4 className='text-center mt-4'>{`${goal.secondQuestion}`}</h4>

            <blockquote className='blockquote'>
                <p className='mb-0'>
                    {`${goal.secondAnswer}`}
                </p>
            </blockquote>

            <h4 className='text-center mt-4'>{`${goal.thirdQuestion}`}</h4>

            <blockquote className='blockquote'>
                <p className='mb-0'>
                    {`${goal.thirdAnswer}`}
                </p>
            </blockquote>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        goals:state.goals,
        language: state.language
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Goal);