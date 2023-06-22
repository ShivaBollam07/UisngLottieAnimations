import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from './animation2.json';
import loadingAnimationData from './While_Login.json';
import errorAnimationData from './cant_Login.json';
import './Login.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('@gmail.com');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      console.log('Logged in successfully');
      navigate('/home');
    } catch (error) {
      const errorMessage = error.message.replace('FirebaseError: ', '');
      setError(errorMessage.trim());
      setLoading(false);
    }
  };

  const closeErrorPopup = () => {
    setError('');
  };

  return (
    <div className="login-container">
      {loading && (
        <div className="loading-overlay">
          <Lottie
            className="loading-animation"
            options={{
              animationData: loadingAnimationData,
              loop: true,
              autoplay: true,
            }}
            height={200}
            width={200}
          />
        </div>
      )}

      {error && (
        <div className="error-overlay">
          <div className="error-popup">
            <Lottie
              className="error-animation"
              options={{
                animationData: errorAnimationData,
                loop: false,
                autoplay: true,
              }}
              height={200}
              width={200}
            />
            <p className="error-message">{error}</p>
            <button className="close-button" onClick={closeErrorPopup}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="login-form-container">
        <h2>Welcome Back</h2>
        <div className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-button" onClick={handleLogin}>
            {loading ? 'Loading...' : 'Login'}
          </button>
          <p>
            Don't have an account?{' '}
            <Link to="/">
              <span className="login-link">Sign Up here</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="lottie-container">
        <Lottie
          options={{
            animationData: animationData,
            loop: true,
            autoplay: true,
          }}
          height={400}
          width={400}
        />
      </div>
    </div>
  );
}

export default Login;
