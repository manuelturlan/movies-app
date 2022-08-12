import React from 'react';
import ReactLoading from "react-loading"
import { LoadingContainer } from './LoadingScreen.style';

const Loading = () => {
    return (
        <LoadingContainer>
        <ReactLoading type={"spokes"} color={"#ddd"} height={80} width={150}></ReactLoading>
        </LoadingContainer>
    );
}

export default Loading;
