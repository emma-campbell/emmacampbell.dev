import React from "react";
import styled from "styled-components";

import BannerImg from "../../assets/banner-img.png";

// STYLED DIVS
// =============================================================================

const StyledHero = styled.section.attrs({
  className: "bg-green-light max-w-8xl pt-24",
})`
  position: relative;
`;

const HeroContent = styled.div.attrs({
  className: "flex items-center justify-center space-x-8",
})``;

const Slant = styled.div.attrs({
  className: "bg-green-light h-full",
})`
  & svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10vw;
    fill: #f2f8fd;

    & polygon {
      width: 100%;
    }
  }
`;

const HeroText = styled.div.attrs({
  className: "z-30",
})``;

const ButtonLinks = styled.div.attrs({
  className: "flex pt-6 justify-between w-1/2",
})`
    & svg {
        height: 80%;
        width: auto;
    }
`;

const BannerImage = styled.img.attrs({
  className: "h-110 z-30",
})``;
// =============================================================================

const Hero = () => {
  return (
    <StyledHero>
      <Slant>
        {" "}
        {/* SVG SLANT */}
        <svg viewBox="0,0,100,100" preserveAspectRatio="none">
          <polygon width="100%" points="0,80 100,20 100,100 0,100" />
        </svg>
      </Slant>
      <HeroContent>
        <HeroText>
          {/* BANNER TEXT */}
          <h1 className="text-6xl text-white">Hi, my name is Emma!</h1>
          <p className="text-2xl font-light text-white">
            Developer focused on engineering highly beautiful and
          </p>
          <p className="text-2xl font-light text-white">
            functional web experiences.
          </p>
          {/* BANNER LINKS */}
          <ButtonLinks>
            <a>
              <svg
                width="82"
                height="77"
                viewBox="0 0 82 77"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.7012 0C18.2255 0 0 17.5915 0 39.2927C0 56.6532 11.6621 71.3818 27.834 76.5774C29.8681 76.9411 30.6149 75.725 30.6149 74.6872C30.6149 73.7502 30.5772 70.655 30.5596 67.3717C19.2365 69.7486 16.8472 62.7357 16.8472 62.7357C14.9957 58.194 12.3281 56.9864 12.3281 56.9864C8.63523 54.5476 12.6064 54.5977 12.6064 54.5977C16.6935 54.8749 18.8456 58.6469 18.8456 58.6469C22.4757 64.6539 28.3671 62.9172 30.6897 61.9132C31.055 59.3737 32.1098 57.6403 33.2738 56.6591C24.2335 55.6655 14.7302 52.2963 14.7302 37.2405C14.7302 32.9506 16.3201 29.4454 18.9238 26.6938C18.5012 25.7041 17.108 21.7077 19.3181 16.2954C19.3181 16.2954 22.7359 15.2393 30.5138 20.323C33.7604 19.4524 37.2423 19.0158 40.7012 19.0009C44.1602 19.0158 47.6447 19.4524 50.8974 20.323C58.6659 15.2393 62.079 16.2954 62.079 16.2954C64.2945 21.7077 62.9006 25.7041 62.478 26.6938C65.0877 29.4454 66.6669 32.9506 66.6669 37.2405C66.6669 52.3321 57.1454 55.6551 48.0822 56.6278C49.542 57.8472 50.8429 60.2384 50.8429 63.9043C50.8429 69.1617 50.7957 73.393 50.7957 74.6872C50.7957 75.7328 51.5283 76.958 53.5914 76.5722C69.7545 71.3707 81.4018 56.6474 81.4018 39.2927C81.4018 17.5915 63.179 0 40.7012 0ZM15.2439 55.9733C15.1543 56.1685 14.8362 56.227 14.5464 56.093C14.2511 55.9648 14.0853 55.6987 14.181 55.5028C14.2687 55.3018 14.5875 55.2458 14.882 55.3805C15.1779 55.5087 15.3464 55.7774 15.2439 55.9733ZM17.246 57.6978C17.0519 57.8716 16.6724 57.7909 16.415 57.5163C16.1487 57.2424 16.0988 56.876 16.2957 56.6997C16.4958 56.526 16.8638 56.6073 17.1307 56.8812C17.397 57.1584 17.4489 57.5221 17.246 57.6978ZM18.6195 59.9044C18.3701 60.0716 17.9623 59.9148 17.7102 59.5654C17.4609 59.216 17.4609 58.7969 17.7156 58.6291C17.9684 58.4612 18.3701 58.6121 18.6255 58.9589C18.8742 59.3142 18.8742 59.7332 18.6195 59.9044ZM20.9423 62.4599C20.7192 62.6974 20.2441 62.6336 19.8963 62.3096C19.5404 61.9927 19.4413 61.5431 19.6651 61.3056C19.8909 61.0674 20.3687 61.1344 20.7192 61.4559C21.0724 61.7721 21.1802 62.225 20.9423 62.4599ZM23.9444 63.3226C23.846 63.6303 23.3883 63.7702 22.9273 63.6394C22.467 63.5047 22.1657 63.1443 22.2587 62.8333C22.3544 62.5235 22.8141 62.3778 23.2785 62.5177C23.7381 62.6517 24.0401 63.0096 23.9444 63.3226ZM27.3608 63.6885C27.3723 64.0125 26.9814 64.2813 26.4975 64.2871C26.0108 64.2975 25.6172 64.0353 25.6118 63.7165C25.6118 63.3892 25.994 63.1231 26.4806 63.1153C26.9645 63.1061 27.3608 63.3664 27.3608 63.6885ZM30.7171 63.5643C30.7751 63.8805 30.4388 64.2052 29.9582 64.2917C29.4858 64.375 29.0483 64.1798 28.9883 63.8662C28.9297 63.5422 29.2721 63.2175 29.7439 63.1335C30.2251 63.0529 30.6558 63.2429 30.7171 63.5643Z"
                  fill="#264653"
                />
              </svg>
            </a>
            <a>
              <svg
                width="79"
                height="76"
                viewBox="0 0 79 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M66.5099 64.5557H54.9656V47.0099C54.9656 42.8259 54.8887 37.4399 48.9614 37.4399C42.9488 37.4399 42.0288 41.9985 42.0288 46.7053V64.5545H30.4845V28.4732H41.567V33.4041H41.7222C43.982 29.6543 48.1838 27.4146 52.6568 27.5758C64.3574 27.5758 66.5148 35.045 66.5148 44.7621L66.5099 64.5557ZM17.4587 23.5412C13.7588 23.5418 10.7589 20.6314 10.7582 17.0406C10.7575 13.4497 13.7564 10.5383 17.4563 10.5376C21.1562 10.537 24.1561 13.4474 24.1568 17.0382C24.1571 18.7626 23.4516 20.4165 22.1955 21.636C20.9393 22.8556 19.2355 23.5409 17.4587 23.5412ZM23.2308 64.5557H11.6745V28.4732H23.2308V64.5557ZM72.2653 0.133156H5.87352C2.7357 0.0987898 0.162509 2.53813 0.124214 5.5834V70.2849C0.161198 73.3316 2.73419 75.7733 5.87352 75.7414H72.2653C75.4108 75.7792 77.9939 73.3376 78.0374 70.2849V5.57873C77.9926 2.52745 75.4093 0.088245 72.2653 0.127997"
                  fill="#264653"
                />
              </svg>
            </a>
            <a>
              <svg
                width="81"
                height="78"
                viewBox="0 0 81 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M65.6442 22.7523C66.5096 22.7523 67.2114 22.0714 67.2114 21.2314V4.69134C67.2114 2.17542 65.1023 0.128555 62.5099 0.128555H5.46503C2.87263 0.128555 0.763535 2.17542 0.763535 4.69134V73.4372C0.763535 75.9531 2.87263 78 5.46503 78H62.5099C65.1023 78 67.2114 75.9531 67.2114 73.4372V62.2323C67.2114 61.3922 66.5096 60.7113 65.6442 60.7113C64.7788 60.7113 64.077 61.3922 64.077 62.2323V73.4372C64.077 74.2759 63.374 74.9581 62.5099 74.9581H5.46503C4.6009 74.9581 3.89787 74.2759 3.89787 73.4372V4.69134C3.89787 3.8527 4.6009 3.17041 5.46503 3.17041H62.5099C63.374 3.17041 64.077 3.8527 64.077 4.69134V21.2314C64.077 22.0714 64.7788 22.7523 65.6442 22.7523Z"
                  fill="#264653"
                />
                <path
                  d="M33.9872 8.34163C26.0371 8.34163 19.5692 14.6186 19.5692 22.3341C19.5692 26.3367 21.3104 29.9517 24.0955 32.5044C24.1477 32.5585 24.2032 32.6098 24.2638 32.6565C26.8294 34.9347 30.2438 36.3264 33.987 36.3264C37.7302 36.3264 41.1446 34.9345 43.7102 32.6565C43.7709 32.6098 43.8263 32.5584 43.8785 32.5044C46.664 29.9517 48.4051 26.3367 48.4051 22.3341C48.4051 14.6186 41.9373 8.34163 33.9872 8.34163ZM33.9872 33.2848C31.4281 33.2848 29.0664 32.4525 27.1714 31.0539C28.5488 28.6835 31.1191 27.2011 33.9872 27.2011C36.8552 27.2011 39.4256 28.6835 40.8029 31.0539C38.9078 32.4525 36.5462 33.2848 33.9872 33.2848ZM31.4797 21.7257V20.7371C31.4797 19.3954 32.6046 18.3037 33.9872 18.3037C35.3697 18.3037 36.4946 19.3954 36.4946 20.7371V21.7257C36.4946 23.0675 35.3697 24.1592 33.9872 24.1592C32.6046 24.1592 31.4797 23.0675 31.4797 21.7257ZM43.0673 28.8259C41.9116 27.1623 40.3098 25.8684 38.45 25.0696C39.1881 24.1439 39.629 22.9842 39.629 21.7257V20.7371C39.629 17.718 37.0982 15.2618 33.9872 15.2618C30.8762 15.2618 28.3454 17.718 28.3454 20.7371V21.7257C28.3454 22.9842 28.7862 24.1439 29.5244 25.0696C27.6646 25.8684 26.0628 27.1623 24.907 28.8259C23.5234 27.0079 22.7036 24.7626 22.7036 22.3341C22.7036 16.2959 27.7654 11.3835 33.9872 11.3835C40.209 11.3835 45.2708 16.2959 45.2708 22.3341C45.2708 24.7626 44.451 27.0079 43.0673 28.8259Z"
                  fill="#264653"
                />
                <path
                  d="M42.4499 66.7452H33.9872C33.1218 66.7452 32.42 67.4261 32.42 68.2661C32.42 69.1061 33.1218 69.787 33.9872 69.787H42.4499C43.3153 69.787 44.017 69.1061 44.017 68.2661C44.017 67.4261 43.3153 66.7452 42.4499 66.7452Z"
                  fill="#264653"
                />
                <path
                  d="M42.4499 58.2279H20.1961C19.3307 58.2279 18.629 58.9088 18.629 59.7489C18.629 60.5889 19.3307 61.2698 20.1961 61.2698H42.4499C43.3153 61.2698 44.017 60.5889 44.017 59.7489C44.017 58.9088 43.3153 58.2279 42.4499 58.2279Z"
                  fill="#264653"
                />
                <path
                  d="M42.4499 49.7108H20.1961C19.3307 49.7108 18.629 50.3917 18.629 51.2316C18.629 52.0716 19.3307 52.7525 20.1961 52.7525H42.4499C43.3153 52.7525 44.017 52.0716 44.017 51.2316C44.017 50.3917 43.3153 49.7108 42.4499 49.7108Z"
                  fill="#264653"
                />
                <path
                  d="M14.6106 41.6392C14.3192 41.3563 13.9149 41.1936 13.5012 41.1936C13.0889 41.1936 12.6845 41.3563 12.3932 41.6392C12.1017 41.9221 11.934 42.3145 11.934 42.7145C11.934 43.1145 12.1015 43.5069 12.3932 43.7898C12.6863 44.0727 13.0889 44.2354 13.5012 44.2354C13.9149 44.2354 14.3177 44.0727 14.6106 43.7898C14.9021 43.5069 15.0699 43.1145 15.0699 42.7145C15.0699 42.3145 14.9022 41.9221 14.6106 41.6392Z"
                  fill="#264653"
                />
                <path
                  d="M14.6106 50.1564C14.3177 49.8735 13.9149 49.7108 13.5012 49.7108C13.0889 49.7108 12.6863 49.8735 12.3932 50.1564C12.1017 50.4393 11.934 50.8316 11.934 51.2316C11.934 51.6316 12.1015 52.024 12.3932 52.3069C12.6863 52.5898 13.0889 52.7525 13.5012 52.7525C13.9149 52.7525 14.3177 52.5898 14.6106 52.3069C14.9021 52.024 15.0699 51.6316 15.0699 51.2316C15.0699 50.8316 14.9022 50.4393 14.6106 50.1564Z"
                  fill="#264653"
                />
                <path
                  d="M14.6106 58.6735C14.3177 58.3906 13.9149 58.2279 13.5012 58.2279C13.0889 58.2279 12.6863 58.3906 12.3932 58.6735C12.1017 58.9564 11.934 59.3489 11.934 59.7489C11.934 60.1489 12.1015 60.5413 12.3932 60.8242C12.6845 61.1071 13.0889 61.2698 13.5012 61.2698C13.9149 61.2698 14.3192 61.1071 14.6106 60.8242C14.9021 60.5413 15.0699 60.1489 15.0699 59.7489C15.0699 59.3489 14.9022 58.9564 14.6106 58.6735Z"
                  fill="#264653"
                />
                <path
                  d="M42.4499 41.1936H20.1961C19.3307 41.1936 18.629 41.8745 18.629 42.7145C18.629 43.5545 19.3307 44.2354 20.1961 44.2354H42.4499C43.3153 44.2354 44.017 43.5545 44.017 42.7145C44.017 41.8745 43.3153 41.1936 42.4499 41.1936Z"
                  fill="#264653"
                />
                <path
                  d="M77.7103 19.9492C76.1878 19.0961 74.4141 18.8695 72.7156 19.3111C71.0174 19.7527 69.5979 20.8098 68.719 22.2874L48.9975 55.4379C48.8895 55.6197 48.8212 55.8212 48.7972 56.0297L47.409 68.0974C47.34 68.6978 47.6438 69.2811 48.1829 69.5833C48.4262 69.7196 48.6966 69.7871 48.9663 69.7871C49.2941 69.7871 49.6207 69.6875 49.8958 69.4909L59.9702 62.2902C60.1443 62.1658 60.29 62.0077 60.398 61.826L80.1194 28.6754C81.9341 25.625 80.8534 21.7105 77.7103 19.9492ZM50.9213 64.9799L51.6463 58.6784L56.182 61.2199L50.9213 64.9799ZM58.4672 58.9878L52.4956 55.6417L68.3216 29.0392L74.2933 32.3852L58.4672 58.9878ZM77.405 27.1543L75.8603 29.751L69.8886 26.405L71.4334 23.8083C71.8938 23.0343 72.6372 22.4807 73.5268 22.2493C74.4166 22.0178 75.3456 22.1368 76.143 22.5836C76.9405 23.0305 77.511 23.752 77.7493 24.6153C77.9877 25.4786 77.8655 26.3803 77.405 27.1543Z"
                  fill="#264653"
                />
              </svg>
            </a>
          </ButtonLinks>
        </HeroText>
        <BannerImage src={BannerImg} alt="banner-img" />
      </HeroContent>
    </StyledHero>
  );
};

export default Hero;
