import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { UserEmailProps } from '@/types/UserTypes';

const UserEmail = (props: UserEmailProps): React.ReactNode => {
  const [emailError, setEmailError] = useState<string>('');

  const validateEmail = (name: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(name);

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    props.setEmail(value);
    if (!validateEmail(value)) {
      setEmailError('Doit être une adresse email valide');
    } else {
      setEmailError('');
    }
  };
  return (
    <TextField
      id="email"
      type="email"
      size="small"
      label="Email"
      variant="outlined"
      error={!!emailError}
      helperText={emailError}
      fullWidth
      value={props.email || ''}
      onChange={handleLastNameChange}
      required
    />
  );
};

export default UserEmail;
