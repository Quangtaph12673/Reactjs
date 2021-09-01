import {
  Link
} from "react-router-dom";
export function Header(){
    return (
      <div className="hero_area">
        <header className="header_section">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container">
                <Link className="navbar-brand" to="/">
                  <img src="./images/logo.png" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                  <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                    <ul className="navbar-nav  ">
                      <li className="nav-item active">
                        <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about"> About</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/car"> Cars </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/portfolio"> Portfolio </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/news"> News </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact us</Link>
                      </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                      <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit" />
                    </form> 
                  </div>
                  <div className="login_btn-container ml-0 ml-lg-4 d-flex justify-content-center">
                    <a href>
                      Login
                    </a>
                  </div>
                </div>
              </nav>
            </div>
        </header>
        <section className=" slider_section ">
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active">01</li>
      <li data-target="#carouselExampleIndicators" data-slide-to={1}>02</li>
      <li data-target="#carouselExampleIndicators" data-slide-to={2}>03</li>
      <li data-target="#carouselExampleIndicators" data-slide-to={3}>04</li>
      <li data-target="#carouselExampleIndicators" data-slide-to={4}>05</li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="slider_detail-box">
                <h1>
                  Welcome <br />
                  to our <br />
                  car <br />
                  showroom
                </h1>
                <div className="btn-box">
                  <a href className="btn-1">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="slider_detail-box">
                <h1>
                  Welcome <br />
                  to our <br />
                  car <br />
                  showroom
                </h1>
                <div className="btn-box">
                  <a href className="btn-1">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="slider_detail-box">
                <h1>
                  Welcome <br />
                  to our <br />
                  car <br />
                  showroom
                </h1>
                <div className="btn-box">
                  <a href className="btn-1">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="slider_detail-box">
                <h1>
                  Welcome <br />
                  to our <br />
                  car <br />
                  showroom
                </h1>
                <div className="btn-box">
                  <a href className="btn-1">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="slider_detail-box">
                <h1>
                  Welcome <br />
                  to our <br />
                  car <br />
                  showroom
                </h1>
                <div className="btn-box">
                  <a href className="btn-1">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel_btn-container">
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
</section>
{/* end slider section */}

    </div>
    
    )
}