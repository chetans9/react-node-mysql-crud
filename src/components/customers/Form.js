import React from 'react';
import { useFormik } from 'formik';

const Form = (props) => {
    
    let initialValues = {};
    //Prevent null values warning :
    for (const property in props.customer) {
        if(props.customer[property] !== null){
            initialValues[property] = props.customer[property]
        }
    }
    
    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize : true,
        onSubmit: (fields) => {
            props.handleForm(fields);
        },
    });

    
    return (
        
        <form onSubmit={formik.handleSubmit}>

            <div className="row">

                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" name="first_name" className="form-control" id="first_name" placeholder="John"
                            onChange={formik.handleChange}
                            value={formik.values.first_name || ''}

                        />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" name="last_name" className="form-control" id="last_name" placeholder="Doe"
                            onChange={formik.handleChange}
                            value={formik.values.last_name} />
                    </div>
                </div>


            </div>

            <div className="row">

                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className="form-control" id="email" placeholder="johndoe@mail.com"
                        onChange={formik.handleChange}
                        value={formik.values.email} />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="text" name="mobile" className="form-control" id="mobile" placeholder="9999999999"
                        onChange={formik.handleChange}
                        value={formik.values.mobile} />
                    </div>
                </div>


            </div>

            <div className="row">


                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="date_of_birth">Date of Birth</label>
                        <input type="date" name="date_of_birth" className="form-control" id="date_of_birth"
                        onChange={formik.handleChange}
                        value={formik.values.date_of_birth} />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="pincode">Pincode</label>
                        <input type="text" name="pincode" className="form-control" id="pincode"
                        onChange={formik.handleChange}
                        value={formik.values.pincode} />
                    </div>
                </div>





            </div>

            <div className="row">

                <div className="col-sm-6">
                    <div className="form-group">
                        <div>
                            <label>Gender</label>
                        </div>

                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="gender"
                                 onChange={formik.handleChange}
                                 value = 'Male'
                                 checked={formik.values.gender === 'Male'}
                                  />
                                
                                Male</label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="gender"
                                onChange={formik.handleChange}
                                value = 'Female'
                                checked={formik.values.gender === 'Female'}
            
                                />
                                
                                Female</label>
                        </div>


                    </div>


                </div>
            </div>


            <div className="row">

                <div className="col-sm-12">
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea className="form-control" id="address" name="address" rows={3}
                        
                        onChange={formik.handleChange}
                        value={formik.values.address || ''} 
                        
                        />
                    </div>
                </div>


            </div>

            <div className="row">

                <div className="col-sm-12 text-center">
                    <button type="submit" className="btn btn-success">Submit</button>

                </div>


            </div>

        </form>

    );


}


export default Form;