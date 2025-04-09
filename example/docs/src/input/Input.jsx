import React from 'react'
import { useState } from 'react';
import { Input } from 'ui_library';
export default function Input() {
 
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');

  // Moved validation states outside so they’re usable in JSX
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validateEmail = () => {
    if (!email.includes('@')) {
      setEmailError("Invalid email. Must contain '@'.");
    } else {
      setEmailError('');
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const numeric = value.replace(/\D/g, '');
    setPhone(numeric);

    if (/[a-zA-Z]/.test(value)) {
      setPhoneError('Phone number should only contain digits.');
    } else {
      setPhoneError('');
    }
  };

  return (
    <div className="mt-8 space-y-8">
        {/* Email Input */}
        <div>
          <h3 className="mb-2 text-xl font-semibold">Outline Email Input</h3>
          <Input
            type="email"
            variant="outline"
            size="lg"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            error={emailError}
            style={{ width: '250px' }}
          />
        </div>

        {/* Password Input */}
        <div>
          <h3 className="mb-2 text-xl font-semibold">Outline Password Input</h3>
          <Input
            type="password"
            variant="outline"
            size="lg"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '250px' }}
          />
        </div>

        {/* Date Input */}
        <div>
          <h3 className="mb-2 text-xl font-semibold">Filled Date Input</h3>
          <Input
            type="date"
            variant="filled"
            size="lg"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ width: '250px' }}
          />
        </div>

        {/* Phone Input */}
        <div>
          <h3 className="mb-2 text-xl font-semibold">
            Phone Input with Validation
          </h3>
          <Input
            type="text"
            variant="default"
            size="md"
            placeholder="Enter your phone number"
            value={phone}
            onChange={handlePhoneChange}
            error={phoneError}
            style={{ width: '250px' }}
          />
        </div>
      </div>
  )
}
