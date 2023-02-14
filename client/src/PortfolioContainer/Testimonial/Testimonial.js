import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Peers and Connections Say About Me"}
      />
      <section className="testimonial-section fadeIn" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      They were able to take our Avatar innovations idea, "Clean
                      Collective", and build an MVP getting it one step closer
                      to commercialization. The investment of time has had a
                      rippling effect of impact, including but not limited to
                      the following.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src="img/testimonial/derrek.png"
                      alt="no internet connection"
                    ></img>
                    <h5>Derrek Wenisch</h5>
                    <p>Sr. Business Development Manager - Vantage Circle</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I had the pleasure of working with Andy for our SAIT
                      Capstone Project and he exceeded my expectations in every
                      way. Andy took charge of styling and front-end development
                      and delivered outstanding results. He has a keen eye for
                      detail and a talent for creating clean, modern designs.
                      Great communicator and collaborator, it was a joy to work
                      with him. I would highly recommend Andy for any project
                      that requires his skills and would love the opportunity to
                      work with him again in the future.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src="img/testimonial/julian.png"
                      alt="no internet connection"
                    ></img>
                    <h5>Julian Lee</h5>
                    <p>SAIT Peer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Andy is a highly motivated and dedicated individual who
                      consistently delivers high-quality work on time. They have
                      excellent communication skills, which allow them to
                      effectively collaborate with team members and communicate
                      with stakeholders. They are also a quick learner and are
                      always eager to expand their knowledge and skills.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src="img/testimonial/david.jpeg"
                      alt="no internet connection"
                    ></img>
                    <h5>David Khuu</h5>
                    <p>Software Developer - RPM Software</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      It was a pleasure working with you. You've got an
                      incredible talent. Especially when it comes to UX/UI
                      design and front-end development. Hope we're able to work
                      together again some day.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src="img/testimonial/jimmy.jpg"
                      alt="no internet connection"
                    ></img>
                    <h5>Jimmy Van</h5>
                    <p>SAIT Peer</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
