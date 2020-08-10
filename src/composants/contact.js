import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="top-bar">
                <h1>contact Me</h1>
                <p><a href="#">Home</a> / Contact Me</p>
            </div>

            <div className="container main-container">
                <div className="col-md-6">
                    <form >
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-contact">
                                    <input type="text" name="name" />
                                    <span>your name</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-contact">
                                    <input type="text" name="email" />
                                    <span>your email</span>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-contact">
                                    <input type="text" name="object" />
                                    <span>object</span>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="textarea-contact">
                                    <textarea name="message"></textarea>
                                    <span>message</span>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <a href="#" className="btn btn-box">Send</a>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="col-md-6">
                    <h3 className="text-uppercase">contact me</h3>
                    <h5>Creative & Lorem ipsum dolor sit amet</h5>
                    <div className="h-30"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim nosmet ipsos nosse non possumus. Inscite autem medicinae et gubernationis ultimum cum ultimo sapientiae comparatur. Tecum optime, deinde etiam cum mediocri amico. Et nemo nimium beatus est; Ac ne plura complectar-sunt enim innumerabilia-, bene laudata virtus voluptatis aditus </p>
                    <div className="contact-info">
                        <p><i className="ion-android-call"></i> 0100 787 3456</p>
                        <p><i className="ion-ios-email"></i> box@info.com</p>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Contact