interface StarPops {
  height: string;
  width: string;
  color?: string;
}

const Login = ({ height, width, color }: StarPops) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 31 24"
      fill="none"
    >
      <path
        d="M2.00171 12H16.0017M16.0017 12L12.5017 9.00002M16.0017 12L12.5017 15"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0017 7C16.0138 4.82497 16.1103 3.64706 16.8786 2.87868C17.7574 2 19.1716 2 22 2H23C25.8284 2 27.2427 2 28.1213 2.87868C29 3.75736 29 5.17157 29 8V16C29 18.8284 29 20.2426 28.1213 21.1213C27.2427 22 25.8284 22 23 22H22C19.1716 22 17.7574 22 16.8786 21.1213C16.1103 20.3529 16.0138 19.175 16.0017 17"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default Login;
