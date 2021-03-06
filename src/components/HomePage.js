import {} from "react-bootstrap";
import Slider from "./Slider";
import { Container } from "react-bootstrap";
import NavComp from "./NavComp";
const HomePage = () => {
  return (
    <div>
      <Slider />
      <div
        style={{
          display: "flex",
          flexDirection: "space-around",
          marginTop: 16,
        }}
      >
        <Container style={{ width: 50 }}>
          <i>
            <img
              style={{ height: 50, width: 50 }}
              alt="Trinity Logo"
              src="data:image/jpeg;base64,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"
            />
          </i>
        </Container>
        <NavComp />
      </div>
    </div>
  );
};
export default HomePage;
