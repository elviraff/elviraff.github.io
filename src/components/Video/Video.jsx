import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import video from "./video.mp4";
import { Modal } from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../store/toolkitSlice";
import { ContactsPage } from "../../pages/ContactsPage/ContactsPage";
import { Banner } from "../Banner/Banner";

export const Video = () => {
  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef(0);
  const modalActive = useSelector((state) => state.toolkit.modalActive);

  useEffect(() => {
    if (Math.ceil(currentTime) == 5) {
      videoRef.current.pause();
      dispatch(setModal(true));
    }
  }, [currentTime]);

  return (
    <div>
      <Modal active={modalActive} setFunc={setModal}>
       <Banner />
      </Modal>
      <video
        ref={videoRef}
        className={styles.video}
        src={video}
        autoPlay
        muted
        onTimeUpdate={(event) => setCurrentTime(event.target.currentTime)}
      />
    </div>
  );
};
