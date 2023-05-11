import React, { useState } from 'react'

interface IErrors{
    username: string,
    email: string,
    gender: string,
    age: string
}

function RegistrationForm() {
    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [errors, setErrors] = useState<IErrors>(Object);

  function handleUsernameChange(event: any) {
    setUsername(event.target.value);
  }

  function handleEmailChange(event: any) {
    setEmail(event.target.value);
  }

  function handleGenderChange(event: any) {
    setGender(event.target.value);
  }

  function handleAgeChange(event: any) {
    setAge(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const errors: IErrors = {
        username: "",
        email: "",
        gender: "",
        age: ""
    };

    if (!username) {
      errors.username = 'Username cannot be empty';
    } else if (username.length < 3) {
      errors.username = 'Username length must be more than 3 symbols';
    }

    if (!email) {
      errors.email = 'Email cannot be empty';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Invalid email';
    }

    if (!gender) {
      errors.gender = 'Select a gender';
    }

    if (!age) {
      errors.age = 'Age cannot be empty';
    } else if (isNaN(parseInt(age))) {
      errors.age = 'Age is a number';
    } else if (parseInt(age) < 18) {
      errors.age = 'You must be older than 18';
    }

    if (Object.keys(errors).length === 0) {
      console.log('Registration success!');
      console.log({
        username: username,
        email: email,
        gender: gender,
        age: age
      })
    } else {
      setErrors(errors);
      
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
      <label>
        Username:
        <input type="text" name="username" value={username} onChange={handleUsernameChange} required />
        {errors.username ? <div style={{color: "red"}}>{errors.username}</div> : null}
      </label>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={handleEmailChange} required />
        {errors.email ? <div style={{color: "red"}}>{errors.email}</div> : null}
      </label>
      <label>
        Gender:
        <select name="gender" value={gender} onChange={handleGenderChange} required>
          <option value="">Please select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
        </select>
        {errors.gender ? <div style={{color: "red"}}>{errors.gender}</div> : null}
      </label>
      <label>
        Age:
        <input type="number" name="age" value={age} onChange={handleAgeChange} required />
        {errors.age ? <div style={{color: "red"}}>{errors.age}</div> : null}
      </label>
      <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default RegistrationForm