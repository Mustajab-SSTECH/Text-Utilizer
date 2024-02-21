import React from 'react'

export default function About(props) {
    return (
        <div className='aboutgroup container-fluid' style={props.style}>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item border-dark border-1" style={props.style}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <b>User-Friendly Interface</b>
                        </button>
                    </h2>

                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body font-italic">
                            Our platform is designed with simplicity in mind. Whether you're a seasoned writer or just starting out, Text Utilizer offers an intuitive interface that makes crafting your content a breeze. With easy-to-navigate menus and clear instructions, you'll spend less time figuring out the tool and more time focusing on your writing.
                        </div>
                    </div>
                </div>
                <div className="accordion-item border-dark border-1" style={props.style}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <b>Versatile Tools</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            From grammar and spell check to word count and readability analysis, Text Utilizer provides a wide range of tools to enhance your writing. Whether you're writing an essay, a blog post, or a professional email, our platform has everything you need to ensure your writing is polished and error-free.
                        </div>
                    </div>
                </div>
                <div className="accordion-item border-dark border-1" style={props.style}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <b>Customization Options</b>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            We understand that every writer has their own unique style and preferences. That's why Text Utilizer offers customization options that allow you to tailor the platform to suit your needs. From customizable themes and fonts to personalized dictionaries and writing goals, you can make Text Utilizer truly your own.
                        </div>
                    </div>
                </div>
                <div className="accordion-item border-dark border-1" style={props.style}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <b>Collaboration Features</b>
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Writing doesn't have to be a solitary endeavor. With Text Utilizer's collaboration features, you can easily share your work with others and collaborate in real-time. Whether you're working on a group project or seeking feedback from a colleague, our platform makes it easy to collaborate and communicate with others.
                        </div>
                    </div>
                </div>
                <div className="accordion-item border-dark border-1" style={props.style}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <b>Secure and Reliable</b>
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Your privacy and security are our top priorities. Text Utilizer employs the latest encryption and security measures to ensure that your data remains safe and secure at all times. With Text Utilizer, you can write with confidence, knowing that your work is protected.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
