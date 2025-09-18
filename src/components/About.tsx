// Import Image 
import pbp2 from './assets/bry.png';
import ln from './assets/ln.png';

export function About() {
  return (
    <section id="about" className="pt-10 pb-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* Content */}
            <div className="flex flex items-center justify-center text-center">
              <img src={pbp2} alt = "Image" className="object-fill border rounded-xl opacity-80"/>
            </div>
            <div className="space-y-1">
              <div>
                <h1 className="text-4xl lg:text-5xl mb-4">
                  Hi, I'm Bryan.
                </h1>
                <p className="text-xl text-black">
                  Mechanical Product Design Engineer
                </p>
                <p className="text-s text-gray-500">
                  Ex-Google, Ex-Apple, UC Berkeley Alumni
                </p>
                <p className="text-sm text-gray-400">
                  M.S. Mechanical Engineering, 2017<br/> 
                  B.S. Mechanical Engineering, 2016<br/>
                  B.S. Electrical Engineering Computer Science, 2016
                </p> 
              </div>

              <div className="space-y-1 text-gray-600">
                <p>
                  I have 7 years of experience shipping products in the 
                  consumer electronics industry. I've primarily worked on small form factor 
                  products that are dense with components and systems. 
                </p>
              </div>
              
              <div className="text-gray-600 text-sm">
                <p>
                  Connect with me:
                </p>
              </div>

              <div className="h-5 w-5 text-xs">
                <a href="https://www.linkedin.com/in/bryanthov"><img src={ln} alt = "Image" className="object-fill opacity-100"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}