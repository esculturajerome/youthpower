import React, { Component } from "react";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

import RecentItems from "../recent-items";

class RecentActivities extends Component {
  state = {
    posts: [
      {
        id: uuidv4(),
        image: "activity.jpg",
        title: "Post 1",
        date: "June 20, 2020",
        body:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        gallery: [
          {
            videoLink: "sample.mp4",
          },
          {
            imageLink: "post2.jpg",
          },
          {
            imageLink: "awarding_certificate.jpg",
          },
          {
            imageLink: "post2.jpg",
          },
          {
            imageLink: "learnmore.jpg",
          },
          {
            imageLink: "learnmore.jpg",
          },
        ],
      },
      {
        id: uuidv4(),
        image: "post2.jpg",
        title: "Youth POWER on the 12th Reading Season",
        date: "September 08, 2018",
        body:
          "Reopening Youth POWER on the 12th reading season was a request from Miss Vilma Batilo and was made possible through the all out support of  the English Department, through the headship of Mr. Romeo A. Mahinay and my fellow master teachers.#Bookdrive #Charityevent",
        gallery: [
          {
            imageLink: "awarding_certificate.jpg",
          },
          {
            imageLink: "awarding_certificate.jpg",
          },
          {
            imageLink: "post2.jpg",
          },
          {
            imageLink: "learnmore.jpg",
          },
        ],
      },
      {
        id: uuidv4(),
        title: "The Twenty Book Challenge",
        image: "12years.jpg",
        date: "July 29, 2018",
        body:
          "Youth POWER is a reading program that Promotes Opportunities for Worthwhile and Effective Reading through the Twenty Book Challenge. It's constant theme is 'Service to others; service to oneself'' through reading.",
        gallery: [
          {
            imageLink: "12years.jpg",
          },
          {
            imageLink: "awarding_certificate.jpg",
          },
          {
            imageLink: "post2.jpg",
          },
          {
            imageLink: "learnmore.jpg",
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Awarding of Certificate",
        image: "awarding_certificate.jpg",
        date: "March 29, 2018",
        body:
          "Awarding of certificate and service medal to outstanding monitors and Bronze medal and certificate of completion to the Grade 8 participants of Mr. Jun Macatiag, to Grade 9 participants of Mr. Isabelo Layon, Grade 7 participants of Miss Mona Dela Cruz and Mrs. Divina Asuncion. Congratulations!! Move up  book reading challenge on Youth POWER Year 12",
        gallery: [
          {
            imageLink: "12years.jpg",
          },
          {
            imageLink: "awarding_certificate.jpg",
          },
          {
            imageLink: "post2.jpg",
          },
          {
            imageLink: "learnmore.jpg",
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Post 5",
        image: "activity.jpg",
        date: "October 20, 2020",
        body:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        gallery: [
          {
            imageLink: "12years.jpg",
          },
          {
            imageLink: "awarding_certificate.jpg",
          },
          {
            imageLink: "post2.jpg",
          },
          {
            imageLink: "learnmore.jpg",
          },
        ],
      },
    ],
  };

  render() {
    var settings = {
      dots: true,
      arrow: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: false,
      pauseOnHover: true,
      adaptiveHeight: true,
      centerPadding: "60px",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const { posts } = this.state;
    return (
      <RecentWrapper>
        <div className="recent-container" id="activities">
          <div className="recent-title">
            <h1>Recent Activities</h1>
          </div>

          <div className="recent-item-container">
            <Slider {...settings}>
              {posts.map((post) => (
                <RecentItems key={post.id} postData={post} />
              ))}
            </Slider>
          </div>
        </div>
      </RecentWrapper>
    );
  }
}

const RecentWrapper = styled.div`
  .recent-item {
    padding: 0 10px;
  }

  .recent-img-container {
    background: #f5f5f5;
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center; /* vertical */
    justify-content: center; /* horizontal */
    border-radius: 10px;
  }

  .recent-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .recent-item h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #273238;
    margin: 15px 0 0 0;
  }

  .recent-item p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.28px;
    color: #42533f;
  }

  .recent-item .read-more {
    padding-left: 0;
    margin-left: 0;
    margin-top: 35px;
  }

  .slick-dots {
    bottom: -45px;
  }

  .slick-slider .slick-list,
  .slick-slider .slick-track {
    min-height: 450px;
  }

  @media only screen and (min-width: 768px) {
    .recent-container {
      padding: 0 80px;
    }

    .recent-item-container {
      justify-content: center;
      padding-top: 50px;
      min-height: 500px;
    }
  }
`;

export default RecentActivities;
