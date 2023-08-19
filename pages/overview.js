import Hhead from '../components/Hhead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Overview() {
    return (
        <>
            <Hhead data={"Overview"} />
            <Header nav={"Home"} lin={'/'} />
            <h1 className='mt-5 text-3xl font-bold leading-9 tracking-tight text-center text-gray-900' >Hello In Overview Page</h1>
            <Footer data={""}/>
        </>
    )
}