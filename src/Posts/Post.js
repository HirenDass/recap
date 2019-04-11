import React from 'react';
import {getCharacter} from './../Api/Auth';
import PostImage from './PostImage';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

//import styles from './Post.css';
import styled from 'styled-components';


class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            character: {} // return element is object therefore init as empty object first
        }
    }

    componentDidMount() {
      const { id } = this.props.match.params;

      getCharacter(id)
      .then(response => response.json())
        .then((character) => {
            console.log(character);
          this.setState(() => ({ character }))
        })
    }
    render() {
        const { character } = this.state;
        
        if(!character.origin && !character.location) {
            return null;
        }

        const Div = styled.div`
            margin-top: 2rem;
            margin-bottom: 2rem;
            `;

        return(
            <Container>
                <Div>
                    <Row>
                        <Col md={{ span: 4, offset: 4 }}>
                        <Card>
                        <PostImage className="card-img-top" post={character} />
                        <Card.Body> 
                        <Card.Title>{character.name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>species: {character.species}</ListGroupItem>
                            <ListGroupItem>status: {character.status}</ListGroupItem>
                            <ListGroupItem>origin: {character.origin.name}</ListGroupItem>
                            <ListGroupItem>location: {character.location.name}</ListGroupItem>
                        </ListGroup>                    
                    </Card>                    
                        </Col>
                    </Row>
                </Div>
            </Container>
        )
    }
  }



export default Post;
