import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getBlogs,
  Open,
  Close,
} from "../../redux/features/blogsfeatures";
import { Link } from "react-scroll";
import PostComment from "./comments";
import logo from "../../imgs/logo.PNG";
import { AiOutlineDelete } from "react-icons/ai";
import { Delete } from "./delete";
function Blog({isAuth}) {
  const dispatch = useDispatch();
  const userListState = useSelector((store) => {
    return store["blogs"];
  });
  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);
  const { blogs, modalShow } = userListState;
  const modalOpen = () => {
    dispatch(Open());
  };
  const modalClose = () => {
    dispatch(Close());
  };
  return (
    <div className="blog-single gray-bg">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-8 m-15px-tb">
            {blogs.map(({ id, url, blog, state }) => {
              return (
                <article
                  className="article"
                  id={`${id}`}
                  data-aos="fade-up"
                  key={id}
                >
                  <div className="article-img">
                    <img src={url} title="" alt="" />
                  </div>
                  <div className="article-title">
                    <h3>{blog ? blog.blogTitle : ""}</h3>
                    <div className="media">
                      <div className="avatar">
                        <img src={logo} title="" alt="" />
                      </div>
                      <div className="media-body">
                        <label>Kalbo Admin</label>
                      </div>
                    </div>
                  </div>
                  <div className="article-content">
                    {state ? state.contentState.blocks.map(
                      (block)=>{
                        return(
                          <div>
                            {
                              block.type==="ordered-list-item" ? 
                              <ol>{block.text}</ol> : block.text
                            }
                          </div>
                        )
                      }
                    ):""}
                  </div>
                  {isAuth && <div className="delete">
                    <button
                      className="delete-btn"
                      onClick={modalOpen}
                    >
                      <AiOutlineDelete />
                    </button>
                    <Delete
                      show={modalShow}
                      onHide={modalClose}
                      id={id}
                      title={blog ? blog.blogTitle : ""}
                    />
                  </div>}
                </article>
              );
            })}
            <PostComment />
          </div>
          <div className="col-lg-4 m-15px-tb blog-aside" data-aos="fade-left">
            <div className="widget widget-latest-post">
              <div className="widget-title">
                <h3>Latest Post</h3>
              </div>
              <div className="widget-body">
                {blogs.map(({ blog, id, url }) => {
                  return (
                    <div className="latest-post-aside media" key={id}>
                      <div className="lpa-left media-body">
                        <div className="lpa-title">
                          <Link to={`${id}`}>
                            <h5>{blog ? blog.blogTitle : ""}</h5>
                          </Link>
                        </div>
                        <div className="lpa-meta">
                          <a className="name" href="/">
                            Kalbo admin
                          </a>
                        </div>
                      </div>
                      <div className="lpa-right">
                        <a href={`${id}`}>
                          <img src={url} title="" alt="" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
