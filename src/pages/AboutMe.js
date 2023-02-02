export const AboutMe = () => {
  return (
    <section class="section about">
      <div class="section-center about-center">
        {/* <!-- about img --> */}
        <article class="about-img">
          <img src="../img/devimage.jpeg" class="hero-photo" alt="about img" />
        </article>
        {/* <!-- about info --> */}
        <article class="about-info">
          {/* <!-- section title --> */}
          <div class="section-title about-title">
            <h2>about</h2>
            <div class="underline"></div>
          </div>
          {/* <!--end of section title --> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae,
            eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet
            reiciendis possimus rerum omnis recusandae molestias error
            consequuntur, doloribus inventore reprehenderit officiis. Dolore
            aut, repellendus eius fugiat numquam cumque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae,
            eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet
            reiciendis possimus rerum omnis recusandae molestias error
            consequuntur, doloribus inventore reprehenderit officiis. Dolore
            aut, repellendus eius fugiat numquam cumque.
          </p>
          <a href="about.html" class="btn">
            about me
          </a>
        </article>
      </div>
    </section>
  );
};
