import React from "react";

function Item({
  title,
  imageUrl,
  description,
  estimatedWeightInKilograms,
}) {
  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={imageUrl} alt={title} />
          </figure>
        </div>

        <div className="card-content">
          <p className="title is-5 mb-2">{title}</p>

          <div className="content">
            <p className="mb-1">{description}</p>

            <p>
              <span className="tag is-light is-medium">
                Estimated weight
              </span>{" "}
              {estimatedWeightInKilograms}
              kg
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
