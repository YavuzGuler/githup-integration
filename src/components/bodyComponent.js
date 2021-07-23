import { Col, Row } from "react-bootstrap";
import CardComponent from "./cardComponent";
import { useSelector } from "react-redux";
function BodyComponent(props) {
  const repoList = useSelector((state) => state.repositoryList);

  return (
    <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4">
      {repoList.map((item, idx) => (
        <Col key={item.id}>
          <CardComponent
            header={item.full_name}
            description={item.description}
            data={item}
          />
        </Col>
      ))}
    </Row>
  );
}

export default BodyComponent;
