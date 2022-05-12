import React, { useState } from 'react';
import imageOverlay from "../img/earth.jpg";

const types = ['General Inquiry', 'Work Opportunities'];
function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div className="button-group tablinks">
        {types.map(type => (
          <div
            className={type + " button-tab col-6" + (type === active ? " highlighted-class-name" : "" )}
            key={type}
            active={active === type}
            onClick={
              (event) => {
                setActive(type);
                showForm(event, type);
              }
            }
          >
            {type}
          </div>
        ))}
      </div>
      <p />
    </>
  );
}
function showForm(evt, formName) {
  // Declare all variables
  var i, tabcontent;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Show the current tab content
  document.getElementById(formName).style.display = "block";
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div id="contact" className="box-shadow-full">
            <div className="title-box-2">
              <h5 className="title-left">Send A Message</h5>
            </div>
            <TabGroup/>
            <div id="General Inquiry" className="tabcontent">
              <form
                action="https://formspree.io/f/xzbkyopb"
                method="POST"
                className="contactForm"
                onSubmit={this.submitForm}
              >
                <div id="sendmessage">
                  Your message has been sent. Thank you!
                </div>
                <div id="errormessage"></div>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validation"></div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="_replyto"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validation"></div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="_subject"
                        id="subject"
                        placeholder="Subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars"
                      />
                      <div className="validation"></div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        data-rule="required"
                        data-msg="Please write something for us"
                        placeholder="Message"
                      ></textarea>
                      <div className="validation"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    {status === "SUCCESS" ? <button type="submit" className="button button-a button-big button-rouded">Your message has been sent!</button> : <button type="submitted" className="button button-a button-big button-rouded">Send Message</button>}
                    {status === "ERROR" && <button type="failed" className="button button-a button-big button-rouded">There was an error, please contact me on LinkedIn</button>}
                  </div>
                </div>
              </form>
            </div>
            <div id="Work Opportunities" className="tabcontent" style={{display: "none"}}>
              hahahaha
            </div>
          </div>
        </div>
      </section>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default Contact;
