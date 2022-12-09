import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row className="text-center">
          <Col className="text-center py-3">
            Copyright &copy; NoteKeeper 2022
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
