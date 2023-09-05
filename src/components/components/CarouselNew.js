import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Clock from "./Clock";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 260px;
  overflow: hidden;
  border-radius: 8px;
`;



class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );
  }
}

export default class Responsive extends Component {


  constructor(props) {
      super(props);
      this.state = { deadline: "January, 10, 2022", deadline1: "February, 10, 2022", deadline2: "February, 1, 2022" };
    }

  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      adaptiveHeight: 300,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };
    return (
        <div className='nft'>
          <Slider {...settings}>
            <CustomSlide className='itm' index={1}>
            <div className="d-item">
              <div className="nft__item">                
                  <div className="nft__item_wrap">
                    <Outer>
                      <span>
                          <video width="100%" height="240px" className="lazy nft__item_preview" controls >
                          <source src={"./img/author/flagship-video1.mp4"} type="video/mp4"/>
                          </video>
                      </span>
                    </Outer>
                  </div>
                 
              </div>
            </div>
            </CustomSlide>

            <CustomSlide className='itm' index={2}>
            <div className="d-item">
              <div className="nft__item">                
                  <div className="nft__item_wrap">
                    <Outer>
                      <span>
                          <video width="100%" height="240px" className="lazy nft__item_preview" controls >
                          <source src={"./img/author/flagship-video2.mp4"} type="video/mp4"/>
                          </video>
                      </span>
                    </Outer>
                  </div>
                 
              </div>
            </div>
            </CustomSlide>

            <CustomSlide className='itm' index={2}>
            <div className="d-item">
              <div className="nft__item">
                
                 
                  <div className="nft__item_wrap">
                    <Outer>
                      <span>
                          <video width="100%" height="240px" className="lazy nft__item_preview" controls >
                          <source src={"./img/author/flagship-video3.mp4"} type="video/mp4"/>
                          </video>
                      </span>
                    </Outer>
                  </div>
                 
              </div>
            </div>
            </CustomSlide>

            <CustomSlide className='itm' index={2}>
            <div className="d-item">
              <div className="nft__item">
                
                 
                  <div className="nft__item_wrap">
                    <Outer>
                      <span>
                          <video width="100%" height="240px" className="lazy nft__item_preview" poster={""} controls >
                          <source src={"./img/author/flagship-video4.mp4"} type="video/mp4"/>
                          </video>
                      </span>
                    </Outer>
                  </div>
                 
              </div>
            </div>
            </CustomSlide>

           

          </Slider>
        </div>
    );
  }
}
