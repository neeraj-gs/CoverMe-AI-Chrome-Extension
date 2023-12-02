import React from 'react'
import { FaArrowCircleLeft } from "react-icons/fa";
import { ROUTES } from '../utils/routes';
import { saveData } from '../utils/localStorage';
import { HiHomeModern } from "react-icons/hi2";

const Profile = ({setPage,resume,setResume,openAIKey,setOpenAIKey}) => {

    const handleSubmit =(e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedResume = formData.get("resume");
        const updatedOpenAIKey = formData.get("openAIKey");
        setResume(updatedResume)
        setOpenAIKey(updatedOpenAIKey);
        saveData('resume', updatedResume)
        saveData('openAIKey', updatedOpenAIKey)
    }

  return (
    <div className='flex flex-col mx-5'>
        {/* Headers section for the profile a */}
        <div className='flex flex-row justify-between my-4 items-center'>
            <h2 className='text-3xl font-extrabold font-serif'>Profile</h2>
            <div>
            <button onClick={()=> {setPage(ROUTES.LANDINGPAGE)}} className='rounded-full border-2 border-b-2 border-r-2 border-black px-4 py-4 text-xl font-bold transition-all hover:translate-y-[2px] hover:bg-slate-200 mr-6'>
                <HiHomeModern />
            </button>
            <button onClick={()=> {setPage(ROUTES.GENERATOR)}} className='rounded-full border-2 border-b-2 border-r-2 border-black px-4 py-4 text-xl font-bold transition-all hover:translate-y-[2px] hover:bg-slate-200'>
                <FaArrowCircleLeft />
            </button>
            </div>
            
        </div>


        {/* form ompoent to submit the resiume adn api key  */}
        <form className="flex-col" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="openAIKey"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Open AI Key
          </label>
          <input
            id="openAIKey"
            name="openAIKey"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Paste in your api key here"
            defaultValue={openAIKey}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="resume"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Resume
          </label>
          <textarea
            id="resume"
            name="resume"
            rows={8}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Paste in your resume here..."
            defaultValue={resume}
          ></textarea>
        </div>
        <div className="mb-6 text-center">
        <button type='submit' className='rounded-full border-2 border-b-2 border-r-2 border-black px-4 py-3 text-lg font-bold transition-all hover:translate-y-[2px] hover:bg-slate-200 shadow-md shadow-black'>Save</button>
        </div>
      </form>



    </div>
  )
}

export default Profile