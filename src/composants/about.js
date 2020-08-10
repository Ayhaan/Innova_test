import React from 'react'

const About = () => {
    return (
        <div>
            <div className="top-bar">
                <h1>About Me</h1>
                <p><a href="#">Home</a> / About me</p>
            </div>
            <div className="container main-container clearfix">
                <div className="col-md-6">
                    <img src="image/graphAgency.jpg" className="img-responsive" alt="" />
                </div>
                <div className="col-md-6">
                    <h3 className="uppercase aboutMe text-center">About Me </h3>
                    <h5 className="text-center">Passionnée par le design et la création </h5>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim nosmet ipsos nosse non possumus. Inscite autem medicinae et gubernationis ultimum cum ultimo sapientiae comparatur. Tecum optime, deinde etiam cum mediocri amico. Et nemo nimium beatus est; Ac ne plura complectar-sunt enim innumerabilia-, bene laudata virtus voluptatis aditus </p>

                    <p>Tum ille: Tu autem cum ipse tantum librorum habeas, quos hic tandem requiris? Esse enim quam vellet iniquus iustus poterat inpune. </p>
                    <div className="h-10"></div>
                    <ul className="social-ul">
                        <li className="box-social"><a href="#0"><i className="ion-social-facebook"></i></a></li>
                        <li className="box-social"><a href="#0"><i className="ion-social-instagram-outline"></i></a></li>
                        <li className="box-social"><a href="#0"><i className="ion-social-twitter"></i></a></li>
                        <li className="box-social"><a href="#0"><i className="ion-social-dribbble"></i></a></li>
                    </ul>


                </div>
            </div>
        </div>
    )
}
export default About