import { useState } from 'react';
import './App.css';
import { User } from './users/User';
import { Post } from './post/Post';



function App() {

  const [current, setCurrent] = useState("POST");



  return (
    <div>
      <h1 className='p-5 bg-slate-600 font-mono text-white hover:font-bold'> API EXAMPLE </h1>

      <div className='flex flex-row bg-blue-400 h-8 text-center'> 
        <div className={`flex-auto text-center border-solid border-r-2 border-black ${current == "POST" ? "border-b-8 border-slate-600" : ""}`} onClick={() => setCurrent("POST")}> POST </div>
        <div className={`flex-auto text-center border-solid border-r-2 border-black ${current == "USER" ? "border-b-8 border-slate-600" : ""}`} onClick={() => setCurrent("USER")}> USER </div>
        <div className={`flex-auto text-center border-solid border-r-2 border-black ${current == "GALLERY" ? "border-b-8 border-slate-600" : ""}`} onClick={() => setCurrent("GALLERY")} > GALLLERY </div>
        <div className={`flex-auto text-center border-solid border-r-2 border-black ${current == "TODO" ? "border-b-8 border-slate-600" : ""}`} onClick={() => setCurrent("TODO")} > TODO </div>
        <div className={`flex-auto text-center border-solid border-r-2 border-black ${current == "COMMENTS" ? "border-b-8 border-slate-600" : ""}`} onClick={() => setCurrent("COMMENTS")} > COMMENTS </div>
        <div className={`flex-auto text-center border-solid border-r-2 ${current == "PROFILE" ? "border-b-8 border-slate-600" : ""}`} onClick={() => setCurrent("PROFILE")} > PROFILE </div>
      </div>

      {current === "POST" && <Post />}
      {current === "USER" && <User />}

    </div>
  );
}

export default App;
