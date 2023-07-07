// Data

const colors = [

"#8dc6ff",
"#ff6f3c",
"#ff9a3c",
"#ffc93c",
"#dfd3c3"

];


const getRandomColor = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const skillsData = [
{
  name: "Cybersecurity",
  emoji: "👨🏻‍💻",
  bgColor: getRandomColor(colors) },

{
  name: "Python",
  emoji: "🐍",
  bgColor: getRandomColor(colors) },

{
  name: "Arduino",
  emoji: "📟",
  bgColor: getRandomColor(colors) },

{
  name: "Web Development",
  emoji: "🌐",
  bgColor: getRandomColor(colors) },

{
  name: "Linux",
  emoji: "🐧",
  bgColor: getRandomColor(colors) },

{
  name: "Robotics",
  emoji: "🤖",
  bgColor: getRandomColor(colors) },

  {
  
  name: "Tryhackme",
  emoji: "👾",
  bgColor: getRandomColor(colors) },

  {
  
    name: "Back-End Development",
    emoji: "🖧",
    bgColor: getRandomColor(colors) }


];



// End of data

function Avatar() {
  return /*#__PURE__*/(
    React.createElement("img", {
      className: "avatar",
      src: "assets/img/profile2.jpg",
      alt: "Nick Ber" }));


}

function Intro() {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("h1", null, "Nikolas Bermparis"), /*#__PURE__*/
    React.createElement("p", null, "An aspiring university student from Greece with a passion for Artificial Intelligence , Cybersecurity and computer technology as a whole. While I primarily work on building the needed skills , I'm starting to dip my toes into the work of a software developer. During my free time , i usually play guitar, read books , create fun projects and play tennis.")));









}

function Skill({ name, emoji, bgColor }) {
  return /*#__PURE__*/(
    React.createElement("p", { className: "skill", style: { backgroundColor: bgColor } },
    name, " ", /*#__PURE__*/React.createElement("span", null, emoji)));


}

function SkillsList() {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("ul", { className: "skill-list" },
    skillsData.map((skill) => /*#__PURE__*/
    React.createElement(Skill, {
      key: skill.name,
      name: skill.name,
      emoji: skill.emoji,
      bgColor: skill.bgColor })))));





}

function App() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "card" }, /*#__PURE__*/
    React.createElement(Avatar, null), /*#__PURE__*/
    React.createElement("div", { className: "data" }, /*#__PURE__*/
    React.createElement(Intro, null), /*#__PURE__*/
    React.createElement(SkillsList, null))));



}

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render( /*#__PURE__*/
React.createElement(React.StrictMode, null, /*#__PURE__*/
React.createElement(App, null)));