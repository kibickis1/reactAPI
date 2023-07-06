import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const API =
    "https://stg.api.bazaarvoice.com/data/reviews.json?apiversion=5.4&passkey=carG1WVdWROUFqk2ZN5DH9b6VFwAFOPaDJlGO9YnmAK3c&Filter=ProductId:FE340EE6-9609-45A5-8736-1739ECF3C866&Include=Products,Comments&Stats=Reviews";

  const [reviewData, SetReviewData] = useState([]);

  // const [reviewText, setReviewText] = useState("review text before");
  // const [reviewTitle, setReviewTitle] = useState("review title before");
  // const retrieveApiData = () => {
  //   axios.get(API).then((response) => {
  //     // console.log(response);
  //     const reviewObject = response.data.Results;
  //     console.log(reviewObject);
  //     const textOfReview = reviewObject[0].ReviewText;
  //     const titleOfReview = reviewObject[0].Title;
  //     setReviewText(textOfReview);
  //     setReviewTitle(titleOfReview);
  //   });
  // };

  useEffect(
    () => {
      fetch(API)
        .then((response) => response.json())
        .then((data) => SetReviewData(data.Results))
        .catch((err) => console.log(err));
    },
    // console.log(reviewData),
    []
  );

  return (
    <div className="App">
      <h1>A test title</h1>
      {/* <ul>
        {reviewData.map((title) => (
          <li>{title.Title}</li>
        ))}
      </ul> */}
      {/* <button onClick={retrieveApiData}>Get review now</button>
      <h2>{reviewTitle}</h2>
      <h3>{reviewText}</h3> */}
      <div>
        {reviewData.map((title) => (
          <h1>{title.Id}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
