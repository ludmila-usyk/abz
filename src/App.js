import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Acquainted from './Components/Acquainted';
import Users from './Components/Users';
import Register from './Components/Register';
import Footer from './Components/Footer';
// import Modal from './Components/Modal';

function App() {
  return (
    <>
      {/* <Modal /> */}
      <Header />
      <Hero />
      <Acquainted />
      <Users />
      <Register />
      <Footer />
    </>
  );
}

export default App;






// import './App.css';
// import Header from './Components/Header';
// import Hero from './Components/Hero';
// import Acquainted from './Components/Acquainted';
// import Users from './Components/Users';
// import Register from './Components/Register';
// import Footer from './Components/Footer';
// import Modal from './Components/Modal';


// class App extends Component {
//   state = {
//     showModal: false,
//     dataModal: {
//       name: ""
//     }
//   };

//   getModal = data => {
//     this.setState({ showModal: true, dataModal: data });
//   };

//   hideModal = () => {
//     this.setState({ showModal: false });
//   };

//   render() {
//     return (
//       <div>
//         {this.props.data.map((data, key) => (
//           <div key={key}>
//             <p>Name</p>

//             <button onClick={() => this.getModal(data)}>Popup</button>
//           </div>
//         ))}

//         <Modal
//           show={this.state.showModal}
//           onHide={this.hideModal}
//           name={this.state.dataModal.name}
//         />

//          <Header />
//          <Hero />
//          <Acquainted />
//          <Users />
//          <Register />
//          <Footer />
//       </div>
//     );
//   }
// }