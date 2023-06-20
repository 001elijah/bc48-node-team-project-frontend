import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #1F1F1F;    
    background-image:url(${(props)=>props.imgurl});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: bottom;
`