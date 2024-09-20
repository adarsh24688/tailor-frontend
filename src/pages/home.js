import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './home.css'; // Ensure to make your CSS responsive
import Navbar from '../components/navbar';

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false); // Sidebar open/close
  const [selectedItem, setSelectedItem] = useState(null); // Currently selected card
  const [showFlexView, setShowFlexView] = useState(false); // Toggle between sidebar and flex view

  // Handle opening the sidebar with card details
  const handleCardClick = (item) => {
    setSelectedItem(item);
    setShowSidebar(true); // Open the sidebar
    setShowFlexView(false); // Initially, show the sidebar content
  };

  // Handle closing the sidebar modal
  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  // Handle switching to the flex view
  const handleFlexView = () => {
    setShowFlexView(true); // Show flex view after the button click
  };

  const cardItems = [
    {
      id: 1,
      title: 'First Thing',
      imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20240507/qUHe/663a557116fd2c6e6af0ef02/-473Wx593H-467293008-brown-MODEL2.jpg',
      alt: 'example'
    },
    {
      id: 2,
      title: 'Second Thing',
      imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20240507/V7nn/663a557116fd2c6e6af0eefc/-473Wx593H-467293008-brown-MODEL4.jpg',
      alt: 'example'
    },
    {
      id: 3,
      title: 'Third Thing',
      imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20240507/mdc0/663a557116fd2c6e6af0ef6f/-473Wx593H-467293008-brown-MODEL.jpg',
      alt: 'example'
    },
    {
      id: 4,
      title: 'Fourth Thing',
      imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20240507/mdc0/663a557116fd2c6e6af0ef6f/-473Wx593H-467293008-brown-MODEL.jpg',
      alt: 'example'
    },
  ];

  return (
    <>
      <Navbar />

      {/* Grid of cards */}
      
        <div className="card-grid-container my-5">
          {cardItems.map((item) => (
            <div className="card-grid-item" key={item.id}>
              <div className="custom-card" onClick={() => handleCardClick(item)}>
                <img className="custom-card-img" src={item.imageUrl} alt={`${item.title} Image`} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <button className="btn btn-success me-2">View Details</button>
                  <button className="btn btn-outline-danger"><i className="far fa-heart"></i></button>
                </div>
              </div>
            </div>
      
        ))}
      </div>

      {/* Sidebar Modal */}
      <Modal
        show={showSidebar}
        onHide={handleCloseSidebar}
        dialogClassName="sidebar-modal" // Custom class for sidebar styling
        backdropClassName="sidebar-backdrop"
        centered
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!showFlexView ? (
            <>
              <img src={selectedItem?.imageUrl} alt={selectedItem?.title} className="img-fluid mb-3" />
              <p>{selectedItem?.text}</p>

            </>
          ) : (
            // Flexbox layout for details or form
            <div className="flexbox-layout">
              <div className="flex-item">
                <h4>Form Section</h4>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter comments" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
              <div className="flex-item">
                <h4>Additional Details</h4>
                <p>More details about the selected item can go here.</p>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSidebar}>
            Close
          </Button>
          {!showFlexView && (
            <Button variant="success" onClick={handleFlexView}>
              Switch to Flex View
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
