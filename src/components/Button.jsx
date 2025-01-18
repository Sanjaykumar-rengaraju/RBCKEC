import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Button = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/upc-events');
  };
  return (
    <StyledWrapper>
      <button onClick={handleRedirect}>
        R E G I S T E R
        <div className="clip">
          <div className="corner leftTop" />
          <div className="corner rightBottom" />
          <div className="corner rightTop" />
          <div className="corner leftBottom" />
        </div>
        <span className="arrow rightArrow" />
        <span className="arrow leftArrow" />
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  --color: #2761c3;

  button {
    position: relative;
    width: 10rem;
    height: 4rem;
    outline: none;
    transition: 0.1s;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    font-weight:900;
    color: #fff;
    cursor: pointer;
  }

  .clip {
    position: absolute;
    top: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border: 5px double var(--color);
    box-shadow: inset 0px 0px 15px #195480;
    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
    animation: loopColor 3s infinite;
  }

  .arrow {
    position: absolute;
    transition: 0.2s;
    background-color: var(--arrowColor);
    top: 35%;
    width: 11%;
    height: 30%;
    will-change: transform, background-color;
    animation: loopArrowColor 3s infinite;
  }

  .leftArrow {
    left: -13.5%;
    clip-path: polygon(100% 0, 100% 100%, 0 50%);
  }

  .rightArrow {
    left: 102%;
    clip-path: polygon(100% 49%, 0 0, 0 100%);
  }

  button:hover .rightArrow {
    left: -15%;
    animation: slideRight 0.6s ease-in-out infinite alternate, loopArrowColor 3s infinite;
  }

  button:hover .leftArrow {
    left: 103%;
    animation: slideLeft 0.6s ease-in-out infinite alternate, loopArrowColor 3s infinite;
  }

  .corner {
    position: absolute;
    width: 4em;
    height: 4em;
    background-color: var(--color);
    box-shadow: inset 1px 1px 8px #2781c3;
    transform: scale(1) rotate(45deg);
    transition: 0.2s;
    will-change: transform, box-shadow;
  }

  .rightTop {
    top: -1.98em;
    left: 91%;
  }

  .leftTop {
    top: -1.96em;
    left: -3.0em;
  }

  .leftBottom {
    top: 2.10em;
    left: -2.15em;
  }

  .rightBottom {
    top: 45%;
    left: 88%;
  }

  button:hover .clip {
    --color: #27c39f;
  }

  @keyframes loopColor {
    0% {
      --color: #2761c3;
    }
    25% {
      --color: #27c39f;
    }
    50% {
      --color: #ff9800;
    }
    75% {
      --color: #9c27b0;
    }
    100% {
      --color: #2761c3;
    }
  }

  @keyframes loopArrowColor {
    0% {
      --arrowColor: #2761c3;
    }
    25% {
      --arrowColor: #27c39f;
    }
    50% {
      --arrowColor: #ff9800;
    }
    75% {
      --arrowColor: #9c27b0;
    }
    100% {
      --arrowColor: #2761c3;
    }
  }

  @keyframes slideLeft {
    from {
      transform: translate(0px);
    }
    to {
      transform: translateX(10px);
    }
  }

  @keyframes slideRight {
    from {
      transform: translate(0px);
    }
    to {
      transform: translateX(-10px);
    }
  }
`;

export default Button;