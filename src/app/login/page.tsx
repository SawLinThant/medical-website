import LoginForm from "@/modules/auth/login-form";

const Login: React.FC = async () => {
  
  try {
    return (
      <section>
        {/* <LoginForm/> */}
      </section>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data</div>;
  }
};
export default Login;
