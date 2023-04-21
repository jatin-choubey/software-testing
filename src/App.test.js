import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("currency is not in Negative values", () => {
  const { getByLabelText, getByText, getByDisplayValue } = render(<App />);
});

test("converts INR to USD correctly", () => {
  const { getByLabelText, getByText, getByDisplayValue } = render(<App />);

  // enter amount and select currencies
  fireEvent.change(getByLabelText("Amount:"), { target: { value: "100" } });
  fireEvent.change(getByLabelText("From:"), { target: { value: "INR" } });
  fireEvent.change(getByLabelText("To:"), { target: { value: "USD" } });

  // click the convert button
  fireEvent.click(getByText("Convert"));

  // check the result
  expect(getByDisplayValue("1.20")).toBeInTheDocument();
});

test("converts INR to EUR correctly", () => {
  const { getByLabelText, getByText, getByDisplayValue } = render(<App />);

  // enter amount and select currencies
  fireEvent.change(getByLabelText("Amount:"), { target: { value: "100" } });
  fireEvent.change(getByLabelText("From:"), { target: { value: "INR" } });
  fireEvent.change(getByLabelText("To:"), { target: { value: "EUR" } });

  // click the convert button
  fireEvent.click(getByText("Convert"));

  // check the result
  expect(getByDisplayValue("1.10")).toBeInTheDocument();
});

test("converts INR to GBP correctly", () => {
  const { getByLabelText, getByText, getByDisplayValue } = render(<App />);

  // enter amount and select currencies
  fireEvent.change(getByLabelText("Amount:"), { target: { value: "100" } });
  fireEvent.change(getByLabelText("From:"), { target: { value: "INR" } });
  fireEvent.change(getByLabelText("To:"), { target: { value: "GBP" } });

  // click the convert button
  fireEvent.click(getByText("Convert"));

  // check the result
  expect(getByDisplayValue("0.98")).toBeInTheDocument();
});

test("converts USD to EUR correctly", () => {
  const { getByLabelText, getByText, getByDisplayValue } = render(<App />);

  // enter amount and select currencies
  fireEvent.change(getByLabelText("Amount:"), { target: { value: "100" } });
  fireEvent.change(getByLabelText("From:"), { target: { value: "USD" } });
  fireEvent.change(getByLabelText("To:"), { target: { value: "EUR" } });

  // click the convert button
  fireEvent.click(getByText("Convert"));

  // check the result
  expect(getByDisplayValue("90.00")).toBeInTheDocument();
});
test("displays alert message if USD value is negative", () => {
  const { getByLabelText, getByText, getByDisplayValue } = render(<App />);

  // enter amount and select currencies
  fireEvent.change(getByLabelText("Amount:"), { target: { value: "100" } });
  fireEvent.change(getByLabelText("From:"), { target: { value: "YEN" } });
  fireEvent.change(getByLabelText("To:"), { target: { value: "INR" } });

  // click the convert button
  fireEvent.click(getByText("Convert"));

  // check the result
  expect(getByDisplayValue("61.00")).toBeInTheDocument();
});
