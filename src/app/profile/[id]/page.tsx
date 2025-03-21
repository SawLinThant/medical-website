import Profile from "@/modules/account/profile";

type paramsType = Promise<{ id: string }>;

const UserProfile = async (props: { params: paramsType }) => {
  const { id } = await props.params;
    try {

      return (
        <main className="w-full flex flex-col items-center">
           <Profile id={id}/>
        </main>
      );
    } catch (error) {
      console.error("Error fetching data:", error);
      return <div>Error loading data</div>;
    }
  };

  export default UserProfile