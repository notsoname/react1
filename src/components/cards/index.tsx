import { Card } from 'react-bootstrap';
import { Idata } from '../../pages/home';

const Cards = ({ name, img, text }: Idata) => {
  return (
    <Card className="w-25">
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${img}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
