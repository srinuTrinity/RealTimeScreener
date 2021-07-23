import Marquee from "react-marquee-slider";
const arr = [
  "The Poetry Translation Centre is very proud to partner with the Aké Arts and Books Festival to present a special series of translation workshops on the Nigerian languages of Yoruba, Igbo and Hausa.The Poetry Translation Centre is very proud to partner with the Aké Arts and Books Festival to present a special series of translation workshops on the Nigerian languages of Yoruba, Igbo and Hausa.",
];
const Mark = () => (
  <Marquee velocity={30} minScale={1} direction="ltr">
    {arr.map((each) => {
      return (
        <h1
          style={{
            color: "#d6113c",
            fontSize: 18,
            fontFamily: "Poppins",
          }}
        >
          {each}
        </h1>
      );
    })}
  </Marquee>
);

const Slider = () => {
  return (
    <div
      style={{
        height: "60px",
        width: "93%",
        backgroundColor: "#54ebbe",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 16,
        padding: 16,
        borderStyle: "solid",
        borderColor: "grey",
        //clipPath:
        //"polygon(0 10%,10% 0,90% 0,100% 10%, 100% 90%,90% 100%,10% 100%, 0% 90%, 0% 10%)",
      }}
    >
      <Mark />
    </div>
  );
};
export default Slider;
