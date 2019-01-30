import React, {useContext} from 'react';
import {Dimmer, Loader} from 'semantic-ui-react'
import {GlobalParams} from '../../../App'
import {getLabel} from "../../../labels/labels";
import './Loader.css';

const LoaderCustom = () => {
    const {lang} = useContext(GlobalParams);
    return <Dimmer active>
        <Loader><p>{`${getLabel(lang, 'loading')}`}</p><p>{`${getLabel(lang, 'please_wait')}`}</p></Loader>
    </Dimmer>
    // return (
    //     <div className={'loaderWrapper'}>
    //         <div className={'loaderContent'}>
    //             <Icon loading name='spinner' size='huge'/>
    //             <p>{`${getLabel(lang, 'loading')}`}</p>
    //             <p>{`${getLabel(lang, 'please_wait')}`}</p>
    //         </div>
    //     </div>
    // );
}

export {LoaderCustom};