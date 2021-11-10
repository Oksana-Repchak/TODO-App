import { useState } from 'react';
import './LoginView.scss';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <p className="title">Sign in to Phonebook</p>
      <form onSubmit={handleSubmit} className="formLogin" autoComplete="off">
        <label className="label">
          <p className="text">Email address</p>
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className="label">
          <p className="text">Password</p>
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className="button" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}
