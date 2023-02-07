import img from "../img/devimage-5.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Stack from "@mui/material/Stack";

export const AboutMe = () => {
  return (
    <header class="hero">
      <div class="section-center hero-center">
        <article class="hero-info">
          <div class="underline"></div>
          <h1>i'm Abdiweli Ali</h1>
          <h4>junior front-End web developer</h4>
          <a href="contact.html" class="btn hero-btn">
            hire me
          </a>

          <ul class="social-icons hero-icons">
            <Stack direction="row" spacing={2} margin={2}>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <LinkedInIcon />
              </li>
              <li>
                <TwitterIcon />
              </li>
            </Stack>
          </ul>
        </article>
        <article class="hero-img">
          <img src={img} class="hero-photo" alt="herophoto" />
        </article>
      </div>
    </header>
  );
};
