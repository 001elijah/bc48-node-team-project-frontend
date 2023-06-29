import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: ${props => props.colorbg};
  height: calc(100vh - 60px);

  @media screen and (min-width: 375px) {
    background-image: url(${props => props.imgurl.mobileUrl_1x});
  }

  @media screen and (min-width: 375px) and (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
    background-image: url(${props => props.imgurl.mobileUrl_2x});
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    height: calc(100vh - 68px);
    background-image: url(${props => props.imgurl.tabletUrl_1x});
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
    background-image: url(${props => props.imgurl.tabletUrl_2x});
  }

  @media screen and (min-width: 1280px) {
    width: calc(100vw - 260px);
    height: calc(100vh - 76px);
    padding-left: 24px;
    padding-right: 24px;
    background-image: url(${props => props.imgurl.desktopUrl_1x});
    height: calc(100vh - 68px);
  }

  @media screen and (min-width: 1280px) and (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
    background-image: url(${props => props.imgurl.desktopUrl_2x});
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
