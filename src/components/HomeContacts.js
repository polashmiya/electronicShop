import React from "react";

const HomeContacts = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="row">
          <form>
            <input type="text" placeholder="name" className="box" />
            <input type="email" placeholder="email" className="box" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="box message"
              placeholder="message"
            ></textarea>
            <button type="submit" className="btn">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default HomeContacts;
