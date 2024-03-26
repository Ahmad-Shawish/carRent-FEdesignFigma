import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="left">
          <h1>MORENT</h1>
          <span>
            Our vision is to provide convenience <br />
            and help increase your sales business
          </span>
        </div>
        <div className="right">
          <div className="about">
            <h2>About</h2>
            <span>How it works</span>
            <span>Featured</span>
            <span>Partnership</span>
            <span>Business Relation</span>
          </div>
          <div className="community">
            <h2>Community</h2>
            <span>Events</span>
            <span>Blog</span>
            <span>Podcast</span>
            <span>Invite a friend</span>
          </div>
          <div className="socials">
            <h2>Socials</h2>
            <span>Dicord</span>
            <span>Instagram</span>
            <span>Twitter</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <div className="left">
          <p>©2022 MORENT. All rights reserved</p>
        </div>
        <div className="right">
          <p>Privacy & Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
