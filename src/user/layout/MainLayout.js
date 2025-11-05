import Header from "../components/header/Header";
import "@assets/scss/layout/_mainLayout.scss";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="container"></div>
    </div>
  );
};

export default MainLayout;
