import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const mappedAndSerializedJson = {"orderData":{"sourceOrderId":"4208547","email":"hello@example.com","customerName":"John Smith","purchaseOrderNumber":"","extraData":{"shipping_method":"STANDARD","test":false,"pwintyLabOrderId":4208547,"pwintyOrderId":4245271,"merchantOrderId":"","pwintyMerchantId":"27202","merchantName":"Explore Studio Ltd","sale_datetime":"2020-10-19 11:23:32","lab_datetime":"2020-10-19 11:25:46","validForProxyPostback":false},"items":[{"description":"A single 6x4\" greetings card printed on Mohawk 324gsm card - includes a blank envelope to address to recipient - can be printed inside & outside.","shipmentIndex":0,"sourceItemId":"4208547-20201019-1","sku":"PWI-GCRD-M-BLA","quantity":1,"components":[{"path":"https://pwintyimages.blob.core.windows.net/imagestorage-live/4245271/4208547/default-1463856-greetingcard.pdf?sv=2019-02-02&sr=b&sig=RmaswjSnut4z6yUtdkZVkHeYwGbZxhsmKG3b0%2BIlVMs%3D&skoid=ff9af11d-57a0-4db6-b604-0cc1d77ccc08&sktid=95af27ff-c62f-4dc3-b489-99265b850f61&skt=2020-10-19T11%3A20%3A46Z&ske=2020-10-25T11%3A25%3A46Z&sks=b&skv=2019-02-02&se=2020-10-26T11%3A25%3A46Z&sp=rw","fetch":true,"attributes":{"size":"6x4"},"code":"content"}],"extraData":{"thumbnail_path":"https://pwintyimages.blob.core.windows.net/imagestorage-live/4245271/4208547/default-1463856-thumbnail.jpg?sv=2019-02-02&sr=b&sig=OiVRZ0Ivm%2BRAe5SQYbYwzkdPTrrl3sTBS9Y9ez0UaC0%3D&skoid=ff9af11d-57a0-4db6-b604-0cc1d77ccc08&sktid=95af27ff-c62f-4dc3-b489-99265b850f61&skt=2020-10-19T11%3A20%3A46Z&ske=2020-10-25T11%3A25%3A46Z&sks=b&skv=2019-02-02&se=2020-10-26T11%3A25%3A46Z&sp=rw","preview_path":"https://pwintyimages.blob.core.windows.net/imagestorage-live/4245271/4208547/default-1463856-preview.jpg?sv=2019-02-02&sr=b&sig=uCRhirxUYGktR28XV%2B5513vIRrgEbIp4b0t%2B2knYTrs%3D&skoid=ff9af11d-57a0-4db6-b604-0cc1d77ccc08&sktid=95af27ff-c62f-4dc3-b489-99265b850f61&skt=2020-10-19T11%3A20%3A46Z&ske=2020-10-25T11%3A25%3A46Z&sks=b&skv=2019-02-02&se=2020-10-26T11%3A25%3A46Z&sp=rw","pwintyOrderItemId":18337531,"labAlias":"prodigi_gb2"}}],"shipments":[{"shipmentIndex":0,"shipTo":{"name":"John Smith","address1":"115 Creative Quarter","address2":"8a Morgan Arcade","town":"Cardiff","postcode":"CF10 1AF","state":"","isoCountry":"GB","country":"UNITED KINGDOM","email":"hello@example.com","phone":"07987654321"},"returnAddress":{"name":"Print Returns","companyName":"Print Returns","address1":"PO Box 654","town":"Farnham","postcode":"GU9 1JP","state":"Surrey","isoCountry":"GB","country":"UNITED KINGDOM","phone":"000000000000"},"carrier":{"alias":"royal_mail-48_untracked"},"dispatchAlert":""}],"tags":["pwinty"]},"destination":{"name":"prodigi"}};

const PrettyPrintJson = ({data}) => {
  const copyPayloadAndToast= (e) => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));

    toast("Copied JSON payload to the clipboard!", {
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
    <div>
      <pre style={{ overflowY: "scroll", height: "256px" }}>{ JSON.stringify(data, null, 2) }</pre>
      <Button onClick={copyPayloadAndToast} class="badge">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-text-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 0 1-1-1zM4.5 8a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
        </svg>
        <strong class="labOrderId">Copy JSON Payload</strong>
      </Button>
    </div>
  );
};

export const OrderLogs = () => {
  return (
    <div class="sub-component">
      <ToastContainer />
      <Row>
        <Col>
          <Card border="secondary">
            <Card.Header>20/10/2020 18:58:35</Card.Header>
            <Card.Body>
              <Card.Title>Order Shipped</Card.Title>
              <Card.Text>Order has been dispatched by the processing lab. Tracking number: 400161889000856F7161D. CarrierCode: royalmail. CarrierService: 48parcelof. Shipping Alias: royal_mail-48_untracked</Card.Text>
            </Card.Body>
          </Card>

          <Card border="secondary">
            <Card.Header>19/10/2020 11:25:46</Card.Header>
            <Card.Body>
              <Card.Title>Mapped and serialised order</Card.Title>
              <Card.Text><PrettyPrintJson data={mappedAndSerializedJson} /></Card.Text>
            </Card.Body>
          </Card>

          <Card border="secondary">
            <Card.Header>19/10/2020 11:25:07</Card.Header>
            <Card.Body>
              <Card.Title>ResizeImages File</Card.Title>
              <Card.Text>Attempting to resize file for order item id 18337531 using processing mode: ResizeToProductImageSize</Card.Text>
            </Card.Body>
          </Card>

          <Card border="secondary">
            <Card.Header>19/10/2020 11:23:35</Card.Header>
            <Card.Body>
              <Card.Title>Download File</Card.Title>
              <Card.Text>Image 1443236 from URL: https://imagepipeline.services.prodigi.com/api/Image?code=593dFYSnjpqX83hAPapqYDhnQ8QY/2vQEcMsYC6DTWEacX5rgDjRmA==&operation=fromArtwork%5B%2227202%2Fcc27f579-fa11-4c49-9824-1fc41f3cbbbe%22%5D downloaded and store</Card.Text>
            </Card.Body>
          </Card>

          <Card border="secondary">
            <Card.Header>19/10/2020 11:23:32</Card.Header>
            <Card.Body>
              <Card.Title>Order created</Card.Title>
              <Card.Text>Order created</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};