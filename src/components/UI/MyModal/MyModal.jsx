import React from "react";
import classes from "./MyModal.module.css";

const MyModal = ({ children, visable, setVisable }) => {
    const rootClass = [classes.myModal];
    if (visable) {
        rootClass.push(classes.active);
    }

    return (
        <div className={rootClass.join(" ")} onClick={() => setVisable(false)}>
            <div
                className={classes.myModalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;
