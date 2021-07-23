import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { openModal } from "../redux/modal/modalAction";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedRepo } from "../redux/selectedRepo/selectedRepoAction";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Star from "@material-ui/icons/Star";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import {
  addSavedRepoList,
  deleteSavedRepoList,
} from "../redux/savedRepositories/savedRepositoriesAction";
import { useState } from "react";
import {
  deleteItemFromRepositoryList,
  setRepositoryList,
} from "../redux/repositories/repositoriesAction";
function CardComponent(props) {
  const dispatch = useDispatch();
  const searchCheck = useSelector((state) => state.searchValue);
  const [repo, setRepo] = useState(props.data);
  const onClickHandler = () => {
    dispatch(setSelectedRepo(repo));
    dispatch(openModal());
  };
  const onClickSaveHandler = () => {
    const saved = !repo.saved;
    if (!saved) {
      setRepo({ ...repo, saved: saved });
      dispatch(deleteSavedRepoList(repo));
      if (!searchCheck) dispatch(deleteItemFromRepositoryList(repo));
    } else {
      setRepo({ ...repo, saved: saved });
      dispatch(addSavedRepoList(repo));
    }
  };

  return (
    <Card bg="light" border="dark" style={{ width: "18rem" }}>
      <Card.Header>
        <Row>
          <Col xs={8}>
            <Button variant="link" onClick={onClickHandler}>
              {props.header}
            </Button>
          </Col>
          <Col>
            <Button
              size="sm"
              variant="outline-dark"
              onClick={onClickSaveHandler}
            >
              {repo.saved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            </Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Container className={"d-flex p-2 bd-highlight"}>
          <Row>
            <Col>
              <Container className={"d-inline-flex p-2 bd-highlight"}>
                <Star></Star>
                <h6>{repo.stargazers_count}</h6>
              </Container>
            </Col>
            <Col>
              <Container className={"d-inline-flex p-2 bd-highlight"}>
                <h6>{repo.language}</h6>
              </Container>
            </Col>
            {repo.license && (
              <Col>
                <Container className={"d-inline-flex p-2 bd-highlight"}>
                  <h6>{repo.license.name}</h6>
                </Container>
              </Col>
            )}
          </Row>
        </Container>
      </Card.Footer>
    </Card>
  );
}

export default CardComponent;
