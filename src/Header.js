import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>{props.brandName}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Button onClick={props.getUsers}>Get Users</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;