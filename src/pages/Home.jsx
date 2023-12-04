import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Add from "../components/Add";
function Home() {
   return (
      <div>
         <div className="container">
            <Row>
               <Col lg={6} md={6}>
                  <div className="add-videos d-flex justify-content-center">
                     <Add/>
                     {/* //add a new component */}
                  </div>
               </Col>
               <Col >
                  <div className="watch-history d-flex justify-content-center">
                     <Link to={'/history'} style={{ textDecoration: "none", fontSize: "30px", color: "white" }}> Watch History</Link>
                  </div>
               </Col>
            </Row>
            <div className="container d-flex justify-content-between align-items-center">
               <h4>all videos</h4>
            </div>


         </div>
      </div>

   )
}
export default Home;