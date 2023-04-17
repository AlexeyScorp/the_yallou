import React from 'react';

const Posts = () => {
  return (
    <div id="posts_wrap">
      <div id="posts_box">
        <div id="post_content">
          <div className="main_post">
            <div className="post_logo">
              <h2>Lorem ipsum dolor sit amet</h2>
            </div>
            <div className="post_discription">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                officia asperiores impedit perferendis! Accusantium, commodi!
              </span>
            </div>
            <div className="post_image"></div>
            <div className="post_main_date">
              <h3>25</h3>
              <p>April</p>
            </div>
          </div>
          <div className="next_post">
            <div className="post_discription add_post"></div>
            <div className="post_image add_post"></div>
          </div>
        </div>
        <div id="post_navigation"></div>
      </div>
    </div>
  );
};

export default Posts;
