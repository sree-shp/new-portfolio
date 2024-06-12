import instagram from "../../assets/instagram-footer.png";
import linkedin from "../../assets/linkedin-footer.png";
import github from "../../assets/github-footer.png";
import email from "../../assets/email-footer.png";

function Footer() {
  return (
    <>
      <div className="text-[#666666] text-lg ">Sreehari Prasad ©</div>
      <div className="flex gap-5">
        <a href="https://www.instagram.com/sree_shp/">
          <img
            src={instagram}
            alt=""
            className="w-[32px] hover:scale-125 transition-transform"
          />
        </a>
        <a href="https://www.linkedin.com/in/sreehari-prasad-k-819a49235/">
          <img
            src={linkedin}
            alt=""
            className="w-[32px] hover:scale-125 transition-transform"
          />
        </a>
        <a href="https://github.com/sree-shp">
          <img
            src={github}
            alt=""
            className="w-[32px] hover:scale-125 transition-transform"
          />
        </a>
        <a href="mailto:ksreehariprasad25@gmail.com">
          <img
            src={email}
            alt=""
            className="w-[32px] hover:scale-125 transition-transform"
          />
        </a>
      </div>
    </>
  );
}

export default Footer;
