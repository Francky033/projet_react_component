import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const articles = [
    {
      title: "Article 1",
      price: 10,
      isPublished: true,
    },

    {
      title: "Article 2",
      price: 20,
      isPublished: false,
    },

    {
      title: "Article 3",
      price: 30,
      isPublished: true,
    },

    {
      title: "Article 4",
      price: 40,
      isPublished: false,
    },

    {
      title: "Article 5",
      price: 50,
      isPublished: true,
    },

    {
      title: "Article 6",
      price: 60,
      isPublished: false,
    },

    {
      title: "Article 7",
      price: 70,
      isPublished: true,
    },

    {
      title: "Article 8",
      price: 80,
      isPublished: false,
    },

    {
      title: "Article 9",
      price: 90,
      isPublished: true,
    },

    {
      title: "Article 10",
      price: 100,
      isPublished: false,
    },
  ];

  return (
    <>
      <Header />
      <main>
        <img src="https://th.bing.com/th/id/R.99489b807ef36a2e783a1568c41c0923?rik=oDwP3BEQzwkMhw&riu=http%3a%2f%2fwww.maximumwall.com%2fwp-content%2fuploads%2f2015%2f09%2ffonds-ecran-animaux-droles-15.jpg&ehk=37tufk1A1iay0MaP%2bvELiTF66sxVvOvSDKcb3b6iE6s%3d&risl=&pid=ImgRaw&r=0"></img>
      </main>
      <Footer />
    </>
  );
}

export default Home;