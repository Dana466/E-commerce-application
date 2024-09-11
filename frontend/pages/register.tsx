import React, { useState } from 'react';
import { registerUser } from '../components/firebaseauthfcts.ts';
import '../styles/styles.css';
import Header from '../components/navigationMenu.tsx';
import Footer from '../components/footer.tsx';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const userCredential = await registerUser({ email, password });
      console.log('User registered:', userCredential);
      alert('Registration successful! Please login.');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Header pageName="register" /> {/* Pass the pageName prop here */}
      <section className="section">
        <div className="auth_container">
          <div className="auth_img">
            <img src={`${process.env.PUBLIC_URL}/auth-image.png`} alt="" className="auth_image" />
          </div>
          <div className="auth_content">
            <form action="" className="auth_form">
              <h2 className="form_title">Create your account</h2>
              <p className="auth_p">Enter your details below</p>
              <div className="form_group">
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required className="form_input" />
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
              <div className="form_group form_pass">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form_input"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form_group">
                <button className="form_btn">
                  <div className="form_link" onClick={handleRegister}>Register</div>
                </button>
              </div>

              {error && <div className='form_group'>{error}</div>}
              <div className="form_group">
                <span>Already have an account?
                  <a href="/login" className="form_auth_link">Login</a>
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

export default Register;
