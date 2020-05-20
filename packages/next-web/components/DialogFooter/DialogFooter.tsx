import React from "react";
import { DialogFooterWrapper } from "./DialogFooter.style";
import { Button } from "primereact/button";

const DialogFooter = (
  <DialogFooterWrapper>
    <Button label="Add" icon="pi pi-check" />
    <Button label="Cancel" icon="pi pi-times" />
  </DialogFooterWrapper>
);

export default DialogFooter;
