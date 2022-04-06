import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import ClearIcon from "@mui/icons-material/Clear";
import { useStyles } from "./useStyle";

export interface Props {
  open: boolean;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogVideo = (props: Props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description" className={classes.dialog}>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className="left__content">
              <div className="control__item">
                <ClearIcon className="clear__icon"/>
                <p>Cách mô tả <br/> chỗ ở</p>
              </div>
            </div>
            <div className="right__content">
              <video className="videoTag" controls  loop muted>
                <source src="https://a0.muscache.com/v/c1/77/c1776f77-b7d6-568b-94f7-4ebb82c47fc9/c1776f77b7d6568b94f74ebb82c47fc9_4000k_1.mp4" type="video/mp4" />
              </video>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogVideo;
