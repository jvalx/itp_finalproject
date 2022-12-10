import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { React, useEffect } from 'react';
import './index.css';

export default function PostCard(props) {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = 'Projects';
  }, []);

  const goToPost = () => {
    // 👇️ navigate to /
    navigate(`/posts/${props.post.id}`);
  };
  return (
    <Card className="text-center">
      <Card.Header>{props.post.title}</Card.Header>

      <Card.Body>
        <img id="post-image" alt="post-image" src={props.post.link} />
        <Card.Title>{props.post.body}</Card.Title>
        <Card.Text>
          {props.post.info}
        </Card.Text>
        <Button onClick={goToPost} variant="primary">
          Check out the project!
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}
