import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <section className="login-wrapper">
      <Outlet />
    </section>
  );
}
export default AuthLayout;
