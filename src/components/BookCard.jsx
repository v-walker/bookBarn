import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Card';


function BookCard(props) {
    
    let {title, author, imgURL, link} = props
    
    return (
        <Card style={{height: '18rem'}} className="mb-2 bookCard">
            <Card.Img variant="top" height="150px" src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${imgURL}`} />
            <Card.Body>
                <Card.Title style={{fontSize: '0.7rem'}}>{title}</Card.Title>
                <Card.Subtitle style={{fontSize: '0.65rem'}} className="mb-2 text-muted">By {author}</Card.Subtitle>
                <a className="detailLink" href={link}>More Details</a>
                {/* <Button className="text-center" variant="primary">More info</Button> */}
            </Card.Body>
        </Card>
    )
}

export default BookCard
