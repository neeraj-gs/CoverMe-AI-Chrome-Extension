import React, { useEffect, useState } from 'react'
import { PiUserCirclePlusFill } from "react-icons/pi";
import { ROUTES } from '../utils/routes';
import {loadData} from '../utils/localStorage'
import { postChatGPTMessage } from '../utils/chatGPTUtil';

const Generator = ({setPage,resume,openAIKey}) => {
    const [jobDescription,setJobDescription] = useState("");
    const [coverLetter,setCoverLetter] = useState("");


    useEffect(()=>{
        const fetchedJobDescription = async() =>{
            const fetchedJd = await loadData("jobDescription")
            setJobDescription(fetchedJd);
        }
        fetchedJobDescription();
    },[]);


    const generateCoverLetter = async()=>{
        try {
            // Create message to send to chatGPT API
            const message = `Generate a cover letter based on the following resume and job description:\n\nRESUME:\n${resume}\n\nJob Description:\n${jobDescription}`;
            // Send message to chatGPT API and wait for response
            const chatGPTResponse = await postChatGPTMessage(message, openAIKey);
            // Update state with generated cover letter
            setCoverLetter(chatGPTResponse);
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <header>
        <div className='flex flex-col '>
            
            
            {/* First ROw for the Header  */}
            <div className='flex flex-row justify-between mx-5 my-5 items-center'>
                <button onClick={generateCoverLetter} className='rounded-full border-2 border-b-2 border-r-2 border-black px-4 py-3 text-lg font-bold transition-all hover:translate-y-[2px] hover:bg-slate-200'>Generate</button>
                <h2 className='text-2xl font-extrabold underline'>CoverMe: Linkedin</h2>
                <button onClick={()=> {setPage(ROUTES.PROFILE)}} className='rounded-full border-2 border-b-2 border-r-2 border-black px-2 py-2 text-2xl font-bold transition-all hover:translate-y-[2px] hover:bg-slate-200'>
                    <PiUserCirclePlusFill />
                </button>
            </div>

            {/* Second row where we get the generated cover letter */}
            <div className='flex mx-5'>
                <textarea
                    rows={12}
                    className='w-full my-3'
                    placeholder='Generated Customized Cover Letter'
                    value={coverLetter}
                />
            </div>




        </div>
    </header>
  )
}

export default Generator