import React from "react";
import ButtonComponent from "../buttonComponent";

const LearnMore = () => {
  return (
    <div className="learn-container">
      <div className="learn-image">
        <img src={require("../../images/learnmore.jpg")} alt="Learn More" />
      </div>
      <div className="learn-details">
        <h1>Learn more about Youth Power</h1>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea.
        </p>
        <ButtonComponent className="left" title="Learn More" />
      </div>
    </div>
  );
};

export default LearnMore;