import React from "react";

function TopSection(){
    return ( <div className="containerTop">
      <div className="bg-light p-5 rounded-lg m-3 d-flex flex-column">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>    
        <div>    
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
      </div>
    </div>
    )
}

export default TopSection;