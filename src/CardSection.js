import React from "react";
import Card from "./Card";
const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container pb-5">
        <h2 className="text-white " style={{ textAlign: "center" }}>
          All The Courses
        </h2>
        <div className="row">
          <div className="col-4">
            <Card
              title="JAVASCRIPT Course"
              infoArea="Some quick example text to build on the card title and make up the bulk of the card's content."
              buttonText="Submit"
              imgUrl="https://source.unsplash.com/i25aqE_YUZs/1600x900"
            />
          </div>
          <div className="col-4">
            <Card
              title="HTML Course"
              infoArea="Some quick example text to build on the card title and make up the bulk of the card's content."
              buttonText="Submit"
              imgUrl="https://source.unsplash.com/_t-l5FFH8VA/1600x900"
            />
          </div>
          <div className="col-4">
            <Card
              title="CSS Course"
              infoArea="Some quick example text to build on the card title and make up the bulk of the card's content."
              buttonText="Submit"
              imgUrl="https://source.unsplash.com/ipARHaxETRk/1600x900"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
