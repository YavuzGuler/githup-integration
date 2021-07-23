import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Modal,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getBranches, getCommits, getStatuses } from "../api/apiCall";
import { closeModal } from "../redux/modal/modalAction";

import SwitchButton from "./switch";
function ModalComponent(props) {
  const modal = useSelector((state) => state.modal);
  const selectedRepo = useSelector((state) => state.selectedRepo);
  const [branchList, setBranchList] = useState([]);
  const [commitList, setCommitList] = useState([]);
  const [statusesList, setStatusesList] = useState([]);
  const [checked, setChecked] = useState(false);
  const [title, setTitle] = useState("Branches");
  const handleCommitStatusChange = (checked) => {
    setChecked(checked);
    if (checked) {
      //Statuses

      getStatuses(
        selectedRepo !== null ? selectedRepo.full_name : "",
        title !== "Branches" ? title : null
      ).then((response) => setStatusesList(response));
    } else {
      //Commits

      getCommits(
        selectedRepo !== null ? selectedRepo.full_name : "",
        title !== "Branches" ? title : null
      ).then((response) => setCommitList(response));
    }
  };
  const handleOnClick = (title) => {
    setTitle(title);
    handleCommitStatusChange(checked);
  };
  useEffect(() => {
    if (modal) {
      setTitle("Branches");
      getBranches(
        selectedRepo !== null ? selectedRepo.full_name : "",
        1,
        10
      ).then((response) => setBranchList(response));
      getCommits(
        selectedRepo !== null ? selectedRepo.full_name : "",
        title !== "Branches" ? title : null
      ).then((response) => setCommitList(response));
    }
  }, [modal]);
  const dispatch = useDispatch();
  return (
    <>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modal}
        backdrop="static"
        keyboard={false}
        onHide={() => dispatch(closeModal())}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <a
              target={"_blank"}
              href={selectedRepo !== null ? selectedRepo.html_url : ""}
              rel="noopener noreferrer"
            >
              {selectedRepo !== null ? selectedRepo.full_name : ""}
            </a>
          </Modal.Title>
          <DropdownButton
            id="dropdown-item-button"
            bsstyle="default"
            bssize="small"
            style={{ maxHeight: "28px" }}
            title={title}
          >
            {branchList.map((item, idx) => (
              <Dropdown.Item
                as="button"
                key={idx}
                onClick={() => handleOnClick(item.name)}
              >
                {item.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <SwitchButton handleOnClick={handleCommitStatusChange} />
        </Modal.Header>
        <Modal.Body>
          {checked
            ? statusesList.map((item) => (
                <Container key={item.node_id}>
                  <Container className={"d-flex p-2 bd-highlight"}>
                    <p>
                      <a
                        target={"_blank"}
                        href={item.target_url}
                        rel="noopener noreferrer"
                      >
                        {item.state}
                      </a>
                    </p>
                  </Container>
                  <p>{item.description}</p>
                </Container>
              ))
            : commitList.map((item) => (
                <Container key={item.node_id}>
                  <Container className={"d-flex p-2 bd-highlight"}>
                    <p>
                      <a
                        target={"_blank"}
                        href={item.html_url}
                        rel="noopener noreferrer"
                      >
                        {item.sha}
                      </a>
                    </p>
                  </Container>
                  <p>{item.commit.message}</p>
                </Container>
              ))}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalComponent;
