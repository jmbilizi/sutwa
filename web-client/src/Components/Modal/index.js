import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import { Close as CloseIcon } from "@mui/icons-material";
import PropTypes from "prop-types";
import Tooltip from "../Tooltip";

function Modal({ children, open, onExited, ...rest }) {
  const [showModal, setShowModal] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (open) {
      setShowModal(true);
    }
  }, [open]);

  const handleClose = () => {
    setShowModal(false);
    onExited();
  };

  return (
    <Dialog
      {...rest}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
      open={showModal}
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
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  onExited: PropTypes.func,
};

export default Modal;
