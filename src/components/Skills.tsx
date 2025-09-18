import pbp2 from './assets/pbp2.png';
import pbp1 from './assets/pbpcase.jpg';
import pw1 from './assets/pw1.jpg';
import appl from './assets/appl.jpg';

export function Skills() {
  const skillCategories = [
    {
      icon: pbp2,
      title: "Google Pixel Buds Pro 2",
      description: "2nd Generation Google Pixel Buds Pro with ANC - Buds",
      link: "https://store.google.com/product/pixel_buds_pro_2?hl=en-US",
      linktext: "Official Google Store"
    },
    {
      icon: pbp1,
      title: "Google Pixel Buds Pro",
      description: "1st Generation Google Pixel Buds Pro with ANC - Case",
      link: "",
      linktext: ""
    },
    {
      icon: pw1,
      title: "Google Pixel Watch",
      description: "1st Generation Google Pixel Watch",
      link: "",
      linktext: ""
    },
    {
      icon: appl,
      title: "Apple iMac and Macbook Air",
      description: "Intern on 2017 iMac (21.5\", 27\") and 2018 Macbook Air",
      link: "",
      linktext: ""
    }
  ];

  return (
    <section id="skills" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl">Products I've helped bring to life</h2>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              return (
                <div key={index} className="relative bg-white border rounded-xl p-6">
                  <div className="flex flex items-center justify-center text-center">
                    <h3>{category.title}</h3>
                  </div>
                  
                  <div className="flex flex items-center justify-center text-center">
                    <img src={category.icon} alt = "Image" className="h-30 w-30 object-scale-down"/>
                  </div>

                  <p className="text-sm text-muted-foreground flex items-center justify-center text-center mb-4">
                    {category.description}
                  </p>

                  {/*<p className="text-sm text-gray-100 text-muted-foreground flex items-center justify-center text-center mb-4">
                    <a href={category.link}>{category.linktext}</a>
                  </p>*/}
                  
                  {/*<div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-slate-200 text-sm rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>*/}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}