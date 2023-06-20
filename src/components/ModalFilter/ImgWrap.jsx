import PropTypes from 'prop-types';

export const ImgWrap = ({ type, image }) => {
  return (
    <div className="tool-button">
      <img
        src={require('../../assets/images/modalbg/'+type+'/'+ image)}
        alt=""
        width={28}
        height={28}
      />
    </div>
  );
};
ImgWrap.propTypes = {
  image: PropTypes.string,
  type: PropTypes.string,
};
