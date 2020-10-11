import React from 'react';
import { Table } from 'react-bootstrap';

export default class MerchantsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component">
        <Table bordered hover className="needs-y-scroll">
          <thead>
            <tr class="table-primary">
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
              <th>Billing Currency</th>
              <th>Is Admin?</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-secondary">
              <td>John Smith</td>
              <td>Prodigi Group</td>
              <td>hello@example.com</td>
              <td>GBP</td>
              <td>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="#eb3434" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
              </td>
            </tr>
            <tr class="table-secondary">
              <td>John Smith</td>
              <td>Prodigi Group</td>
              <td>hello@example.com</td>
              <td>GBP</td>
              <td>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle-fill" fill="#6fee8c" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>
              </td>
            </tr>
            <tr class="table-secondary">
              <td>John Smith</td>
              <td>Prodigi Group</td>
              <td>hello@example.com</td>
              <td>GBP</td>
              <td>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="#eb3434" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
              </td>
            </tr>
            <tr class="table-secondary">
              <td>John Smith</td>
              <td>Prodigi Group</td>
              <td>hello@example.com</td>
              <td>GBP</td>
              <td>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="#eb3434" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
              </td>
            </tr>
            <tr class="table-secondary">
              <td>John Smith</td>
              <td>Prodigi Group</td>
              <td>hello@example.com</td>
              <td>GBP</td>
              <td>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle-fill" fill="#6fee8c" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}