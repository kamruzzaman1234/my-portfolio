"use client";
import { Cinzel_Decorative, Poppins } from "next/font/google";
import Link from "next/link";

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['300', '400',  '600', '700'],
    display: 'swap'
})

const ProjectArea = ()=>{
    return(
        <div className="">
            <div className="max-w-5xl w-full mx-auto">
                <div className="mb-10">
                    <h2 className={`${cinzel_decorative.className} text-3xl font-semibold text-white`}>my project</h2>    
                </div> 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-2">
                    <div className="px-6 py-8 flex flex-col gap-4 shadow-lg shadow-white">
                        <div className="w-full">
                            <img src="https://i.ibb.co.com/KzwzHtBn/Vite-React-08-10-2025-11-13-AM-1.png"
                            className="w-full object-cover" alt="" />
                        </div>
                        <div className="space-y-4">
                            <h3 className={`${cinzel_decorative.className}
                            text-white text-2xl font-semibold`}>Consultaion Service By Doctor</h3>
                            <p className={`${poppins.className} text-sm text-white`}>Digital Health Care is a web-based platform designed to provide users with accessible, 
                            efficient, and convenient health services online. The platform connects patients with
                            healthcare professionals, enabling features like virtual consultations,
                             appointment bookings, 
                            medical record management,
                             and health monitoring.The goal of the system is to bridge the gap between patients and healthcare 
                             providers by using modern technology to offer services remotely, 
                            especially for those in rural or underserved areas.</p>
                            <div className="flex justify-between">
                                <Link href="https://service-by-doctor-project.web.app/" className={`${cinzel_decorative.className}
                                px-2 py-2 rounded-lg font-bold bg-white text-black 
                                shadow-lg shadow-white`}>View project</Link>

                                <Link href="https://github.com/kamruzzaman1234/Constultion_Services_By_Doctor_Client" className={`${cinzel_decorative.className}
                                px-2 py-2 rounded-lg font-bold bg-white text-black 
                                shadow-lg shadow-white`}>GitHub</Link>
                            </div>
                        </div>
                    </div>

                     <div className="px-6 py-8 flex flex-col gap-4 shadow-lg shadow-white">
                        <div className="w-full">
                            <img src="https://i.ibb.co.com/3ytFxyj2/photo-1605146769289-440113cc3d00.jpg"
                            className="w-full object-cover" alt="" />
                        </div>
                        <div className="space-y-4">
                            <h3 className={`${cinzel_decorative.className}
                            text-white text-2xl font-semibold`}>Booking Application Real Estate</h3>
                            <p className={`${poppins.className} text-sm text-white`}>This is a real estate web application built using the MERN stack. 
                                The platform allows users to browse available properties, view detailed information about each listing, and, if they are sellers,
                                add their own property listings.The backend is developed with Node.js and Express.js, where RESTful APIs handle all the core functionalities.
                                MongoDB is used as the database to store user and property data. On the frontend, React.js is used to build a responsive and
                                dynamic user interface.Key features include user authentication, CRUD operations
                                for property listings, protected routes, and a clean, mobile-friendly UI..</p>
                            <div className="flex justify-between">
                                <Link href="https://rea-estate-project-8538e.web.app/" className={`${cinzel_decorative.className}
                                px-2 py-2 rounded-lg font-bold bg-white text-black 
                                shadow-lg shadow-white`}>View project</Link>

                                <Link href="https://github.com/kamruzzaman1234/real-state-project-client" className={`${cinzel_decorative.className}
                                px-2 py-2 rounded-lg font-bold bg-white text-black 
                                shadow-lg shadow-white`}>GitHub</Link>
                            </div>
                        </div>
                    </div>

                    <div className="px-6 py-8 flex flex-col gap-4 shadow-lg shadow-white">
                        <div className="w-full">
                            <img src="https://i.ibb.co.com/RGdfhTyh/Screenshot-37.png"
                            className="w-full object-cover" alt="" />
                        </div>
                        <div className="space-y-4">
                            <h3 className={`${cinzel_decorative.className}
                            text-white text-2xl font-semibold`}>University Portal Management System</h3>
                            <p className={`${poppins.className} text-sm text-white`}>Portal Management System – A responsive web application for managing users,
                                roles, and content efficiently. Built with Next.js, Tailwind CSS, 
                                Node.js, Express.js, and MongoDB, it features secure authentication and authorization using NextAuth, dynamic dashboards, profile management, and seamless user
                                experiences across all devices.
                                Technologies: Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, NextAuth
</p>
                            <div className="flex justify-between">
                                <Link href="https://portal-management-system-frontend.vercel.app" className={`${cinzel_decorative.className}
                                px-2 py-2 rounded-lg font-bold bg-white text-black 
                                shadow-lg shadow-white`}>View project</Link>

                                <Link href="https://github.com/kamruzzaman1234/portal-management-system-frontend" className={`${cinzel_decorative.className}
                                px-2 py-2 rounded-lg font-bold bg-white text-black 
                                shadow-lg shadow-white`}>GitHub</Link>
                            </div>
                        </div>
                    </div>

                     <div className="px-6 py-8 flex flex-col gap-4 shadow-lg shadow-white">
                        <div className="w-full">
                            <img src="https://i.ibb.co.com/CsnvHbvf/ielts-course-banner-design-with-text-vector-45072734.jpg"
                            className="w-full object-cover" alt="" />
                        </div>
                        <div className="space-y-4">
                            <h3 className={`${cinzel_decorative.className}
                            text-white text-2xl font-semibold`}>ITELS COURSE WEBSITE</h3>
                            <p className={`${poppins.className} text-sm text-white`}>As part of my ITELS course, I developed a dynamic and responsive web application using React.js. 
                                The main objective of the project was to apply modern frontend development skills and create an 
                                interactive user interface with smooth navigation and optimized performance.
                              The application was designed with component-based architecture, ensuring reusable and maintainable code. 
                              I implemented React Router for seamless page navigation,
                integrated state management for efficient data handling, and applied Tailwind CSS for a clean and responsive UI design.</p>
                            <div className="flex justify-between">
                                <Link href="https://ielts-course-by-munzereen-shahid-six.vercel.app/" className={`${cinzel_decorative.className}
                                px-2 py-2 rounded-lg font-bold bg-white text-black 
                                shadow-lg shadow-white`}>View project</Link>

                                <Link href="https://github.com/kamruzzaman1234/IELTS-Course-by-Munzereen-Shahid.git" className={`${cinzel_decorative.className}
                                px-2 py-2 rounded-lg font-bold bg-white text-black 
                                shadow-lg shadow-white`}>GitHub</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectArea;