import React from 'react'

const Patient = ({p, setPatient, deletePatient}) => {
    const { name, realID, email, date, symptoms, diagnosis, id } = p
    
    const handleDelete = () => {
        const answer = window.confirm('Would you like to delete the patient?');
        if(answer) {
            deletePatient(id)
        }
    }
    
    return (
        <div className="m-3 bg-white shadow-md rounded-xl px-5 py-10 pb-5 first:mt-0">
            <p className="font-bold mb-3 text-gray-700 uppercase"> Name: {""}
                <span className="font-normal normal-case">{name}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> Real ID: {""}
                <span className="font-normal normal-case">{realID}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Creation Date : {""}
                <span className="font-normal normal-case">{date}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> Diagnosis: {""}
                <span className="font-normal normal-case">{diagnosis}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> Symptoms: {""}
                <span className="font-normal normal-case">{symptoms}</span>
            </p>

            <div className='flex justify-evenly'>
                <button 
                    type="button"                      
                    className="py-2 px-5 bg-sky-500 hover:bg-sky-700 text-white font-bold uppercase rounded-lg"
                    onClick={()=>setPatient(p)}>Edit
                </button>
                <button
                    type="button"
                    className="py-2 px-5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" 
                    onClick={handleDelete}>Delete
                </button>
            </div>
        </div>
  )
}

export default Patient