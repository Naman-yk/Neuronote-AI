import { PenBox, Pizza } from 'lucide-react';

export default function DemoSection(){
    return (
    <section className="relative">
        <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
         
            <div className="flex flex-col items-center text-center space-y-4">
                <PenBox className='w-6 h-6 text-rose-500' />
                <div className='text-centre mb-16'>
                <h3 className='font-bold text-3xl max-w-2xl max-auto px-4 sm:px-6 '>Watch hiw Neuronote transforms <span className='text-red-600'>this Next.js</span>  course PDF into an easy-to-read summary!</h3>
            </div>
             <div className='flex justify-center items-center px-2 sm:px-5 lg:px-6'></div>
             {/**Summary viewer */}


            </div>

        </div>

    </section>
    );
}