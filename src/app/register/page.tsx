import RegisterForm from "@/modules/auth/register-form";


const Login: React.FC = async () => {
  
  try {
    return (
      <section>
        
      </section>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data</div>;
  }
};
export default Login;
