'use client';

import React, { useState } from 'react';

function ContactForm() {
  const [touchedFields, setTouchedFields] = useState([]);

  const handleFieldBlur = (fieldName) => {
    if (!touchedFields.includes(fieldName)) {
      setTouchedFields((prevTouchedFields) => [
        ...prevTouchedFields,
        fieldName,
      ]);
    }
  };

  const isFieldTouched = (fieldName) => touchedFields.includes(fieldName);

  return (
    <form className='mt-8 flex flex-col gap-8' action=''>
      <div>
        <label
          className='font-bold text-grayish-dark-blue opacity-80'
          htmlFor='name'
        >
          Name
        </label>
        <input
          className={`custom-input-styles ${
            isFieldTouched('name') ? 'touched' : ''
          }`}
          type='text'
          name='name'
          id='name'
          placeholder='John Doe'
          required
          onBlur={() => handleFieldBlur('name')}
        />
        {isFieldTouched('name') && (
          <span className='text-bright-red block font-bold text-sm mt-2 italic'>
            This field is required
          </span>
        )}
      </div>

      <div>
        <label
          className='font-bold text-grayish-dark-blue opacity-80'
          htmlFor='email'
        >
          Email Address
        </label>
        <input
          className={`custom-input-styles ${
            isFieldTouched('email') ? 'touched' : ''
          }`}
          type='email'
          name='email'
          id='email'
          placeholder='email@example.com'
          required
          onBlur={() => handleFieldBlur('email')}
        />
        {isFieldTouched('email') && (
          <span className='text-bright-red block font-bold text-sm mt-2 italic'>
            This field is required
          </span>
        )}
      </div>

      <div>
        <label
          className='font-bold text-grayish-dark-blue opacity-80'
          htmlFor='message'
        >
          Message
        </label>
        <textarea
          className={`custom-input-styles ${
            isFieldTouched('message') ? 'touched' : ''
          }`}
          placeholder='How can I help?'
          name='message'
          id='message'
          cols='30'
          rows='4'
          onBlur={() => handleFieldBlur('message')}
          required
        ></textarea>
        {isFieldTouched('message') && (
          <span className='text-bright-red font-bold block text-sm mt-2 italic'>
            This field is required
          </span>
        )}
      </div>
    </form>
  );
}

export default ContactForm;
