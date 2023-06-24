import styled from 'styled-components';

export const Wrapper = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
  height: 100vh;
  @media screen and (min-width: 375px) {
    background-image: url(${props =>
      props.imgurl + 'mobile/x1/' + props.imgid});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${props =>
      props.imgurl + 'tablet/x1/' + props.imgid});
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${props =>
      props.imgurl + 'desktop/x1/' + props.imgid});
  }
  ${
    '' /* @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    @content;
  } */
  }
`;
