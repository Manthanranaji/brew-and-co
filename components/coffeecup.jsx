// components/Coffee.jsx
const Coffee = () => {
    return (
      <div className="flex justify-center items-center">
        <svg
          width="360"
          height="360"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Saucer */}
          <ellipse cx="90" cy="155" rx="62" ry="10" fill="#D9C8B4" />
          <ellipse cx="90" cy="152" rx="55" ry="7" fill="#C4A882" />
  
          {/* Cup body */}
          <path
            d="M45 80 L55 148 Q90 158 125 148 L135 80 Z"
            fill="#C47E3A"
          />
  
          {/* Cup shading */}
          <path
            d="M45 80 L55 148 Q72 154 80 148 L88 80 Z"
            fill="#A3621C"
            fillOpacity="0.3"
          />
  
          {/* Cup highlight */}
          <path
            d="M95 82 L92 145"
            stroke="#FAF6F1"
            strokeWidth="2"
            strokeOpacity="0.2"
          />
  
          {/* Cup rim */}
          <ellipse cx="90" cy="80" rx="45" ry="10" fill="#E8A95C" />
          <ellipse cx="90" cy="80" rx="38" ry="7" fill="#2C1A0E" fillOpacity="0.85" />
  
          {/* Coffee surface */}
          <ellipse cx="90" cy="80" rx="34" ry="6" fill="#5C3D2E" />
  
          {/* Latte art */}
          <ellipse cx="90" cy="80" rx="18" ry="3" fill="#C47E3A" fillOpacity="0.6" />
          <path
            d="M80 79 Q90 75 100 79"
            stroke="#FAF6F1"
            strokeWidth="1.2"
            fill="none"
            strokeOpacity="0.5"
          />
  
          {/* Handle */}
          <path
            d="M135 95 C165 95, 165 130, 135 130"
            stroke="#A3621C"
            strokeWidth="9"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M135 95 C158 95, 158 130, 135 130"
            stroke="#E8A95C"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
  
          {/* Steam */}
          <path
            d="M68 55 C63 38, 75 32, 70 15"
            stroke="#8A6350"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            strokeOpacity="0.6"
          />
          <path
            d="M88 50 C83 33, 95 27, 90 10"
            stroke="#8A6350"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            strokeOpacity="0.6"
          />
          <path
            d="M108 55 C103 38, 115 32, 110 15"
            stroke="#8A6350"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            strokeOpacity="0.6"
          />
        </svg>
      </div>
    );
  };
  
  export default Coffee;