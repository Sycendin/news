import React, { Fragment } from "react";
import Image from "react-bootstrap/Image";
const BannerPage = () => {
  return (
    <Fragment>
      <div
        style={{
          margin: "auto",
          width: "66%",
          backgroundColor: " rgb(212, 214, 215)",
          borderRadius: 10,
        }}
      >
        <h1
          style={{
            textDecoration: "underline",
            textAlign: "left",
            marginBottom: 30,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          New Release: Elden Ring
        </h1>
        <h3
          style={{
            textAlign: "left",
            marginBottom: 30,
            marginLeft: 10,
          }}
        >
          Prepare to die many times.
        </h3>
        <img
          src={process.env.PUBLIC_URL + "/images/background3.jpg"}
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            height: 400,
          }}
        ></img>

        <div
          className="block-example border-bottom border-dark"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            alignContent: "left",
            marginTop: 10,
            marginBottom: 5,
            borderBottom: "3px solid rgb(212, 212, 212)",
          }}
        >
          <Image
            src={
              "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
            }
            roundedCircle={true}
            style={{
              width: 50,
              height: 50,
              marginLeft: 5,
            }}
          ></Image>
          <p style={{ marginTop: 10, marginLeft: 5, fontWeight: "bold" }}>
            By John Doe
          </p>
          <p style={{ marginTop: 10, marginLeft: 5 }}>
            | Posted: March 22, 2022
          </p>
        </div>

        <h3>
          THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to
          brandish the power of the Elden Ring and become an Elden Lord in the
          Lands Between.<br></br>
          <br></br> • A Vast World Full of Excitement A vast world where open
          fields with a variety of situations and huge dungeons with complex and
          three-dimensional designs are seamlessly connected. As you explore,
          the joy of discovering unknown and overwhelming threats await you,
          leading to a high sense of accomplishment.<br></br>
          <br></br> • Create your Own Character In addition to customizing the
          appearance of your character, you can freely combine the weapons,
          armor, and magic that you equip. You can develop your character
          according to your play style, such as increasing your muscle strength
          to become a strong warrior, or mastering magic. <br></br>
          <br></br>• An Epic Drama Born from a Myth A multilayered story told in
          fragments. An epic drama in which the various thoughts of the
          characters intersect in the Lands Between. <br></br>
          <br></br>• Unique Online Play that Loosely Connects You to Others In
          addition to multiplayer, where you can directly connect with other
          players and travel together, the game supports a unique asynchronous
          online element that allows you to feel the presence of others.
        </h3>
      </div>
    </Fragment>
  );
};
export default BannerPage;
