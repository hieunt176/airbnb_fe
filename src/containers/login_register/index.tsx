import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import H from "../../components/typography/h";
import Select from "./form";
import { useStyles } from "./useStyles";

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const classes = useStyles();
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle {...other} className={classes.dialog_title}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            left: 8,
            top: 8,
            color: (theme) => theme.palette.text.primary,
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomizedDialogs: React.FC<{ title: string }> = ({
  children,
  title,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        className={classes.menu_item}
        sx={{ textTransform: "none" }}
      >
        {title}
      </Button>
      <Dialog
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          ????ng nh???p ho???c ????ng k??
        </BootstrapDialogTitle>
        <DialogContent dividers className={classes.dialog_content}>
          <H variant="h2" fontSize="22px" color="#000" fontWeight="450">
            Ch??o m???ng b???n ?????n v???i Airbnb
          </H>
          <Select />
          <Divider>ho???c</Divider>

          <Button
            variant="outlined"
            className={classes.btn}
            sx={{ textTransform: "none" }}
          >
            <img src="/images/fb_icon.svg" alt="fb_icon.svg" />
            <a href="#" className={classes.link_btn}>
              Ti???p t???c v???i Facebook
            </a>
            <div></div>
          </Button>
          <Button
            variant="outlined"
            className={classes.btn}
            sx={{ textTransform: "none" }}
          >
            <img src="/images/gg_icon.svg" alt="gg_icon.svg" />
            <a href="#" className={classes.link_btn}>
              Ti???p t???c v???i Google
            </a>
            <div></div>
          </Button>
          <Button
            variant="outlined"
            className={classes.btn}
            sx={{ textTransform: "none" }}
          >
            <img src="/images/ap_icon.svg" alt="ap_icon.svg" />
            <a href="#" className={classes.link_btn}>
              Ti???p t???c v???i Apple
            </a>
            <div></div>
          </Button>
          <Button
            variant="outlined"
            className={classes.btn}
            sx={{ textTransform: "none" }}
          >
            <img src="/images/mail_icon.svg" alt="mail_icon.svg" />
            <a href="#" className={classes.link_btn}>
              Ti???p t???c v???i Email
            </a>
            <div></div>
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomizedDialogs;
