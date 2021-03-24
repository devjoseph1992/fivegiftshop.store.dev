const Header = ({ find }) => {
    return (
            <section className='bg-green-600'>
                <div className='flex justify-between px-4 py-3'>
                    <div className='relative sm:max-w-sm sm:w-full'>
                        <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
                            <svg className='h-6 w-6 fill-current text-gray-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" cliprole="evenodd"/>
                            </svg>
                        </div>
                        <input className='block w-full bg-green-700 focus:outline-none focus:bg-white focus:text-gray-400 text-white rounded-lg pl-10 pr-3 py-2' placeholder='Search item'/>
                    </div>
                <button className='ml-4 inline-flex bg-green-700 hover:bg-green-600 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4 items-center'
                    onClick={find}
                >
                    <svg className='h-6 w-6 fill-current text-gray-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                    </svg>
                    <span className='ml-1 text-white font-meduim'>Filter</span>
                </button>
                </div>
            </section>
    )
}

export default Header