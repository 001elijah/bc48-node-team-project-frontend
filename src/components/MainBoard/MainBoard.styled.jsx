import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: ${props => props.colorbg};
  height: calc(100vh - 61px);
  @media screen and (min-width: 375px) {
    padding-left: 0px;
    background-image: url(${props =>
      props.imgurl + 'mobile/x1/' + props.imgid});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${props =>
        props.imgurl + 'mobile/x2/' + props.imgid});
    }
  }
  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    height: calc(100vh - 68px);
    background-image: url(${props =>
      props.imgurl + 'tablet/x1/' + props.imgid});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${props =>
        props.imgurl + 'mobile/x2/' + props.imgid});
    }
  }
  @media screen and (min-width: 1280px) {
    width: calc(100vw - 260px);
    height: calc(100% - 76px);
    padding-left: 24px;
    padding-right: 24px;

    background-image: url(${props =>
      props.imgurl + 'desktop/x1/' + props.imgid});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${props =>
        props.imgurl + 'mobile/x2/' + props.imgid});
    }
  }
`;
export const ColumnsList = styled.ul`
  display: flex;
`;
export const ContentBoard = styled.div`
  display: flex;
  wrap: nowrap;
  overflow: auto;
`;
