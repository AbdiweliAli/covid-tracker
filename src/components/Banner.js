import bannerImage from "../img/worldmap.png";
import { Form } from "./SearchForm";

export const Banner = () => {
  return (
    <>
      {" "}
      <section className="section">
        <h1>covid tracket app 2023</h1>
        <div class="text-center">
          <img src={bannerImage} class="rounded" alt="worldmap" />
          <Form />
        </div>
      </section>
    </>
  );
};
