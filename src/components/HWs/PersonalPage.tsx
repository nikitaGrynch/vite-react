import React, { useState } from "react";
import { PersonalPageDefaultValues } from "../../data/data";

function PersonalPage() {
  const defaultValues = PersonalPageDefaultValues;
  const [name, setName] = useState(defaultValues.name);
  const [phone, setPhone] = useState(defaultValues.phone);
  const [email, setEmail] = useState(defaultValues.email);
  const [city, setCity] = useState(defaultValues.city);

  const resetFields = () => {
    setName(defaultValues.name);
    setPhone(defaultValues.phone);
    setEmail(defaultValues.email);
    setCity(defaultValues.city);
  };

  return (
    <div>
      <h1>Personal Page</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={resetFields}>
          Reset Fields
        </button>
      </form>
    </div>
  );
}

export default PersonalPage;
