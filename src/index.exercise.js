// 🐨 you'll need to import React and ReactDOM up here
import React from 'react'
import ReactDOM from 'react-dom'

// 🐨 you'll also need to import the Logo component from './components/logo'
import {Logo} from './components/logo'

// Import dialog
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

function LoginForm({onSubmit, buttonText}) {
  function handleSubmit(event) {
    event.preventDefault()
    const {username, password} = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">
          Username:
          <input id="username" type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input id="password" type="password" />
        </label>
      </div>
      <div>
        <input type="submit" value={buttonText} />
      </div>
    </form>
  )
}

function App() {
  const [openModal, setOpenModal] = React.useState('none')

  function login(formData) {
    console.log('login', formData)
  }

  function register(formData) {
    console.log('register', formData)
  }

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
        <Dialog
          id="login"
          isOpen={openModal === 'login'}
          onDismiss={() => setOpenModal('none')}
          aria-label="Login"
        >
          <div>
            <button
              className="close-button"
              onClick={() => setOpenModal('none')}
            >
              <span aria-hidden>Close</span>
            </button>
          </div>
          <h3>Login</h3>
          <LoginForm onSubmit={login} buttonText="Login" />
        </Dialog>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
        <Dialog
          id="register"
          isOpen={openModal === 'register'}
          onDismiss={() => setOpenModal('none')}
          aria-label="Register"
        >
          <div>
            <button
              className="close-button"
              onClick={() => setOpenModal('none')}
            >
              <span aria-hidden>Close</span>
            </button>
          </div>
          <h3>Register</h3>
          <LoginForm onSubmit={register} buttonText="Register" />
        </Dialog>
      </div>
    </div>
  )
}

// 🐨 use ReactDOM to render the <App /> to the root element
ReactDOM.render(<App />, document.getElementById('root'))
