import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaTiktok, FaLinkedin, FaInstagram } from "react-icons/fa";

const Inscription = () => {
    const form = useRef();
    const navigate = useNavigate();
    const theme = "light";

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_6voowoi", "template_85x9tq8", form.current, {
                publicKey: "2AKOY4Yjp3zjZi6vS",
            })
            .then(
                () => {
                    navigate("/");
                    toast("Demande d'inscription envoyée avec succès", {
                        type: "success",
                        position: "top-center",
                    });
                },
                (error) => {
                    toast(`La demande n'a pas été envoyée. Veuillez réessayer.`, {
                        type: "error",
                        position: "top-center",
                    });
                }
            );
    };

    return (
        <div
            className={`min-h-screen ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"
                }`}
            style={{ fontFamily: "Poppins, sans-serif" }}
        >
            <div
                className="flex flex-col items-center justify-between p-8 text-white lg:flex-row font-poppins"
                style={{
                    background: theme === "dark" ? "black" : "white",
                    backgroundSize: "400% 400%",
                    animation: "Gradient 5s ease infinite",
                    height: "40vh",
                }}
            >
                <motion.div
                    className="max-w-xl mx-auto mb-8 text-center lg:mb-0"
                    initial={{ y: "-100vh" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                >
                    <h1
                        className={`text-4xl sm:text-6xl lg:text-6xl font-bold font-poppins ${theme === "dark" ? "text-white" : "text-black"
                            } mt-16 sm:mt-20 lg:mt-0`}
                    >
                        Inscrivez-vous à notre <span style={{ color: "#662d91" }}>école</span>
                    </h1>
                </motion.div>
                <style jsx>{`
                    @keyframes Gradient {
                      0% {
                        background-position: 0% 50%;
                      }
                      50% {
                        background-position: 100% 50%;
                      }
                      100% {
                        background-position: 0% 50%;
                      }
                    }
                `}</style>
            </div>
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="mb-6 text-lg font-semibold">
                        COMMENCEZ VOTRE PARCOURS ÉDUCATIF AVEC NOUS DÈS AUJOURD'HUI.
                    </p>
                </div>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Nom de l'élève*"
                        className={`border ${theme === "dark"
                            ? "border-gray-600 bg-zinc-700 text-white"
                            : "border-gray-300 bg-white text-black"
                            } p-2 rounded sm:col-span-1`}
                        required
                    />
                    <input
                        type="text"
                        name="prenom"
                        placeholder="Prénom de l'élève*"
                        className={`border ${theme === "dark"
                            ? "border-gray-600 bg-zinc-700 text-white"
                            : "border-gray-300 bg-white text-black"
                            } p-2 rounded sm:col-span-1`}
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Email du parent/tuteur*"
                        className={`border ${theme === "dark"
                            ? "border-gray-600 bg-zinc-700 text-white"
                            : "border-gray-300 bg-white text-black"
                            } p-2 rounded sm:col-span-2 min-h-[30px]`}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Informations supplémentaires (niveau scolaire, besoins spécifiques, etc.)*"
                        className={`border ${theme === "dark"
                            ? "border-gray-600 bg-zinc-700 text-white"
                            : "border-gray-300 bg-white text-black"
                            } p-2 rounded sm:col-span-2 min-h-[120px]`}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        value="Send"
                        className={`w-full ${theme === "dark"
                            ? "bg-[#e34420] text-white hover:bg-[#e2101b]"
                            : "bg-[#e34420] text-white hover:bg-[#e2101b]"
                            } border-2 border-gradient-to-r from-[#A8D9E0] via-[#C7A2CB] to-[#6A71B3] font-bold rounded-2xl py-3 sm:col-span-2 transition`}
                    >
                        SOUMETTRE LA DEMANDE D'INSCRIPTION
                    </button>
                </form>
                <div className="flex justify-center gap-6 mt-6 text-2xl cursor-pointer">
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                        <FaTiktok />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Inscription;