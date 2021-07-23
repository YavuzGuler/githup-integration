import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommits,
  getProjectWithFullName,
  getProjectWithName,
} from "../api/apiCall";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { setRepositoryList } from "../redux/repositories/repositoriesAction";
import { setSearchCheck } from "../redux/repositories/searchCheck/searchAction";

const NavbarComponent = () => {
  const [title, setTitle] = useState("language");
  const [search, setSearch] = useState("");

  const repositoryList = useSelector((state) => state.repositoryList);
  const savedRepoList = useSelector((state) => state.savedRepoList);

  const dispatch = useDispatch();
  const handleSelectedProjectsOnClick = async () => {
    var repoList = [];
    var response;
    for (var k in savedRepoList) {
      response = await getProjectWithFullName(savedRepoList[k]);
      repoList.push({ ...response, saved: true });
    }

    dispatch(setRepositoryList(repoList));
    dispatch(setSearchCheck(false));
  };
  const handleOnClick = () => {
    if (search) {
      getProjectWithName(search)
        .then((response) =>
          dispatch(
            setRepositoryList(
              response.map((item) => {
                if (typeof savedRepoList[item.id] !== "undefined") {
                  return { ...item, saved: true };
                }
                return { ...item, saved: false };
              })
            )
          )
        )
        .catch((error) => console.log(error));

      dispatch(setSearchCheck(true));
    }
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Github Integration</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Container className="d-flex" />
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="outline-success" onClick={handleOnClick}>
            Search
          </Button>
        </Form>

        <Button
          className="d-flex"
          variant="outline-success"
          onClick={handleSelectedProjectsOnClick}
        >
          Selected Projects
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavbarComponent;
