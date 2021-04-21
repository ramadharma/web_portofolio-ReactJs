import React from 'react'

class Kontak extends React.Component {
    render() {
        return(
            <div>
                <div class="container">

                    <div class="contact-section">
                        <h1>Contact Me</h1>
                        <div class="border"></div>
                        <form class="contact-form">
                            <input type="text" class="contact-form-text" placeholder="Your Name"/>
                            <input type="email" class="contact-form-text" placeholder="Your Email"/>
                            <input type="text" class="contact-form-text" placeholder="Your Phone"/>
                            <textarea class="contact-form-text" placeholder="Your message"></textarea>
                            <input type="submit" class="contact-form-btn"/>
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Kontak;