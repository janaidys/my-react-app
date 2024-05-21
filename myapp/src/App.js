const family = "The Jimenez family";
const vacation = "will take their first vacation to Colombia";

const firstNum = 8;
const secondNum = 14;

const aboutMe = {
  name: "Anaidys",
  location: "Boston",
  favoriteAct: ["singing", "play with Luca", "dancing", "family cuddles"],
};

const cat = {
  color: "tan",
  numberOfKittens: 5,
  image: "https://bestfriends.org/sites/default/files/inline-images/Foster-Agave-1-byAnnika-Harley.jpg"
}

function App() {
  return (
    <div className="App">
      <h1>
        {family} {vacation}
      </h1>

      <p>
        {" "}
        {firstNum} * {secondNum} = {firstNum * secondNum}
      </p>
      <p>
        {" "}
        {firstNum} + {secondNum} = {firstNum + secondNum}
      </p>
      <p>
        {" "}
        {firstNum} - {secondNum} = {firstNum - secondNum}
      </p>
      <p>
        {" "}
        {firstNum} / {secondNum} = {firstNum / secondNum}
      </p>

      <p>
        {aboutMe.name} is from {aboutMe.location}
      </p>
      <ul>
        <li>{aboutMe.favoriteAct[0]}</li>
        <li>{aboutMe.favoriteAct[1]}</li>
        <li>{aboutMe.favoriteAct[2]}</li>
        <li>{aboutMe.favoriteAct[3]}</li>
      </ul>

      <figure>
        <img src={cat.image} alt="cat-img"></img>
        <figcaption>
          This photo has {cat.numberOfKittens} kittens nursing from a {cat.color} cat.
        </figcaption>
      </figure>

      {/* I just made a comment */}
    </div>
  );
}

export default App;
