import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Components/Footer';
import '../Css/Places.css';

const Places = () => {
  const [data, setdata] = useState([]);
  
  useEffect(() => {
    const apiUrl = 'https://picsum.photos/v2/list';

    axios.get(apiUrl)
      .then(response => {
        console.log(response);
        setdata(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      <div className="container-fluid places ">
        <div className="row row-cols-1 row-cols-md-3">
          {data.map(elm => (
            <div key={elm.id} className="col mb-4">
              <div className="card">
                {/* Card image */}
                <div className="view overlay">
                  <img className="card-img-top view overlay" src={elm.download_url} alt="Card" />
                  <a href="#!">
                    <div className="mask rgba-white-slight" />
                  </a>
                </div>
                {/* Card content */}
                <div className="card-body">
                  {/* Title */}
                  <h4 className="card-title">{elm.author}</h4>
                  {/* Text */}
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  {/* Button */}
                  <button type="button" className="btn btn-light-blue btn-md border border-info">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </>
  );
};

export default Places;
