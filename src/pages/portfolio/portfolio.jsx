import React, { useState } from "react";
import "./scss/portfolio.css";
import { IoIosOpen } from "react-icons/io";
import blogify from "../../assets/blogify.jpg";
import bookme from "../../assets/Bookme.jpg";
import techshop from "../../assets/techshop.jpg";

function Portfolio() {
  let [showIcon, setShowIcon] = useState(false);
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h1>Portofolio</h1>
      <div className="cr portfolio_cr">
        <article className="portfolio_itm">
          {/* <div className="portofolio_itm_img"> */}
          <img src={blogify} alt="blogify" className="project_pic" />
          {/* </div> */}
          <div className="project_items">
            <h2>Blogify</h2>
            <p>
              Blogify is a platform that enabels you to share your ideas,
              experience and thoughts with the world
            </p>

            <a
              href="https://mn-blogify.netlify.app"
              className="btn"
              onMouseEnter={() => setShowIcon(!showIcon)}
              onMouseLeave={() => setShowIcon(false)}
              target={"_blank"}
              rel="noreferrer"
            >
              {showIcon ? <IoIosOpen /> : "live demo"}
            </a>
            <a
              href="https://github.com/MAMOUN-kamal-alshisani/Blogify"
              className="primary_btn"
              target={"_blank"}
              rel="noreferrer"
            >
              github
              {/* { <IoIosOpen className="demo_icon"/>  }github */}
            </a>
          </div>
        </article>
        <article className="portfolio_itm">
          {/* <div className="portofolio_itm_img"> */}
          <img src={bookme} alt="bookme" className="project_pic" />
          {/* </div> */}
          <div className="project_items">
            <h2>BookMe</h2>
            <p>
              BookMe provides an accommodation and the price that suits all
              individuals across the globe with one click only; a website for
              all!
            </p>

            <a
              href="https://bookme-application.netlify.app"
              className="btn"
              onMouseEnter={() => setShowIcon(!showIcon)}
              onMouseLeave={() => setShowIcon(false)}
              target={"_blank"}
              rel="noreferrer"
            >
              {showIcon ? <IoIosOpen /> : "live demo"}
            </a>
            <a
              href="https://github.com/MAMOUN-kamal-alshisani/bookme_frontend"
              className="primary_btn"
              target={"_blank"}
              rel="noreferrer"
            >
              github
              {/* { <IoIosOpen className="demo_icon"/>  }github */}
            </a>
          </div>
        </article>
        <article className="portfolio_itm">
          {/* <div className="portofolio_itm_img"> */}
          <img
            src={techshop}
            alt="techshop"
            className="project_pic"
          />
          {/* </div> */}
          <div className="project_items">
            <h2>TechShop</h2>
            <p>
              TechShop is an e-commerce website that provides top tier products
              for customers from trusted sources and with various discount
              rates!
            </p>

            <a
              href={'https://techshop-application.netlify.app'}
              className="btn"
              onMouseEnter={() => setShowIcon(!showIcon)}
              onMouseLeave={() => setShowIcon(false)}
              target={"_blank"}
              rel="noreferrer"
            >
              {showIcon ? <IoIosOpen /> : "live demo"}
            </a>
            <a
              href="https://github.com/MAMOUN-kamal-alshisani/e_commerce"
              className="primary_btn"
              target={"_blank"}
              rel="noreferrer"
            >
              github
              {/* { <IoIosOpen className="demo_icon"/>  }github */}
            </a>
          </div>
        </article>
        {/* <article className="portfolio_itm">
          <div className="portofolio_itm_img">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7&pid=Api&P=0&h=180"
              alt=""
              className="project_pic"
            />
          </div>
          <div className="project_items">
            <h3>project name</h3>
            <a href="github" className="btn">
              github
            </a>
            <a href="github" className="primary_btn">
              live demo
            </a>
          </div>
        </article>
        <article className="portfolio_itm">
          <div className="portofolio_itm_img">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7&pid=Api&P=0&h=180"
              alt=""
              className="project_pic"
            />
          </div>
          <div className='project_items'>
          <h3>project name</h3>
          <a href="github" className='btn'>github</a>
          <a href="github" className='primary_btn'>live demo</a>


          </div>
        </article>
        <article className="portfolio_itm">
          <div className="portofolio_itm_img">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7&pid=Api&P=0&h=180"
              alt=""
              className="project_pic"
            />
          </div>
          <div className='project_items'>
          <h3>project name</h3>
          <a href="github" className='btn'>github</a>
          <a href="github" className='primary_btn'>live demo</a>


          </div>
        </article>
        <article className="portfolio_itm">
          <div className="portofolio_itm_img">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7&pid=Api&P=0&h=180"
              alt=""
              className="project_pic"
            />
          </div>
          <div className='project_items'>
          <h3>project name</h3>
          <a href="github" className='btn'>github</a>
          <a href="github" className='primary_btn'>live demo</a>


          </div>
        </article>
        <article className="portfolio_itm">
          <div className="portofolio_itm_img">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7&pid=Api&P=0&h=180"
              alt=""
              className="project_pic"
            />
          </div>
          <div className='project_items'>
          <h3>project name</h3>
          <a href="github" className='btn'>github</a>
          <a href="github" className='primary_btn'>live demo</a>


          </div>
        </article>
        <article className="portfolio_itm">
          <div className="portofolio_itm_img">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7&pid=Api&P=0&h=180"
              alt=""
              className="project_pic"
            />
          </div>
          <div className='project_items'>
          <h3>project name</h3>
          <a href="github" className='btn'>github</a>
          <a href="github" className='primary_btn'>live demo</a>


          </div>
        </article> */}
      </div>
    </section>
  );
}

export default Portfolio;
