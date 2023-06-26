import styled from 'styled-components';

export const Wrapper = styled.div`
  
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  background-color: black;
  height: 100vh;
  @media screen and (min-width: 375px) {
    padding-left:0px;
    background-image: url(${props =>
      props.BASE_URL + 'mobile/x1/' + props.imgid});
  }
  @media screen and (min-width: 768px) {
    padding-left: 24px;
    background-image: url(${props =>
      props.imgurl + 'tablet/x1/' + props.imgid});
  }
  @media screen and (min-width: 1280px) {
    padding-left: 24px;
    background-image: url(${props =>
      props.imgurl + 'desktop/x1/' + props.imgid});
  }
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    @content;
  }
`;
