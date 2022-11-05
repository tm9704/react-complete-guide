import React, { useState } from "react";

import ExpenseFrom from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseFrom />
    </div>
  );
};

export default NewExpense;
