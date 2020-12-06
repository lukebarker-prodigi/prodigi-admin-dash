import React from "react";
import { Table, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const TransactionHistory = () => {
  const copyLabOrderIdAndToast = (e) => {
    var buttonElementClicked = e.currentTarget;
    var strongTag = buttonElementClicked.getElementsByTagName("strong")[0];

    navigator.clipboard.writeText(strongTag.innerText);
    toast("Copied lab order ID to clipboard!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  return (
    <div class="sub-component">
      <ToastContainer />
      <Table bordered hover className="needs-y-scroll">
        <thead>
          <tr class="table-primary">
            <th>Lab Order ID</th>
            <th>Description &#47; SKU</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-secondary">
            <td>
              <Button onClick={copyLabOrderIdAndToast} class="badge">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-text-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 0 1-1-1zM4.5 8a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <strong class="labOrderId">4245286</strong>
              </Button>
            </td>
            <td></td>
            <td>£123.45</td>
            <td>GBP</td>
          </tr>
          <tr class="table-secondary">
            <td></td>
            <td>item</td>
            <td>£10.00</td>
            <td>GBP</td>
          </tr>
          <tr class="table-secondary">
            <td></td>
            <td>shipping</td>
            <td>£1.50</td>
            <td>GBP</td>
          </tr>
          <tr class="table-secondary">
            <td>
              <Button onClick={copyLabOrderIdAndToast} class="badge">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-text-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 0 1-1-1zM4.5 8a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <strong class="labOrderId">4245287</strong>
              </Button>
            </td>
            <td></td>
            <td>£112.39</td>
            <td>GBP</td>
          </tr>
          <tr class="table-secondary">
            <td></td>
            <td>item</td>
            <td>£10.00</td>
            <td>GBP</td>
          </tr>
          <tr class="table-secondary">
            <td></td>
            <td>shipping</td>
            <td>£1.50</td>
            <td>GBP</td>
          </tr>
          <tr class="table-secondary">
            <td>
              <Button onClick={copyLabOrderIdAndToast} class="badge">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-text-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 0 1-1-1zM4.5 8a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <strong class="labOrderId">4245288</strong>
              </Button>
            </td>
            <td></td>
            <td>£13.97</td>
            <td>GBP</td>
          </tr>
          <tr class="table-secondary">
            <td></td>
            <td>item</td>
            <td>£10.00</td>
            <td>GBP</td>
          </tr>
          <tr class="table-secondary">
            <td></td>
            <td>shipping</td>
            <td>£1.50</td>
            <td>GBP</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};