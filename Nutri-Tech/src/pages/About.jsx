const About = () => {
    return (
      <div className="min-h-screen px-6 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6">
          <h2 className="text-3xl font-bold text-green-700">About Smart Nutrition</h2>
          <p className="text-gray-700 text-lg">
            <strong>Smart Nutrition</strong> is a cutting-edge platform that helps users analyze
            their meals through image uploads, providing detailed nutritional breakdowns
            and personalized health recommendations. Our goal is to promote healthier eating
            habits through technology-driven solutions.
          </p>
  
          <div>
            <h3 className="text-2xl font-semibold text-green-600 mb-3">Meet the Founders</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li>Ishan Chhaparwal</li>
              <li>Stimit Keluskar</li>
              <li>Manish Punde</li>
              <li>Vivek Khasaki</li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold text-green-600 mt-6">Our Mission</h3>
            <p className="text-gray-700 mt-2">
              We believe that understanding nutrition should be easy and accessible for everyone.
              With the power of AI and user-friendly interfaces, Smart Nutrition aims to make
              dietary awareness a part of everyone’s daily life.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  