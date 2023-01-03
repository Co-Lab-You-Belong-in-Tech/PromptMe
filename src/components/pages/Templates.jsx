import { icons } from "../../assets/assets"
import Operations from "../elements/Operations";
import Sidebar from "../elements/Sidebar";
import { Link } from "react-router-dom";
import Button from "../elements/Button";

const Templates = () => {
  
  return (
    <div className="text-3xl flex flex-col items-center justify-center h-screen w-screen">
      <Link to="/Dashboard"><Button type="button">Under development</Button></Link>
    </div>
  )
}

export default Templates