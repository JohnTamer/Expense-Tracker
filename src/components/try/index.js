// import { useState } from "react";
// export const Try = (props) => {
//   const [name, setName] = useState("");
//   const handleSubmit = (event) => {
//     console.log("A name was submitted: " + name);
//     props.handlePrint(name);
//     event.preventDefault();
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// };
