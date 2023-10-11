import { useState } from "react";

const usePostHook = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isMarked, setIsMarked] = useState(false);
  const [isOpenShare, setOpenShare] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRepopen, setIsRepopen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleModalShare = () => {
    setOpenShare(!isOpenShare);
  };

  const likeButton = () => {
    setIsLiked(!isLiked);
  };

  const handlemarkbutton = () => {
    setIsMarked(!isMarked);
  };

  const handleReport = () => {
    setIsRepopen(!isRepopen);
  };

  return [
    isLiked,
    isMarked,
    isModalOpen,
    isOpenShare,
    isRepopen,
    handleOpenModal,
    handleCloseModal,
    toggleModalShare,
    likeButton,
    handlemarkbutton,
    handleReport,
  ];
};

export default usePostHook;
