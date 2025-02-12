import React from 'react'

const AccountSettingsUI = () => {
    return (

        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0  bg-gray-100">
             
            <div className="flex-auto p-4">
                <div>
                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                        User Information
                    </h6>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                    Username
                                </label>
                                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="lucky.jesse" />
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                    Email address
                                </label>
                                <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="jesse@example.com" />
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                    First Name
                                </label>
                                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Lucky" />
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                    Last Name
                                </label>
                                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Jesse" />
                            </div>
                        </div>
                    </div>

                    <hr className="mt-6 border-b-1 border-blueGray-300" />

                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                        Contact Information
                    </h6>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-12/12 px-4">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                    Address
                                </label>
                                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
                            </div>
                        </div>
                        <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                    City
                                </label>
                                <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="New York" />
                            </div>
                        </div>
                        <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                    Country
                                </label>
                                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="United States" />
                            </div>
                        </div>
                        <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                    Postal Code
                                </label>
                                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Postal Code" />
                            </div>
                        </div>
                    </div>

                    <hr className="mt-6 border-b-1 border-blueGray-300" />

                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                        About Me
                    </h6>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-12/12 px-4">
                            <div className="relative w-full mb-3">
                               
                                <textarea type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"> A beautiful UI Kit and Admin for JavaScript &amp; Tailwind CSS. It is Freeand Open Source.</textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AccountSettingsUI