import Button from '../elements/Button'
import Header from '../elements/Header';
import { useNavigate, Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <section>
      <Header />
      <div className="text-3xl flex flex-col items-center justify-center h-screen w-screen">
        <h1>
          Wondering if you should leave your <br></br> recruiter before they ghost you?
        </h1>
        <Link to="/Dashboard">
        <Button type="button" 
          className='w-40 py-4 m-8'> Get started</Button>
        </Link>
      </div>
    </section>
  )
}

export default Welcome;
