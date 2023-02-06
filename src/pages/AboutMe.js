import img from "../img/devimage.png";
export const AboutMe = () => {
  return (
    <section className="container">
      <article className="about-title">about title</article>
      <div className="img"></div>
      <div>
        <img src={img} alt="" />

        <article className="about-info"> about info</article>
        <article className="about-details">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ex velit accusantium? Fugit, velit alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ex velit accusantium? Fugit, velit alias.
          </p>
        </article>
      </div>
    </section>
  );
};
