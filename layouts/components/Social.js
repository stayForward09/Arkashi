import {
  IoLogoGithub,
  IoLogoTwitter,
} from "react-icons/io5";
import {
  FaTelegramPlane,
  FaDiscord,
  FaReddit,
  FaFile
} from "react-icons/fa"


const Social = ({ source, className }) => {
  const {
    twitter,
    github,
    discord,
    reddit,
    telegram,
    file
  } = source;
  return (
    <>
      <div className={className}>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-2">
          <div></div>
          <div className="text-start pt-2">AKASHI:00000000000000000000000000000000</div>
          <ul className=" text-end">
            {twitter && (
              <li className="inline-block">
                <a
                  aria-label="twitter"
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <IoLogoTwitter />
                </a>
              </li>
            )}
            {FaTelegramPlane && (
              <li className="inline-block">
                <a
                  aria-label="telegram"
                  href={telegram}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FaTelegramPlane />
                </a>
              </li>
            )}
            {FaDiscord && (
              <li className="inline-block">
                <a
                  aria-label="discord"
                  href={discord}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FaDiscord />
                </a>
              </li>
            )}
            {FaReddit && (
              <li className="inline-block">
                <a
                  aria-label="reddit"
                  href={reddit}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FaReddit />
                </a>
              </li>
            )}
            {IoLogoGithub && (
              <li className="inline-block">
                <a
                  aria-label="github"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <IoLogoGithub />
                </a>
              </li>
            )}
            {FaFile && (
              <li className="inline-block">
                <a
                  aria-label="fafile"
                  href={file}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FaFile />
                </a>
              </li>
            )}
          </ul>
          <div className="text-start pt-2">
              <div>Copyright © 2023 by Akashi Cloud. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;
