import { useState, useEffect } from "react";
import Notification from "../ui/notification";

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errors = {};
    
    if (!enteredName.trim()) {
      errors.name = "Name is required";
    } else if (enteredName.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }
    
    if (!enteredEmail.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredEmail)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!enteredMessage.trim()) {
      errors.message = "Message is required";
    } else if (enteredMessage.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendMessage = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setRequestStatus("pending");
    setFormErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          name: enteredName,
          message: enteredMessage,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      setRequestStatus("success");
      setEnteredMessage("");
      setEnteredEmail("");
      setEnteredName("");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  //send message handler
  async function sendMessageHandler(event) {
    event.preventDefault();
    sendMessage();
  }

  let notification;
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      message: "Thank you for your email!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      message: requestError,
    };
  }

  return (
    <div className="card border-0 shadow-lg h-100">
      <div className="card-body p-5">
        <div className="text-center mb-4">
          <div className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
            <i className="fas fa-envelope eyn-primary" style={{fontSize: '1.5rem'}}></i>
          </div>
          <h3 className="mb-2 eyn-primary">Send us a Message</h3>
          <p className="text-muted">We&apos;ll get back to you within 24 hours</p>
        </div>
        
        <form onSubmit={sendMessageHandler} className="needs-validation" noValidate>
          <div className="mb-4">
            <label htmlFor="name" className="form-label fw-semibold">
              <i className="fas fa-user me-2 eyn-primary"></i>Full Name
            </label>
            <input
              className={`form-control form-control-lg ${formErrors.name ? 'is-invalid' : ''}`}
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
              disabled={isSubmitting}
            />
            {formErrors.name && (
              <div className="invalid-feedback d-block">
                <i className="fas fa-exclamation-circle me-1"></i>
                {formErrors.name}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="form-label fw-semibold">
              <i className="fas fa-envelope me-2 eyn-primary"></i>Email Address
            </label>
            <input
              className={`form-control form-control-lg ${formErrors.email ? 'is-invalid' : ''}`}
              type="email"
              id="email"
              placeholder="your.email@example.com"
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
              disabled={isSubmitting}
            />
            {formErrors.email && (
              <div className="invalid-feedback d-block">
                <i className="fas fa-exclamation-circle me-1"></i>
                {formErrors.email}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="form-label fw-semibold">
              <i className="fas fa-comment me-2 eyn-primary"></i>Message
            </label>
            <textarea
              className={`form-control form-control-lg ${formErrors.message ? 'is-invalid' : ''}`}
              id="message"
              rows="5"
              placeholder="Tell us about your project or how we can help you..."
              maxLength={1000}
              value={enteredMessage}
              onChange={(event) => setEnteredMessage(event.target.value)}
              disabled={isSubmitting}
            ></textarea>
            <div className="form-text text-end">
              {enteredMessage.length}/1000 characters
            </div>
            {formErrors.message && (
              <div className="invalid-feedback d-block">
                <i className="fas fa-exclamation-circle me-1"></i>
                {formErrors.message}
              </div>
            )}
          </div>

          <div className="d-grid">
            <button 
              type="submit" 
              className={`btn btn-primary btn-lg ${isSubmitting ? 'disabled' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane me-2"></i>
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>

        {notification && (
          <div className="mt-4">
            <Notification
              status={notification.status}
              message={notification.message}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
