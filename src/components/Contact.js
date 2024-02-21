import React from 'react';

export default function Contact(props) {
    return (
        <div style={props.style} className='contactgroup'>
            <div className="container">
                <h1>Contact Form</h1>
                <form id="contact_form" name="contact_form" method="post" className="mt-4">
                    <div className="mb-5">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" id="message" name="message" rows="5"></textarea>
                    </div>
                    <div className="mb-5 row">
                        <div className="col">
                            <label>Your Name:</label>
                            <input type="text" required maxLength="50" className="form-control" id="name" name="name" />
                        </div>
                        <div className="col">
                            <label htmlFor="email_addr">Your Email:</label>
                            <input type="email" required maxLength="50" className="form-control" id="email_addr" name="email"
                                placeholder="name@example.com" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary px-4 btn-lg">Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
