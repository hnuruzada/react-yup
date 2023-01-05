import { Formik,Field,Form} from "formik";
import * as Yup from "yup"

const SignupSchema=Yup.object().shape({
    firstname:Yup.string().min(3,"Firstname must be min 3 character").required("Input is not empty").matches(/^[a-zA-Z0-9]+$/,"Inputu duzgun doldur"),
    lastname:Yup.string().min(5,"Lastname must be min 5 character").max(20,"Too Long").required("Lastname inputu bos biraxma"),
    email:Yup.string().email("Email sehvdir").required("Email inputunu doldr"),
    accept:Yup.bool()
    .oneOf([true])
})

export const Signup=()=>{

    return(
        <Formik
        initialValues={{
            firstname:"",
            lastname:"",
            email:"",
            accept:false
        }}
        validationSchema={SignupSchema}
        onSubmit={(values,errors)=>{
            console.log(values);
            console.log(errors);
        }}
       
        >

            {({errors,touched})=>{
                console.log(errors);
                return(<Form>
                    <Field name="firstname"/><br/>
                    {errors.firstname && touched.firstname? <div style={{color:"red",fontSize:12}}>{errors.firstname}</div>:null}
                    <Field name="lastname"/><br/>
                    {errors.lastname && touched.lastname? <div style={{color:"red",fontSize:12}}>{errors.lastname}</div>:null}
                    <Field name="email" type="email"/>
                    {errors.email && touched.email ? <div style={{color:"red",fontSize:12}}>{errors.email}</div>:null}
                    <Field type="checkbox" name="accept"/><br/>
                    {errors.accept && touched.accept ? <div style={{color:"red",fontSize:12}}>{errors.accept}</div>:null}
                    <button type="submit">Sign up</button>
                </Form>);
            }}

        </Formik>

    );
}