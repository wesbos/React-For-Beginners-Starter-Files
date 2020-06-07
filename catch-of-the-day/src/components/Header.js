import React from "react";

// class Header extends React.Component {
//   render() {
//     return (
//       <header className="top">
//         <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of">of</span>
//             <span className="of">the</span>
//           </span>
//           day
//         </h1>
//         <h3 className="tagline">
//           <span>{this.props.tagline}</span>
//           {/* this component instance, its properties, the property tagline. Props are like the args passed into a function. */}
//         </h3>
//       </header>
//     );
//   }
// }

// let's redo that as a stateless functional component

// arrow function means we don't have a 'this' so we do have to pass in the arg props. If we were to have multiple args passing we'd use (arg1,arg2) in place of no-() 'props'.

const Header = (props) => (
  // because this is just spitting out some HTML we can use an implicit return - it doesn't do anything but spit out this stuff:
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">of</span>
        <span className="of">the</span>
      </span>
      day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
      {/* this component instance, its properties, the property tagline. Props are like the args passed into a function. */}
    </h3>
  </header>
);

export default Header;
