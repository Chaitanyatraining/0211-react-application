import React from 'react'

function ContactUs() {
        const handleChange = (e)=>{
            console.log(e.target.value)
        }

        const handleSubmit = (e) =>{
            e.preventDefault();
            console.log("form submitted")
        }

    return (
        <div>
            <h2>ContactUs</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                placeholder='enter username'
                                onChange={handleChange}
                                />
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" id="exampleInputPassword1"
                                placeholder='password'
                                onChange={handleChange}
                                />
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

export default ContactUs