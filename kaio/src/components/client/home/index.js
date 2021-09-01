import ListCar from './list-cart/list-car'
const HomePage = () => {

    return (
        <div className="">
            <div>
            
            <section className="find_section layout_padding2">
                <div className="container">
                <form action>
                    <div>
                    <h5>
                        Find Your car
                    </h5>
                    </div>
                    <div className=" form-row">
                    <div className="col-sm-4">
                        <input type="text" className="form-control" placeholder="Keyword " />
                    </div>
                    <div className="col-sm-4">
                        <select name id className="form-control">
                        <option value>Make All</option>
                        <option value>Option 1</option>
                        <option value>Option 2</option>
                        <option value>Option 3</option>
                        </select>
                    </div>
                    <div className="col-sm-4">
                        <select name id className="form-control">
                        <option value>Model</option>
                        <option value>Option 1</option>
                        <option value>Option 2</option>
                        <option value>Option 3</option>
                        </select>
                    </div>
                    </div>
                    <div className="d-flex justify-content-center justify-content-sm-end">
                    <button type="submit" className>
                        Search
                    </button>
                    </div>
                </form>
                </div>
            </section>
        
            <ListCar />
            
         
            <section className="about_section layout_padding">
                <div className="container">
                <div className="heading_container">
                    <h2>
                    About Showroom
                    </h2>
                    <hr />
                </div>
                <div>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking
                    at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, It
                    is a long established fact that a reader will be distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, It is
                    a long established fact that a reader will be distracted by the readable content of a page when looking at its
                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    </p>
                </div>
                <div>
                    <a href>
                    Read More
                    </a>
                </div>
                </div>
            </section>

            <section className="contact_section">
                <div className="container">
                <div className="heading_container">
                    <h2>
                    Contact Us
                    </h2>
                    <hr />
                </div>
                <div className="layout_padding">
                    <div className="row">
                    <div className="col-md-6">
                        <form action>
                        <div className="contact_form-container">
                            <div>
                            <div>
                                <input type="text" placeholder="Name" />
                            </div>
                            <div>
                                <input type="text" placeholder="Phone Number" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="mt-5">
                                <input type="text" placeholder="Message" />
                            </div>
                            <div className="mt-5 d-flex justify-content-center justify-content-sm-start">
                                <button type="submit">
                                Send
                                </button>
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="contact_img-box">
                        <img src="images/car-service.jpg" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
          
            <section className="info_section ">
                <div className="d-flex justify-content-center">
                <div className="social_container">
                    <div className="number-box">
                    <a href>
                        <img src="images/phone.png" alt="" />
                        <h6>
                        +01 123567894
                        </h6>
                    </a>
                    </div>
                    <div className="mail-box">
                    <a href>
                        <img src="images/mail.png" alt="" />
                        <h6>
                        demo@gmail
                        </h6>
                    </a>
                    </div>
                    <div className="social-box">
                    <div className="box">
                        <a href>
                        <img src="images/facebook-logo.png" alt="" />
                        </a>
                    </div>
                    <div className="box">
                        <a href>
                        <img src="images/twitter.png" alt="" />
                        </a>
                    </div>
                    <div className="box">
                        <a href>
                        <img src="images/linkedin.png" alt="" />
                        </a>
                    </div>
                    <div className="box">
                        <a href>
                        <img src="images/instagram-logo.png" alt="" />
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="container layout_padding2 mobile_padding-top-none ">
                <div className="row">
                    <div className="col-md-3">
                    <h5>
                        Contact Info
                    </h5>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                        some form, by injected humour
                    </p>
                    </div>
                    <div className="col-md-3">
                    <h5>
                        open hours
                    </h5>
                    <p>
                        Monday 10:00 am to 08:00 pm <br />
                        Sunday : Off <br />
                        Monday 10:00 am to 08:00 pm <br />
                        Monday 10:00 am to 08:00 pm <br />
                        Monday 10:00 am to 08:00 pm
                    </p>
                    </div>
                    <div className="col-md-3">
                    <h5>
                        Useful link
                    </h5>
                    <ul>
                        <li>
                        <a href>
                            There are many
                        </a>
                        </li>
                        <li>
                        <a href>
                            variations of
                        </a>
                        </li>
                        <li>
                        <a href>
                            passages of Lorem
                        </a>
                        </li>
                        <li>
                        <a href>
                            Ipsum available,
                        </a>
                        </li>
                        <li>
                        <a href>
                            but the injected
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-md-3">
                    <div className="subscribe_container">
                        <h5>
                        Newsletter
                        </h5>
                        <div className="form_container">
                        <form action>
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit">
                            Subscribe
                            </button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
          
         </div>

        </div>
    )
}

export default HomePage
