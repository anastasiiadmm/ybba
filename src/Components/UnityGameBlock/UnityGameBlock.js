import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import Unity, { UnityContext } from 'react-unity-webgl';


const UnityGameBlock = (props) => {

    const {
        loaderFile, dataFile, frameworkFile, wasmFile
    } = props

    const [context, setContext] = useState()

    useEffect(() => {
        const context = new UnityContext({
            loaderUrl: loaderFile,
            dataUrl: dataFile,
            frameworkUrl: frameworkFile,
            codeUrl: wasmFile
        })
        setContext(context)
    }, [dataFile, frameworkFile, loaderFile, wasmFile])

    return (
        <Unity unityContext={context}/>
    );

}

UnityGameBlock.propTypes = {
    loaderFile: PropTypes.string.isRequired,
    dataFile: PropTypes.string.isRequired,
    frameworkFile: PropTypes.string.isRequired,
    wasmFile: PropTypes.string.isRequired
}

export default UnityGameBlock;