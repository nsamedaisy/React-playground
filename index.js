// function Header() {
//   return (
//     <header>
//     <nav className='nav'>
//       <img src="../React-icon.svg.png" className='image' />
//       <ul className='nav-items'>
//         <li>Pricing</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   </header>
//   )
// }
// function Footer() {
//   return (
//     <footer className='foot'>
//       0 2023 Beri development. All rights reserved.
//     </footer>
//   )
// }

// function Page() {
//   return (
//     <div className='container'>
//       <Header />
//       <h1>Reasons why i'm excited to learn react</h1>
//       <ol>
//         <li>its a popular library, so ill be able to fit in with the cool kids</li>
//         <li>its composable, imparative and declarative</li>
//         <li>I'm more likely to get a job at React as a developer if I know react</li>
//       </ol>
//       <Footer />
//     </div>
//   )
// }
// ReactDOM.render(<Page />, document.getElementById('root'))



// function Element(props) {
//   const personality = props.personality
//   return (
//     <div className ='container'>
//       <h1>Hello World I'm {personality.name}</h1>
//       <ul>
//         <li>I am Learning ReactJS at {personality.add}</li>
//         <li>I'm a female and {personality.age} years old</li>
//       </ul>
//       <ol>
//         <li></li>
//       </ol>
//     </div>
//   )
// }
// ReactDOM.render(<Element personality={{name:'Daisy', add:'Rebase', age:'30'}} />, document.getElementById('root'))


// function SayHello({firstName, lastName}) {
//   return (
//     <div>
//       Hello {firstName} {lastName}!
//     </div>
//   )
// }
// SayHello.propTypes = {
//   firstName: propTypes.string.isRequired,
//   lastName: propTypes.string.isRequired,
// }
// const element = <SayHello firstName={false} />

// ReactDOM.render(element, rootElement)


// const rootElement = document.getElementById('root')
// function App() {
//   const date = new Date()
//   const hours = date.getHours()
//   let timeOfDay

//   if(hours < 12) {
//     timeOfDay = 'Morning'
//   }
//   else if(hours > 12 && hours < 17) {
//     timeOfDay = 'Afternoon'
//   }
//   else {
//     timeOfDay = 'Night'
//   }
//   return (
//     <h1>Good {timeOfDay}</h1>
//   )
// }
// ReactDOM.render(<App />, rootElement)


// //syntax of using props
// const properties = {
//   img: './images/mr-whiskerson.png',
//   name:'Mr. Whiskerson',
//   phone:'(212) 555-1234',
//   email:'mr.whiskaz@catnap.meow'
// }
// function App(props) {
//   const property = props.property
//   return (
//     <div className = 'contact-card'>
//       <img src ={props.img}/>
//       <h3>{props.name}</h3>
//       <div className='info-group'>
//         <img src ={'./images/phone-icon.png'}/>
//         <p>{props.phone}</p>
//         <div className='info-group'>
//           <img src='./images/mail-icon.png'/>
//           <p>{props.email}</p>
//         </div>
//       </div>
//     </div>
//   )
// }
// ReactDOM.render(<App property={properties}/>, rootElement)



