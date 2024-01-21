import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { backend_server } from "../../main";
import "./viewBooks.css";
import useFetch from "../../useFetch";
import RequestBook from "../requestBooks/RequestBook";
import SimilarBooks from "./SimilarBooks";

const ViewBook = () => {
  const { id } = useParams();
  const API_URL = `${backend_server}/api/v1/books/${id}`;
  const { request_Book } = RequestBook();
  const navigate = useNavigate();
  const getData = useFetch(API_URL);
  const data = getData.fetched_data.data;
  const imageFullPath = getData.imagePath;
  const [bookData, setBookData] = useState({});
  const divStyle = {
    background: "linear-gradient(to right, #ffffff, #f0f0f0)",
    borderRadius: 20,
  };

  useEffect(() => {
    setBookData({ ...data, image: imageFullPath });
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <div className="container">
      <h1 className="h1 text-center my-4">Book Details</h1>

      <div className="row mt-1 mb-3 shadow" style={divStyle}>
        <div className="col-lg-6 col-sm-12 mx-5 my-2  image-div">
          <img
            src={bookData.image}
            alt=""
            style={{
              height: "90%",
              width: "300px",
              marginTop: 20,
              borderRadius: 5,
            }}
            className="img-fluid shadow"
          />
        </div>

        <div className="col mx-5 my-5 ">
          <h3>{bookData.title} </h3>
          <p className="sub-head">by '{bookData.author}' </p>
          <p className="sub-head">
            <span className="span" style={{ color: "black" }}>
              Category :
            </span>{" "}
            {bookData.category}{" "}
          </p>
          <p className="sub-head">
            <span className="span" style={{ color: "black" }}>
              Language :
            </span>{" "}
            {bookData.language}{" "}
          </p>
          <p className="sub-head">
            <span className="span" style={{ color: "black" }}>
              Available :
            </span>
            {bookData.available ? (
              <span> In Stock</span>
            ) : (
              <span> Out of Stock</span>
            )}{" "}
          </p>

          <p className="sub-head">
            <span className="span" style={{ color: "black" }}>
              Sypnosis :
            </span>
          </p>
          <p style={{ fontSize: 17 }}> {bookData.description}</p>

          {/* Request Books Button */}
          <div className="text-center">
            {bookData.available ? (
              <button
                type="button"
                className="btn btn-primary me-2 mt-3"
                onClick={() => request_Book(bookData._id)}
              >
                Request
              </button>
            ) : (
              <button
                disabled
                type="button"
                className="btn btn-primary me-2 mt-3"
              >
                Out of Stock
              </button>
            )}

            <button
              type="button"
              className="btn btn-secondary me-2 mt-3"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>

      <SimilarBooks />
    </div>
  );
};

export default ViewBook;
