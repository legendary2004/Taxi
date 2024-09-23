import SectionHeader from "../../components/headers/SectionHeader"
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import ContactItem from "../../components/lists/listItems/ContactItem";
import ContactInput from "../../components/inputs/ContactInput";
import { FormEvent, useState } from "react";
import { contactObj, handleAuthChange, handleContactChange } from "../../components/variables/auth";
import TextArea from "../../components/inputs/TextArea";
import axios from "axios";
import IsRegisteredModal from "../../components/modals/IsRegisteredModal";
import MaxScreenXl from "../../components/classes/ScreenXL";

const Contact = () => {
    const [formProp, setFormProp] = useState(contactObj)
    const iconClass = "w-8 h-8 text-gray-500"
    const [msg ,setMsg] = useState("")

    const submitForm = (e: FormEvent) => {
        e.preventDefault()
        axios.post("http://localhost:5000/contact", formProp)
        .then(res => setMsg(res.data.message))
    }

    return (
        <div id="contact" className="relative bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
           <MaxScreenXl>
                <div className="mt-6 overflow-hidden">
                    <div className="">
                        <div className="mr-2 bg-transparent">
                            <SectionHeader header="Get in touch" />
                            <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2 text-center">
                                Fill in the form to start a conversation
                            </p>
                            <div className="flex flex-wrap items-center justify-center space-x-4 mt-4">
                                <ContactItem label="Rruga Pandi Dardha, Tirane, Laprake, 1001" icon={<FaLocationDot className={iconClass} />} />
                                <ContactItem label="deanmaja6@gmail.com" icon={<MdEmail className={iconClass} />} />
                                <ContactItem label="+355 684780912" icon={<FaPhoneAlt className={iconClass} />} />
                            </div>
                        </div>

                        <form onSubmit={submitForm} className="p-6 flex flex-col justify-center">
                            <ContactInput 
                                    id="email"
                                    label="Email"
                                    type="email"
                                    placeholder="Email"
                                    value={formProp.email}
                                    isRequired={true}
                                    icon
                                    handleChange={(e: FormEvent<HTMLInputElement>) => handleAuthChange(e, setFormProp)}
                            />
                            <ContactInput 
                                    id="subject"
                                    label="Subject"
                                    type="text"
                                    placeholder="Subject"
                                    value={formProp.subject}
                                    isRequired={true}
                                    icon
                                    handleChange={(e: FormEvent<HTMLInputElement>) => handleAuthChange(e, setFormProp)}
                            />
                            <TextArea 
                                    id="message"
                                    label="Message"
                                    type=""
                                    placeholder="Message"
                                    value={formProp.message}
                                    isRequired={true}
                                    icon
                                    handleChange={(e: FormEvent<HTMLTextAreaElement>) => handleContactChange(e, setFormProp)}
                            />
                            <button type="submit" className="md:w-32 mx-auto bg-yellow-300 hover:bg-yellow-400 hover:text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
                                Submit
                            </button>
                        </form>
                        {msg && <IsRegisteredModal message={msg} closeModal={() => setMsg("")} />}
                    </div>
                </div>
           </MaxScreenXl>
        </div>
    )
}

export default Contact