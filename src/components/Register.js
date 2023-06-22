import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from './animation.json';
import successAnimationData from './successAnimation.json';
import CantLogin from './Error animation.json'
import loadingAnimationData from './Creating.json';
import './Register.css';
import firebaseApp from '../firebase'; // Import the initialized Firebase app
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('@gmail.com');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const auth = getAuth(firebaseApp);

  const handleRegister = () => {
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          navigate('/login');
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message.replace('FirebaseError: Firebase', '');
        setError(errorMessage.trim());
      });
  };

  const closeErrorPopup = () => {
    setError('');
  };

  return (
    <div className="register-container">
      {loading && !success && (
        <div className="loading-overlay">
          <Lottie
            className="loading-animation"
            options={{
              animationData: loadingAnimationData,
              loop: true,
              autoplay: true,
            }}
            height={400}
            width={400}
          />
        </div>
      )}

      {success && (
        <div className="success-overlay">
          <Lottie
            className="success-animation"
            options={{
              animationData: successAnimationData,
              loop: false,
              autoplay: true,
            }}
            height={400}
            width={400}
          />
        </div>
      )}

      {error && (
        <div className="error-overlay">
          <div className="error-popup">
            <Lottie
              className="error-animation"
              options={{
                animationData: CantLogin,
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

      <div className="register-form-container">
        <h2>Create an Account</h2>
        <div className="register-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
          <button className="register-button" onClick={handleRegister}>
            {loading ? 'Loading...' : 'Register'}
          </button>
          <p>
            Already have an account? <Link to="/login" style={{color:"#6784D6"}}>Login here</Link>
          </p>
        </div>
      </div>
      <div className="lottie-container">
        <Lottie options={{ animationData }} height={400} width={400} />
      </div>
    </div>
  );
}

export default Register;
