import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import CreatableSelect from "react-select/creatable"

const Creatjob = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        data.skills = selectedOption;
        //console.log(data);
        fetch("http://localhost:3000/post-job",{
            method: "POST",
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((result) => {
            console.log(result);
            if(result.acknowledged === true ){
                alert(" Job Posted Successfully!")
            }
            reset()
        });
    };

     const options =[
        {value: "JavaScript", label: "JavaScript"},
        {value: "C++", label: "C++"},
        {value: "HTML", label: "HTML"},
        {value: "CSS", label: "CSS"},
        {value: "React", label: "React"},
        {value: "python", label: "python"},
        {value: "node", label: "node"},
        {value: "BootStrap", label: "BootStrap"},
     ]
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            {/* form */}
            <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* 1st ROW */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg"> job title</label>
                            <input type="text" defaultValue={"web developer"}
                                {...register("jobTitle")} className="create-job-input" />
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <label className="block mb-2 text-lg"> Company Name</label>
                                    <input type="text" placeholder="e.g: Microsoft"
                                        {...register("companyName")} className="create-job-input" />

                                </div>
                                </div>
                            {/* 2ND ROW */}
                            <div className="create-job-flex">
                                <div className="lg:w-1/2 w-full">
                                    <label className="block mb-2 text-lg">Minimun salary</label>
                                    <input type="text" placeholder="$20K"
                                        {...register("minPrice")} className="create-job-input" />
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <label className="block mb-2 text-lg"> Maximum salary</label>
                                    <input type="text" placeholder="$120k"
                                        {...register("maxPrice")} className="create-job-input" />

                                </div>

                            </div>

                             {/* 3rd ROW */}

                             <div className="create-job-flex">
                                <div className="lg:w-1/2 w-full">
                                    <label className="block mb-2 text-lg">Salary Type</label>
                                    <select {...register("salarytype")} className="create-job-input" >
        <option value="">choose your salary</option>
        <option value="Hourly">Hourly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <label className="block mb-2 text-lg"> Job Location</label>
                                    <input type="text" placeholder="e.g lahore"
                                        {...register("jobLocation")} className="create-job-input" />

                                </div>

                            </div>
                              
                              {/* 4th ROW */}

                              <div className="create-job-flex">
                                <div className="lg:w-1/2 w-full">
                                    <label className="block mb-2 text-lg"> Job Posting Date</label>
                                    <input type="date" placeholder="e.g 2024-04-28"
                                        {...register("postingDate")} className="create-job-input" />

                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <label className="block mb-2 text-lg">Experience Level</label>
                                    <select {...register("experienceLevel")} className="create-job-input" >
        <option value="">choose your experience</option>
        <option value="No experience">No experience</option>
        <option value="Intership">Intership</option>
        <option value="Work remotely">Work remotely</option>
      </select>
                                </div>

                            </div>

                            {/* 5th ROW */}
                             <div>
                             <label className="block mb-2 text-lg"> Required Skill Sets:</label>
                             <CreatableSelect
                             defaultValue={ selectedOption}
                             onChange={setSelectedOption}
                             options={options}
                             isMulti
                             className=" create-job-input py-4"/>
                             </div>
                             {/* 6th ROW */}

                             <div className="create-job-flex">
                                <div className="lg:w-1/2 w-full">
                                    <label className="block mb-2 text-lg"> Company logo</label>
                                    <input type="url" placeholder=" place your company logo URL: https://weshare.com/img1"
                                        {...register("companyLogo")} className="create-job-input" />

                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <label className="block mb-2 text-lg">Employment Type</label>
                                    <select {...register("employmentType")} className="create-job-input" >
        <option value="">select your job type</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Temporary">Temporary</option>
      </select>
                                </div>
                                </div>

                                {/* 7TH ROW */}
                               <div className="w-full">
                               <label className="block mb-2 text-lg">Job Description</label>
                               <textarea className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700" 
                               rows={6}
                               defaultValue={ " We are seeking a talented and motivated individual to join our team. " }
                               placeholder="Job Description"
                               {...register("description")} />
                               </div>

                               {/* LAST ROW */}
                               <div className='w-full'>
                               <label className="block mb-2 text-lg">Job posted by</label>
                               <input type="email" placeholder="your email"
                                        {...register("postedBy")} className="create-job-input" />

                               </div>

                            <input type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm
                            cursor-pointer" />
                        </form>
                    </div>
            </div>
            )
}

            export default Creatjob