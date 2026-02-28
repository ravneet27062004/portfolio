import React,{useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import useAlert from '../hooks/useAlert.jsx';
import Alert from '../components/Alert.jsx';

const Contact = () => {
    const formRef=useRef();
    const { alert, showAlert, hideAlert } = useAlert();
    const [loading,setloading]=useState(false)
    const [form,setform]=useState({
        name:'',
        email:'',
        message:''

    })
    const handleChange = (e) => {
  const { name, value } = e.target;
  setform((prev) => ({
    ...prev,
    [name]: value,
  }));
};
    const handleSubmit=(e)=>{
        e.preventDefault();
        setloading(true);
        console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log("PUBLIC KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
       emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    form_name: form.name,
    to_name: "Ravneet",
    form_email: form.email,
    to_email: "ravn2706@gmail.com",
    message: form.message,
  },
  {
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  }
)
 .then(() => {
  setloading(false);

  showAlert({
    show: true,
    text: 'Thank you for your message 😃',
    type: 'success',
  });

  setTimeout(() => {
    hideAlert();
    setform({
      name: '',
      email: '',
      message: '',
    });
  }, 3000);
})
.catch((error) => {
  setloading(false);
  console.error(error);

  showAlert({
    show: true,
    text: "I didn't receive your message 😢",
    type: 'danger',
  });
});
    }

    
  return (
    <section className='c-space my-40 ' id='contact' >
        <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <img src='/assets/terminal.png' alt='terminal background' className='absolute insert-0 min-h-screen'/>
        <div className='contact-container'>
            {alert.show && <Alert {...alert} />}
<h3 className='head-text'>Let's Connect</h3>
<p className='text-lg text-white-600 mt-3'>
              Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
  
</p>

<form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
<label className='space-y-3'>
<span className='field-label'>
Full Name
</span>
<input type='text' name='name'  value={form.name} onChange={handleChange} required className='field-input' placeholder='ABC'/>
</label>

<label className='space-y-3'>
<span className='field-label'>
Email
</span>
<input type='email' name='email'  value={form.email} onChange={handleChange} required className='field-input' placeholder='abc@gmail.com'/>
</label>

<label className='space-y-3'>
<span className='field-label'>
Your Message
</span>
<textarea  name='message'  value={form.message} onChange={handleChange} required rows={5} className='field-input' placeholder="Hi , I'm interested in ..."/>
</label>
<button className='field-btn ' type='submit' disabled={loading}>
{loading? 'Sending..':'Send Message'}
<img src='/assets/arrow-up.png' alt='arrow-up' className='field-btn_
arrow h-4 ' />
</button>
</form>
        </div>
        </div>
     
    </section>
  )
}

export default Contact
