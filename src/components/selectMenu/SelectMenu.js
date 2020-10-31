import React from "react";
import ru from './russia.svg';
import it from './italy.svg';
import uk from './united-kingdom.svg';

import {connect} from 'react-redux';
import {onChangeLanguage} from "../../actions";

const SelectMenu = ({onChangeLanguage}) => {
    return (
        <>
            <div>
                <img onClick={() => onChangeLanguage('ru') } className='m-1' width='20px' height='20px' src={ru} alt=""/>
                <img onClick={() => onChangeLanguage('en') } className='m-1' width='20px' height='20px' src={uk} alt=""/>
                <img onClick={() => onChangeLanguage('it') } className='m-1' width='20px' height='20px' src={it} alt=""/>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {
    onChangeLanguage: onChangeLanguage,

}

export default connect(mapStateToProps, mapDispatchToProps)(SelectMenu);
