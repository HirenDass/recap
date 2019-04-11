import React from 'react';
import PostImage from './PostImage';
import {getCharacters} from './../Api/Auth';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

import { Link } from "react-router-dom";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        getCharacters()
          .then(response => response.json())
          .then(posts => this.setState({ posts: posts.results }));
      }

    render() {
        const {posts} = this.state;
        //console.log(posts.results);
        
        return (
            <React.Fragment>
                <Jumbotron>
                    <h1 className="text-center">Rick & Morty App</h1>
                </Jumbotron>
                <Container>
                <Row>
                    {//posts.results &&
                        posts.map(post =>
                            <Col key={post.id} lg={4}>
                                <Card>
                                <PostImage className="card-img-top" post={post} />
                                {/* <Card.Img variant="top" src={post.image} /> */}
                                <Card.Body>
                                    <Card.Title>{post.name}</Card.Title>
                                </Card.Body>
                                {/* <ListGroup className="list-group-flush">
                                    <ListGroupItem>species: {post.species}</ListGroupItem>
                                    <ListGroupItem>status: {post.status}</ListGroupItem>
                                    <ListGroupItem>origin: {post.origin.name}</ListGroupItem>
                                    <ListGroupItem>location: {post.location.name}</ListGroupItem>
                                </ListGroup> */}
                                <Card.Body>
                                    <Link to={`post/${post.id}`}>view post</Link>
                                </Card.Body>
                                </Card>

                            </Col>
                    )}
                </Row>
                </Container>
            </React.Fragment>
          );
    }
}

export default Posts;