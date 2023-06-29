import styled from 'styled-components';

export const Wrapper = styled.div(props => {
  const expandedStyles = `
      padding-left: 20px;
      padding-right: 20px;
      height: calc(100vh - 61px);
      background-color: ${props.colorbg};
      `;
  const notExpandedStyles = `
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: calc(100vh - 61px);
      padding-left: 20px;

      @media screen and (min-width: 375px) {
        padding-left: 20px;
        background-image: url(${props.imgurl?.mobileUrl_1x});
      }
    
      @media screen and (min-width: 375px) and (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi) {
        background-image: url(${props.imgurl?.mobileUrl_2x});
      }
    
      @media screen and (min-width: 768px) {
        padding-left: 32px;
        padding-right: 32px;
        height: calc(100vh - 68px);
        background-image: url(${props.imgurl?.tabletUrl_1x});
      }
    
      @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi) {
        background-image: url(${props.imgurl?.tabletUrl_2x});
      }
    
      @media screen and (min-width: 1280px) {
        width: calc(100vw - 260px);
        height: calc(100% - 68px);
        padding-left: 24px;
        padding-right: 24px;
        background-image: url(${props.imgurl?.desktopUrl_1x});
      }
    
      @media screen and (min-width: 1280px) and (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi) {
        background-image: url(${props.imgurl?.desktopUrl_2x});
      }
    `;

  if (props.isExpanded) {
    return notExpandedStyles;
  } else {
    return expandedStyles;
  }
});

export const Wrappers = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  height: calc(100vh - 61px);

  background-color: ${props => props.colorbg};

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${props => props.imgurl !== null && `background-image: url(${props.imgurl});`}

  @media screen and (min-width: 375px) {
    padding-left: 0px;
    ${props =>
      props.imgurl !== null &&
      `background-image: url(${props.imgurl.mobileUrl_1x});`}
  }

  @media screen and (min-width: 375px) and (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
    ${props =>
      props.imgurl !== null &&
      `background-image: url(${props.imgurl.mobileUrl_2x});`}
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    height: calc(100vh - 68px);
    ${props =>
      props.imgurl !== null &&
      `background-image: url(${props.imgurl.tabletUrl_1x});`}
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
    ${props =>
      props.imgurl !== null &&
      `background-image: url(${props.imgurl.tabletUrl_2x});`}
  }

  @media screen and (min-width: 1280px) {
    width: calc(100vw - 260px);
    padding-left: 24px;
    padding-right: 24px;
    ${props =>
      props.imgurl !== null &&
      `background-image: url(${props.imgurl.desktopUrl_1x});`}
    height: calc(100vh - 68px);
  }

  @media screen and (min-width: 1280px) and (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
    ${props =>
      props.imgurl !== null &&
      `background-image: url(${props.imgurl.desktopUrl_2x});`}
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
