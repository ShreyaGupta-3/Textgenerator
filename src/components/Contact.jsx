import React from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const contactInfo = {
            name: data.name,
            email: data.email,
            message: data.message,
        }
        await axios.post("https://getform.io/f/aollglwb", contactInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("Message send Successfull");
                    // navigate(from ,{replace:true});
                }
                // localStorage.setItem("Users", JSON.stringify(res.data.user))
            }).catch((err) => {
                if (err.response) {

                    console.log(err);
                    alert("Error: " + err.response.data.message)
                }
            })
    }
    return (
        <>
            <div className='flex h-screen items-center justify-center '>
                <div className="w-[600px] ">
                    <div className="modal-box dark:bg-slate-900 dark:text-white">
                        <form

                            onSubmit={handleSubmit(onSubmit)}
                        // method="POST"
                        >
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").closest()}>✕</Link>

                            <h3 className="font-bold text-lg">Contact</h3>
                            <div className="mt-4 space-y-2">
                                <span>Name</span>
                                <br />
                                <input type="name" placeholder="Enter your name" className="w-80 px-3 dark:bg-slate-900 dark:text-white py-1 border rounded-md outline-none"
                                    {...register("name", { required: true })}
                                />
                                <br />
                                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className="mt-4 space-y-2">
                                <span>Email</span>
                                <br />
                                <input type="email" placeholder="Enter your email" className="w-80 px-3 dark:bg-slate-900 dark:text-white py-1 border rounded-md outline-none"
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            <div className="mt-4 space-y-2">
                                <span>Message</span>
                                <br />
                                <input type="message" placeholder="Enter your message" className="w-80 px-3 dark:bg-slate-900 dark:text-white py-1 border rounded-md outline-none"
                                    {...register("message", { required: true })}
                                />
                                <br />
                                {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className="flex mt-4 ">
                                <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-700">Submit</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}


export default Contact