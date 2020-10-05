import React from "react";
import { Tab, Table } from "react-bootstrap";

export default class ScheduledTasks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{margin: "20px"}}>
        <h4 style={{marginBottom: "20px"}}>Scheduled Tasks</h4>
        <h5>Queue Count: <span>3</span></h5>
        <Table bordered hover style={{ display: "block", height: "256px", overflowY: "scroll" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Time</th>
              <th>Task Type</th>
              <th>Message</th>
              <th>Delivery Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>17acdea4-bf7b-4f0e-9436-c049949f3f5f</td>
              <td>21:36</td>
              <td>SubmitLabOrder</td>
              <td>Id : 4129129 TaskType: CFS.PhotoPrintApi.BackgroundService.QueueTasks.SubmitLabOrder, CFS.PhotoPrintApi.BackgroundService, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null</td>
              <td>0</td>
            </tr>
            <tr>
              <td>17acdea4-bf7b-4f0e-9436-c049949f3f5f</td>
              <td>21:36</td>
              <td>SubmitLabOrder</td>
              <td>Id : 4129129 TaskType: CFS.PhotoPrintApi.BackgroundService.QueueTasks.SubmitLabOrder, CFS.PhotoPrintApi.BackgroundService, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null</td>
              <td>0</td>
            </tr>
            <tr>
              <td>17acdea4-bf7b-4f0e-9436-c049949f3f5f</td>
              <td>21:36</td>
              <td>SubmitLabOrder</td>
              <td>Id : 4129129 TaskType: CFS.PhotoPrintApi.BackgroundService.QueueTasks.SubmitLabOrder, CFS.PhotoPrintApi.BackgroundService, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null</td>
              <td>0</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}