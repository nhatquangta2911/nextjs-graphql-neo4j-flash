import React, { useState } from "react";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { AddBookDialogWrapper } from "./AddBookDialog.style";

type AddBookDialogProps = {};

const AddBookDialog: React.FC<AddBookDialogProps> = () => {
  const [selectedDate, setSelectedDate] = useState("");
  // const handleChangeDate: React.ChangeEventHandler<HTMLInputElement> = (
  //   event: any
  // ) => {
  //   setSelectedDate(event.target.value);
  // };
  return (
    <AddBookDialogWrapper>
      <h3>{selectedDate}</h3>
      <DatePicker defaultValue={new Date()} />
    </AddBookDialogWrapper>
  );
};

export default AddBookDialog;
