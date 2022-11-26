import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Section({ card }) {
  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          {card.badge == true ? (
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>
          ) : null}
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{card.name}</h5>
              <div className="d-flex justify-content-center small text-warning mb-2">
                {card.star ? <FontAwesomeIcon icon={faStar} /> : null}
              </div>
              <span className="text-muted text-decoration-line-through">
                $20.00
              </span>
              $18.00
            </div>
          </div>
          {card.name === "Fancy Product" ? (
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <a className="btn btn-outline-dark mt-auto" href="#">
                  View options
                </a>
              </div>
            </div>
          ) : (
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <a className="btn btn-outline-dark mt-auto" href="#">
                  Add to cart
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Section;
