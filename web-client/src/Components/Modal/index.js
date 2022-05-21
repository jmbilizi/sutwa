import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { Close as CloseIcon } from "@material-ui/icons";
import Tooltip from "../Tooltip";

function Modal({ children, title, open, onExited, ...rest }) {
  const [showModal, setShowModal] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    if (open) {
      setShowModal(true);
    }
  }, [open]);

  const handleClose = () => {
    setShowModal(false);
  };

  function onExitAnimationEnd() {
    onExited();
  }

  return (
    <Dialog
      {...rest}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
      open={showModal}
      // onClose={handleClose}
      onExited={onExitAnimationEnd}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent
        style={{
          padding: "0px",
          margin: "0px",
          marginBottom: "40px",
          position: "relative",
        }}
      >
        <Tooltip title="Close">
          <IconButton onClick={handleClose} className="m-2 p-1">
            <CloseIcon />
          </IconButton>
        </Tooltip>
        {children}
      </DialogContent>
    </Dialog>
  );
}

Modal.propTypes = {
  ...Dialog.propTypes,
};

export default Modal;
