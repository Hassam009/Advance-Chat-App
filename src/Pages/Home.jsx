import Layout from '../Components/Styles/Layout/AppLayout';

const Home = () => {
  return (
    <div>
      <h1>Hi I am from Home</h1>
    </div>
  );
};

const HomeWithLayout = Layout(Home);

// Assign display name to the resulting component
HomeWithLayout.displayName = `HomeWithLayout`;

export default HomeWithLayout;
