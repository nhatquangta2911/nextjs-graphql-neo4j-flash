import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import {
  BookshelfWrapper,
  BookshelfHeader,
  BookshelfContent,
  BookshelfTitle,
  AddBookSection,
  BookshelfDescription,
} from "./Bookshelf.style";
import { DialogFooterWrapper } from "components/DialogFooter/DialogFooter.style";
import { AddBookDialog, UpdateBookDialog } from "components";
import { BookCarousel } from "containers";
import { IPageTrackingState } from "pages/tracking/tracking.reducer";

type BookshelfProps = {};

const Bookshelf: React.FC<BookshelfProps> = () => {
  const dispatch = useDispatch();
  const addBookDialogVisible = useSelector(
    (state: IPageTrackingState) => state?.addBookDialogVisible
  );
  const updateBookDialogVisible = useSelector(
    (state: IPageTrackingState) => state.updateBookDialogVisible
  );
  const DialogFooter = (
    <DialogFooterWrapper>
      {/* <Button label="Add" icon="pi pi-check" /> */}
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-secondary"
        onClick={() => {
          dispatch({ type: "HIDE_ADD_BOOK_DIALOG" });
          dispatch({ type: "HIDE_UPDATE_BOOK_DIALOG" });
        }}
      />
    </DialogFooterWrapper>
  );

  return (
    <BookshelfWrapper>
      <BookshelfHeader>
        <BookshelfTitle>
          Book Tracking
          <BookshelfDescription>
            Goal: about 20 pages a day
          </BookshelfDescription>
        </BookshelfTitle>
        <AddBookSection>
          <Button
            label="Add Book"
            style={{ fontSize: "0.9em" }}
            icon="pi pi-plus"
            onClick={() => dispatch({ type: "TRIGGER_ADD_BOOK_DIALOG" })}
          ></Button>
        </AddBookSection>
      </BookshelfHeader>
      <BookshelfContent>
        <BookCarousel />
      </BookshelfContent>
      <Dialog
        header="Add book"
        visible={addBookDialogVisible}
        modal={true}
        footer={DialogFooter}
        style={{ width: "50vw" }}
        onHide={() => dispatch({ type: "HIDE_ADD_BOOK_DIALOG" })}
      >
        <AddBookDialog />
      </Dialog>
      <Dialog
        header="Update progress"
        visible={updateBookDialogVisible}
        modal={true}
        footer={DialogFooter}
        style={{ width: "40vw" }}
        onHide={() => dispatch({ type: "HIDE_UPDATE_BOOK_DIALOG" })}
      >
        <UpdateBookDialog />
      </Dialog>
    </BookshelfWrapper>
  );
};

export default Bookshelf;
