import React, { Component} from 'react'

class ContactUs extends Component {

    state={
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        firstNameErr:"",
        lastNameErr:"",
        emailErr:"",
        phoneErr:""
    }

         handleChange = (e)=>{
            const {name,value} = e.target;
            this.setState({[name]:value})
        }

        //validation
        //firstname > 4
        // lastname >1
        // email include(@)
        //phone 10
         handleSubmit = (e) =>{
            e.preventDefault();
           
            let firstNameErr = "";
            let lastNameErr = "";
            let emailErr = "";
            let phoneErr = "";

            if(this.state.firstName.length<=4){
                firstNameErr = "First name should be atleast 4 char"
            }

            if(this.state.lastName.length<=1){
                lastNameErr="last name should be atleast 1 char"
            }

            if(!this.state.email.includes('@')){
                emailErr="Enter a valid email"
            }
            if(this.state.phone.length!=10){
                phoneErr = "Enter a valid number"
            }

            if(firstNameErr || lastNameErr || emailErr || phoneErr){
                this.setState({firstNameErr,lastNameErr,emailErr,phoneErr})
            }else{
                this.setState({firstNameErr,lastNameErr,emailErr,phoneErr})
            }

        }

        render(){
            return (
                <div>
                    <h2>ContactUs</h2>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'></div>
                            <div className='col-md-4'>
                                <form onSubmit={this.handleSubmit}>
                                <div class="mb-3">
                                        <input type="text" class="form-control" 
                                        placeholder='enter firstName'
                                        onChange={this.handleChange}
                                        name="firstName"
                                        value={this.state.firstName}
                                        />
                                        <p className='text-danger'>{this.state.firstNameErr}</p>
                                    </div>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" 
                                        placeholder='enter lastName'
                                        onChange={this.handleChange}
                                        name="lastName"
                                        value={this.state.lastName}
                                        />
                                      <p className='text-danger'>{this.state.lastNameErr}</p>
                                    </div>
                                    <div class="mb-3">
                                        <input type="email" class="form-control" 
                                        placeholder='enter email'
                                        onChange={this.handleChange}
                                        name="email"
                                        value={this.state.email}
                                        />
                                        <p className='text-danger'>{this.state.emailErr}</p>

                                    </div>
                                    <div class="mb-3">
                                        <input type="number" class="form-control" 
                                        placeholder='phone'
                                        onChange={this.handleChange}
                                        name="phone"
                                        value={this.state.phone}
                                        />
                                    <p className='text-danger'>{this.state.phoneErr}</p>

                                    </div>
                                   
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                            <div className='col-md-4'></div>
                        </div>
                    </div>
                </div>
            )
        }
  
}

export default ContactUs