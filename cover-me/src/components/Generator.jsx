import React, { useEffect, useState } from 'react'
import { PiUserCirclePlusFill } from "react-icons/pi";
import { ROUTES } from '../utils/routes';
import {loadData} from '../utils/localStorage'
import { postChatGPTMessage } from '../utils/chatGPTUtil';

const Generator = ({setPage,resume,openAIKey}) => {

    const [isLoading,setIsLoading] = useState(false)

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
        setIsLoading(true)
        try {
            // Create message to send to chatGPT API
            const message = `Generate a cover letter based on the following resume and job description:\n\nRESUME:\n${resume}\n\nJob Description:\n${jobDescription}`;
            // Send message to chatGPT API and wait for response
            const chatGPTResponse = await postChatGPTMessage(message, openAIKey);
            // Update state with generated cover letter
            setCoverLetter(chatGPTResponse);
        } catch (error) {
            console.log(error)
        } finally{
            setIsLoading(false)
        }
    }

//Genertor compoent where we get the generarted COver letter
  return (
    <header className='bg-gradient-to-r min-h-[60vh] grainy from-slate-100 to-orange-100'>
        <div className='flex flex-col '>
            {/* First ROw for the Header  */}
            <div className='flex flex-row justify-between mx-5 my-5 items-center'>
                <button onClick={()=>generateCoverLetter()} className='rounded-xl border-2 border-b-2 border-r-2 border-black px-4 py-3 text-md font-serif font-bold transition-all hover:translate-y-[2px] bg-green-400 hover:bg-slate-200 shadow-sm shadow-black'>
                    {isLoading ? "Generating..":"Generate"}
                </button>
                <h2 className='text-2xl font-extrabold font-serif text-blue-950 underline'>CoverMe: Linkedin</h2>
                <button onClick={()=> {setPage(ROUTES.PROFILE)}} className='rounded-full border-2 border-b-2 border-r-2 border-black px-2 py-2 text-2xl font-bold transition-all hover:translate-y-[2px] hover:bg-slate-200 shadow-sm shadow-black'>
                    <PiUserCirclePlusFill />
                </button>
            </div>

            {/* Second row where we get the generated cover letter */}
            <div className='flex mx-5 outline-none border-0'>
                <textarea
                    rows={10}
                    className='w-full my-3 border-slate-300'
                    placeholder='Generated Customized Cover Letter'
                    value={coverLetter}
                />
            </div>

            <div className="text-center font-serif font-bold mt-8">
                <a href="https://github.com/neeraj-gs/CoverMe-AI-Chrome-Extension" target="_blank" rel="noreferrer" className='font-bold text-green-400 text-lg'>
                Source Code
                </a>
                {" "}
                | Created With ❤️️ by Neeraj GS{" "}
            </div>
            <hr className='mt-10' />





        </div>
    </header>
  )
}

export default Generator