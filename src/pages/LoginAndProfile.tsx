import { useSelector } from "react-redux";
import LoginForm from "../components/login/loginFomr";
import Layout from "../components/utils/layout";
import { RootState } from "../store";
import Profile from "../components/login/Profile";

export default function LoginAndProfile() {
  const Session = useSelector((state: RootState) => state.session.isLogin);
  return (
    <div>
      <Layout>{Session ? <Profile /> : <LoginForm />}</Layout>
    </div>
  );
}
