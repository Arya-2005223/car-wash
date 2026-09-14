import { useState } from 'react'
import styles from './ContactForm.module.css'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  service: 'shine',
  message: '',
}

function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (
    values.phone.trim() &&
    !/^[\d\s()+-]{7,}$/.test(values.phone)
  ) {
    errors.phone = 'Enter a valid phone number, or leave blank.'
  }

  if (!values.message.trim()) {
    errors.message = 'Tell us a little about what you need.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'A few more details would help (10+ characters).'
  }

  return errors
}

function ContactForm({ compact = false }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setValues((v) => ({
      ...v,
      [name]: value,
    }))
  }

  const handleBlur = (e) => {
    const { name } = e.target

    setTouched((t) => ({
      ...t,
      [name]: true,
    }))

    setErrors(validate(values))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate form
    const validationErrors = validate(values)

    setErrors(validationErrors)

    setTouched({
      name: true,
      email: true,
      phone: true,
      service: true,
      message: true,
    })

    // Stop if validation fails
    if (Object.keys(validationErrors).length > 0) {
      return
    }

    try {
      // Convert frontend service value
      // into the value expected by backend
      const serviceMap = {
        rinse: 'Rinse',
        shine: 'Shine',
        detail: 'Full Detail',
        unlimited: 'Unlimited plan',
        other: 'Something else',
      }

      const response = await fetch(
        'http://localhost:8000/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: values.name,
            email: values.email,
            phone: values.phone,
            interestedIn: serviceMap[values.service],
            message: values.message,
          }),
        }
      )

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)

        // Clear form
        setValues(initialValues)
        setErrors({})
        setTouched({})
      } else {
        alert(data.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Unable to connect to the backend.')
    }
  }

  const fieldClass = (field) =>
    `${styles.field} ${
      touched[field] && errors[field]
        ? styles.fieldError
        : ''
    }`

  // Success message
  if (submitted) {
    return (
      <div className={styles.successBox}>
        <h3>Message sent</h3>

        <p>
          Thanks! We'll get back to you within one business day.
        </p>

        <button
          type="button"
          className={`btn btn-primary ${styles.submitBtn}`}
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Full Name */}
      <div className={fieldClass('name')}>
        <label htmlFor="name">
          Full name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Jordan Alvarez"
        />

        {touched.name && errors.name && (
          <span className={styles.errorText}>
            {errors.name}
          </span>
        )}
      </div>

      {/* Email */}
      <div className={fieldClass('email')}>
        <label htmlFor="email">
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="jordan@email.com"
        />

        {touched.email && errors.email && (
          <span className={styles.errorText}>
            {errors.email}
          </span>
        )}
      </div>

      {/* Phone */}
      <div className={fieldClass('phone')}>
        <label htmlFor="phone">
          Phone (optional)
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="(555) 123-4567"
        />

        {touched.phone && errors.phone && (
          <span className={styles.errorText}>
            {errors.phone}
          </span>
        )}
      </div>

      {/* Interested In */}
      <div className={styles.field}>
        <label htmlFor="service">
          Interested in
        </label>

        <select
          id="service"
          name="service"
          value={values.service}
          onChange={handleChange}
        >
          <option value="rinse">
            Rinse
          </option>

          <option value="shine">
            Shine
          </option>

          <option value="detail">
            Full Detail
          </option>

          <option value="unlimited">
            Unlimited plan
          </option>

          <option value="other">
            Something else
          </option>
        </select>
      </div>

      {/* Message */}
      <div className={fieldClass('message')}>
        <label htmlFor="message">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Tell us about your vehicle or what you're looking for..."
        />

        {touched.message && errors.message && (
          <span className={styles.errorText}>
            {errors.message}
          </span>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className={`btn btn-primary ${styles.submitBtn}`}
      >
        Send message
      </button>
    </form>
  )
}

export default ContactForm