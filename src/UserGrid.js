import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function UserGrid(props) {
    return (
        <Container>
      <Row>
        {props.users.map((user) => (
            <Col md={4} key={user.id}>
            <UserCard
              avatar={user.avatar}
              name={user.first_name + ' ' + user.last_name}
              email={user.email}
              />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function UserCard(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.avatar} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.email}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default UserGrid;