const Filter = ({ isFilter, find}) => {
    return (
            <form className={isFilter ? 'bg-green-600' : 'hidden'}>
                <div className='lg:flex'>
                    <div className='px-4 py-4 border-t border-green-900 lg:w-1/3'>
                        <div className=''>
                            <label className='lg:mb-4 lg:w-1/2'>
                                <span className='text-sm font-semibold text-white'>Price Range</span>
                                <select className='mt-1 form-select form-input-dark block w-full shadow text-white'>
                                    <option>
                                    Up to 100 pesos
                                    </option> 
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className='px-4 py-4 border-t border-green-900 lg:w-1/3 lg:border-l lg:border-green-900'>
                        <span className='block text-sm font-semibold text-white'>Category</span>
                        <div className='sm:flex sm:-mx-2 lg:block lg:mx-0'>
                            <label className=' sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0'>
                                <input className='form-radio bg-green-700' type='radio' name='categoryType' value='boys'/>
                                <span className='ml-2 text-white'>boys</span> 
                            </label>
                            <label className=' sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0'>
                                <input className='form-radio bg-green-700' type='radio' name='categoryType' value='girl'/>
                                <span className='ml-2 text-white'>girl</span>    
                            </label>    
                        </div>  
                    </div>
                    <div className='px-4 py-4 border-t border-green-900 lg:w-1/3 lg:border-l lg:border-green-900'>
                        <span className='block text-sm font-semibold text-white'>Collection</span>
                        <div className='sm:flex sm:-mx-2 sm:flex-wrap'>
                            <label className='sm:w-1/4 sm:px-2 flex items-center lg:w-1/2 lg:px-0'>
                                <input className='h-4 w-4 form-checkbox bg-green-700' type='checkbox' name='shoes'/>
                                <span className='ml-2 text-white'>ball</span>
                            </label>
                            <label className='sm:w-1/4 sm:px-2 flex items-center lg:w-1/2 lg:px-0'>
                                <input className='h-4 w-4 form-checkbox bg-green-700' type='checkbox' name='shoes'/>
                                <span className='ml-2 text-white'>shoes</span>    
                            </label>
                        </div>    
                    </div>   
                </div>
                <div className='bg-green-800 px-4 py-4 sm:text-right'>
                    <button className='block w-full sm:w-auto sm:inline-block bg-green-700 hover:bg-green-600 font-semibold text-white px-4 py-2 rounded-lg' onClick={find}>Update filters</button>
                </div>  
            </form>
    )
}

export default Filter
