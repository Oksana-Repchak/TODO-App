import { useState } from 'react';
import './RegisterView.scss';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <p className="title">Create your account</p>
      <form onSubmit={handleSubmit} className="formRegister" autoComplete="off">
        <label className="label">
          <p className="text">
            Username<span className="star">*</span>
          </p>
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className="label">
          <p className="text">
            Email address<span className="star">*</span>
          </p>
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className="label">
          <p className="text">
            Password<span className="star">*</span>
          </p>
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className="button" type="submit">
          Create account
        </button>
      </form>
    </div>
  );
}
