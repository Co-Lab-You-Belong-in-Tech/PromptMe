import { icons } from "../../assets/assets";
import Operations from "../elements/Operations";
import Sidebar from "../elements/Sidebar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="h-full">
      <div className="flex h-full">
        <Sidebar />
        <div className="flex overflow-hidden">
          {/* <!-- Scrollable container --> */}
          <div className="overflow-y-scroll p-4 pb-12">
            {/* <!-- Your content --> */}
            <nav className="sticky bg-white/60 top-0 flex items-center justify-between mb-16">
             <Link to="/Templates"><button type="button" className="btn">+ Create New</button></Link>
              <ul className="flex items-center justify-between w-96">
                <li><button type="button"><img src={icons.search} alt="Search Icon" /></button></li>
                <li><button type="button"><img src={icons.notification} alt="Notification Icon" /></button></li>
                <li><Link to="/Login"><button type="button" className="btn bg-bg hover:bg-black/10">Login</button></Link></li>
                <li><Link to="/Singup"><button type="button" className="btn">Register</button></Link></li>
              </ul>
            </nav>
            <div className="flex flex-col justify-around h-[90%] my-8">
              <div>
                <h1 className="text-2xl mt-16 font-bold">Subject:</h1>
                <p className="text-lg py-4 px-8 bg-bg rounded-lg m-4 flex items-center justify-between">
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</span>
                  <button type="button"><img src={icons.edit} alt="Edit Icon" /></button>
                </p>
                <Operations />
                <h1 className="text-2xl font-bold">Body:</h1>
                <p className="text-lg py-4 px-8 bg-bg rounded-lg m-4">
                  <p>
                  Dear [Interviewer's Name], <br></br>

I wanted to thank you again for taking the time to meet with me on [Date of Interview] to discuss the [Position] at [Company]. I really enjoyed learning more about the role and the company, and I am excited about the opportunity to join your team.

I believe that my skills and experience make me a strong fit for this position, and I am confident that I could make a significant contribution to the company. I am highly motivated and would be honored to be given the opportunity to join your team.

If you have any further questions or need any additional information from me, please don't hesitate to reach out. I am available to meet at your convenience to discuss this opportunity further.

Thank you again for considering my application. I look forward to hearing from you soon.<br></br>

Sincerely,<br></br>
[Your Name]
                  </p>
                  <div className="text-end">
                    <button type="button"><img src={icons.edit} alt="Edit Icon" /></button>
                  </div>
                </p>
                <Operations />
              </div>
              <div className="flex justify-between">
                <button type="button" className="btn flex bg-bg hover:bg-black/10">
                  <img src={icons.save} alt="Save and Add" />
                  <span>Save to your templates</span>
                </button>
                <button type="button" className="btn flex">
                  <img src={icons.copy} alt="Copy Email" />
                  <span>copy email</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;