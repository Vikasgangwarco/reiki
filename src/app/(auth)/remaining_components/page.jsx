'use client';

import { useState } from 'react';
import LoginSuccess from '../../../components/login-success';
import SignUpSuccess from '../../../components/SignUpSuccess';
import PaymentSuccess from '../../../components/PaymentSuccess';
import PaymentFailed from '../../../components/PaymentFalied';

export default function SignupPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
       {/* <LoginSuccess /> */}
       {/* <SignUpSuccess /> */}
       {/* <PaymentSuccess /> */}
        <PaymentFailed />
    </div>
  );
}
