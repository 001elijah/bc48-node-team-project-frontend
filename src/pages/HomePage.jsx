import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/Auth/authOperations';
import { themeChangeUser } from 'redux/Auth/authOperations';
import { selectorTheme } from 'redux/Auth/authSelectors';

export const HomePage = () => {
  const theme = useSelector(selectorTheme) || "";
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(themeChangeUser(e.target.value));
  };

  return (
    <div>
      <select name="priority" value={theme} onChange={handleChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <button onClick={() => dispatch(logoutUser())}>Log logOut</button>
    </div>
  );
};

// HomePage to test modal window
// import React, { useState } from 'react';
// import { Modal } from '../components/Modal/Modal';

// export const HomePage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <h1>Welcome to My Website</h1>
//       <button onClick={openModal}>Open Modal</button>

//       {isModalOpen && (
//         <Modal title="New board" onClose={closeModal}>
//           <p>Content of the modal.</p>
//         </Modal>
//       )}
//     </div>
//   );
// };
