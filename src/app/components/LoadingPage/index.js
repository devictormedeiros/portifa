import "./style.scss";

const LoadingPage = () => {
    return (
      <div className="fixed loading-page h-lvh w-lvw flex items-center justify-center z-[999] bg-black-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          width="200"
          height="200"
          style={{ shapeRendering: "auto", display: "block" }}
        >
          <g>
            <circle style={{ fill: "var(--primary)" }} r="16" cy="26" cx="50">
              <animate
                values="26;74;26"
                keyTimes="0;0.5;1"
                keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9"
                calcMode="spline"
                repeatCount="indefinite"
                dur="1s"
                attributeName="cy"
              />
            </circle>
          </g>
        </svg>
      </div>
    );
  };
  
  export default LoadingPage;
  