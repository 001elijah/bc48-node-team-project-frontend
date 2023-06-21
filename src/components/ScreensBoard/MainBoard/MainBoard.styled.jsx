import styled from 'styled-components';


export const Wrapper = styled.div`
    background-image:url(${(props)=>props.imgurl});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: bottom;
    height: 100vh;
`