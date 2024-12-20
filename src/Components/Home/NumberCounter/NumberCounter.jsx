import React from 'react'
import CountUp from 'react-countup';

function NumberCounter() {
  return (
    <div className='bg-secondary py-12 text-white'>
        <div className='container grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='flex flex-col justify-center items-center space-y-1'>
                <p className='text-3xl font-semibold'>
                    <CountUp 
                    start={0}
                    end={872}
                    duration={3}
                    enableScrollSpy = {true}
                    scrollSpyOnce = {true}
                    />
                </p>
                <p className='text-md '>Expert tutors</p>
            </div>
            <div className='flex flex-col justify-center items-center space-y-1'>
                <p className = 'text-3xl font-semibold'>
                    <CountUp
                    start={0}
                    end={20000}
                    suffix='+'
                    duration={3}
                    enableScrollSpy = {true}
                    scrollSpyOnce = {true}
                    />
                </p>
                <p>Hours content</p>
            </div>
            <div className='flex flex-col justify-center items-center space-y-1'>
                <p className = 'text-3xl font-semibold'>
                    <CountUp 
                    start={0}
                    end={298}
                    duration={3}
                    enableScrollSpy = {true}
                    scrollSpyOnce = {true}
                    />
                </p>
                <p className='flex text-center'>Subject and courses</p>
            </div>
            <div className='flex flex-col justify-center items-center space-y-1'>
                <p className = 'text-3xl font-semibold'>
                    <CountUp 
                    start={0}
                    end={72878}
                    separator=','
                    suffix='+'
                    duration={3}
                    enableScrollSpy = {true}
                    scrollSpyOnce = {true}
                    />
                </p>
                <p>Active students</p>
            </div>



        </div>
                
           
       
      
    </div>
  )
}

export default NumberCounter
