import React, { useEffect, useState } from 'react';
import { loginUser, signinwithGoogle } from '../components/firebaseauthfcts.ts';
import '../styles/styles.css';
import { onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../components/firebaeSetup.ts';
import { useDispatch } from 'react-redux';
import { setUser } from '../storeredux/userslice.ts';
import { useNavigate } from 'react-router-dom';
import Header from '../components/navigationMenu.tsx';
import Footer from '../components/footer.tsx';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ id: user.uid, email: user.email }));
      } else {
        dispatch(setUser(null));
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [dispatch]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await loginUser({ email, password });
      if (!userCredential) {
        throw new Error('Login Failed');
      }

      dispatch(setUser({ id: userCredential.uid, email: userCredential.email }));
      const idToken = await userCredential.getIdToken(true); // Get the ID token
      localStorage.setItem('user', JSON.stringify(userCredential));
      localStorage.setItem('idToken', idToken);

      // Send the ID token to your backend
      const response = await fetch('http://localhost:4555/protected', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${idToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Handle the response from the backend
      alert('Let\'s go to the home page');
      navigate('/homepage');
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = prompt('Please enter your email');
    if (email) {
      await sendPasswordResetEmail(auth, email);
      alert('Email sent! Check your inbox for password reset instructions.');
    } else {
      alert('Email is required to reset the password.');
    }
  };

  return (
    <div>
      <Header pageName="login" /> {/* Pass the pageName prop */}
      <section className="section">
        <div className="auth_container">
          <div className="auth_img">
            <img src={`${process.env.PUBLIC_URL}/auth-image.png`} alt="" className="auth_image" />
          </div>
          <div className="auth_content">
            <form action="" className="auth_form">
              <h2 className="form_title">Login to your account</h2>
              <p className="auth_p">Enter your details below</p>
              <div className="form_group">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form_input"
                />
              </div>
              <div className="form_group form_pass">
                <input
                  type="password"
                  placeholder="Password"
                  className="form_input"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form_group">
                <button className="form_btn" onClick={handleLogin}>
                  <div className="form_link">Login</div>
                </button>
              </div>
              <div className="form_group">
                <button className="form_btn">
                  <a href="/shop" onClick={signinwithGoogle} className="form_link">
                    Log in with Google
                  </a>
                </button>
              </div>

              {error && <div className='form_group'>{error}</div>}
              <a href='/forget-password' className='forgot_group'>Forget Password?</a>
              <div className="form_group">
                <span>Don't have an account?
                  <a href="/register" className="form_auth_link">Register</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
