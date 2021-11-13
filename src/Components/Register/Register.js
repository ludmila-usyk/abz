import s from './Register.module.css';
import foot from './Footprint.svg';

export default function Register() {
    return (
        <>
        <section className={s.register}>
            <h2 className={s.title}>Register to get a work</h2>
            <p className={s.content}>Your personal data is stored according to the Privacy Policy</p>
            <form>
                <input
                    className={s.input}            
                    type="text"
                    name="username"
                    placeholder="Your name"
                    required
                    pattern="^[a-zA-Z\s]+$"
                    title="Username should only contain letters of the Latin alphabet"/>
                <input className={s.input} type="email" name="email" placeholder="Email" required/>
                <input
                    className={s.input}  
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                    pattern="\+?[0-9\s\-\(\)]+"
                    title="Phone number should only contain ) ( + - and numbers"/>
                
                <p className={s.select}>Select your position</p>
                <p className={s.label}> <input 
                    type="radio" name="contact"/>
                    Frontend developer</p>
                <p className={s.label}> <input type="radio" name="contact"/>
                   Backend developer</p>
                <p className={s.label}> <input type="radio" name="contact"/>
                   Designer</p>
                <p className={s.label}> <input type="radio" name="contact"/>
                   QA</p>
                <p><button type="submit" className={s.load}>Upload</button><input type="text" className={s.takePhoto} placeholder="Upload your photo"/></p>


                 <div className={s.block}><button type="button" className={s.button}>Sign up</button></div>
            </form>

        </section>
        <img className={s.img} src={foot} alt="footprint"/>
    </>
    ); 
  }