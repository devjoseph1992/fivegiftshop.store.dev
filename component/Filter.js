const Filter = ({ isFilter, find}) => {
    return (
            <form className={isFilter ? 'bg-green-600' : 'hidden'}>
                <div className='px-4 border-t border-green-900'>
                    <div className='mt-2'>
                        <label>
                            <span className='text-sm font-semibold text-white'>Price Range</span>
                            <select className='mt-1 form-select form-input-dark block w-full shadow text-white'>
                                <option>
                                    Up to 100 pesos
                                </option> 
                            </select>
                        </label>
                    </div>
                    </div>
                    <div className='px-4 mt-4 border-t border-green-900'>
                        <span className='block text-sm font-semibold text-white'>Category</span>
                        <div className='sm:flex sm:-mx-2'>
                            <label className='flex items-center sm:w-1/4 sm:px-2'>
                                <input className='form-radio bg-green-700' type='radio' name='categoryType' value='boys'/>
                                <span className='ml-2 text-white'>boys</span> 
                            </label>
                            <label className='flex items-center sm:w-1/4 sm:px-2'>
                                <input className='form-radio bg-green-700' type='radio' name='categoryType' value='girl'/>
                                <span className='ml-2 text-white'>girl</span>    
                            </label>    
                        </div>    
                    </div>
                    <div className='px-4 mt-4 mb-3 border-t border-green-900'>
                        <span className='block text-sm font-semibold text-white'>Collection</span>
                        <div className='sm:flex sm:-mx-2 sm:flex-wrap'>
                            <label className='flex items-center sm:w-1/4 sm:px-2'>
                                <input className='h-4 w-4 form-checkbox bg-green-700' type='checkbox' name='shoes'/>
                                <span className='ml-2 text-white'>ball</span>
                            </label>
                            <label className='flex items-center sm:w-1/4 sm:px-2'>
                                <input className='h-4 w-4 form-checkbox bg-green-700' type='checkbox' name='shoes'/>
                                <span className='ml-2 text-white'>shoes</span>    
                            </label>
                        </div>    
                    </div>
                <div className='bg-green-800 px-4 py-4 sm:text-right'>
                    <button className='block w-full sm:w-auto sm:inline-block bg-green-700 hover:bg-green-600 font-semibold text-white px-4 py-2 rounded-lg' onClick={find}>Update filters</button>
                </div>  
            </form>
    )
}

export default Filter
