import {Formik, Form, Field} from 'formik'
export default function FormikForm () {

    return (
      <Formik
          initialValues={{
              name:'',
              email:'',
              phone:'',
          }}
          validate={(values)=>{
              const errors = {};
              if(!values.name) {
                  errors.name = 'Please enter your name';
              }
              if(!values.email) {
                  errors.email = 'Please enter your email';
              } else if(!/^\S+@\S+\.\S+$/.test(values.email)){
                  errors.email = 'Please enter valid email'
              }
              if(!values.phone) {
                  errors.phone = 'Please enter your phone';
              } else if (!/^\d{12}$/.test(values.phone)){
                  errors.phone = 'Please enter valid phone - only numbers and 12 characters'
              }
              return errors;
          }}
          onSubmit={(values)=> {
              console.log('Sending data',values);
          }}
      >
          {
              ({errors,touched}) => (
                  <Form style={{
                      display:'flex',
                      flexDirection: 'column',
                      width:'300px'}}>

                      <Field type='text' name='name' placeholder='enter your name'/>
                      {errors.name && touched.name && <span style={{color: 'red'}}>{errors.name}</span>}

                      <Field type='email' name='email' placeholder='enter your email'/>
                      {errors.email && touched.email && <span style={{color: 'red'}}>{errors.email}</span>}

                      <Field type='text' name='phone' placeholder='enter your phone'/>
                      {errors.phone && touched.phone && <span style={{color: 'red'}}>{errors.phone}</span>}

                      <button type='submit'>Send</button>
                  </Form>
              )
          }
      </Formik>
    );
}