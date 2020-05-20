import React, { useState } from "react";
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
import { AddBookDialog } from "components";
import { BookCarousel } from "containers";

type BookshelfProps = {};

const Bookshelf: React.FC<BookshelfProps> = () => {
  const [display, setDisplay] = useState(false);

  const DialogFooter = (
    <DialogFooterWrapper>
      <Button label="Add" icon="pi pi-check" />
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-secondary"
        onClick={() => setDisplay(false)}
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
            icon="pi pi-plus"
            onClick={() => setDisplay(true)}
          ></Button>
        </AddBookSection>
      </BookshelfHeader>
      <BookshelfContent>
        <BookCarousel />
      </BookshelfContent>
      <Dialog
        header="Add book"
        visible={display}
        modal={true}
        footer={DialogFooter}
        style={{ width: "40vw" }}
        onHide={() => setDisplay(false)}
      >
        <AddBookDialog />
      </Dialog>
    </BookshelfWrapper>
  );
};

export default Bookshelf;
