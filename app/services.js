import background from './images/car-background.webp';

export default function services() {
    return (
        <div id='services'>
            <section className='pageHeader'>
                <h1>
                    OUR SERVICES 
                </h1>
            </section>
            <section className="cardContainer">
                <div className='servicesCard'>
                    <div className='servicesCardImage servicesCardImage-1'></div>
                    <h2>Service 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies tincidunt sodales. Donec in sapien nibh. Morbi tempor lectus vitae purus ex.</p>
                    <a href='#'>READ MORE</a>
                </div>
                <div className='servicesCard'>
                    <div className='servicesCardImage servicesCardImage-2'></div>
                    <h2>Service 2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies tincidunt sodales. Donec in sapien nibh. Morbi tempor lectus vitae purus ex.</p>
                    <a href='#'>READ MORE</a>
                </div>
                <div className='servicesCard'>
                    <div className='servicesCardImage servicesCardImage-3'></div>
                    <h2>Service 3</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies tincidunt sodales. Donec in sapien nibh. Morbi tempor lectus vitae purus ex.</p>
                    <a href='#'>READ MORE</a>
                </div>
                <div className='servicesCard'>
                    <div className='servicesCardImage servicesCardImage-4'></div>
                    <h2>Service 4</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies tincidunt sodales. Donec in sapien nibh. Morbi tempor lectus vitae purus ex.</p>
                    <a href='#'>READ MORE</a>
                </div>
            </section>
        </div>
    )   
}